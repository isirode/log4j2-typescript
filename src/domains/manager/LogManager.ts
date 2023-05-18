import { ILogEvent } from "../ILogEvent";
import { ConfigurationValidator } from "../configuration/ConfigurationValidator";
import { IConfiguration } from "../configuration/IConfiguration";
import { LoggerFactory } from "../logger/LoggerFactory";
import { ILogProcessor } from "../processor/ILogProcessor";
import { LogProcessor } from "../processor/LogProcessor";
import { ILogManager } from "./ILogManager";

export class LogManager implements ILogManager {

  processor: ILogProcessor;

  constructor(configuration: IConfiguration) {
    ConfigurationValidator.validate(configuration);
    
    this.processor = new LogProcessor(configuration);
    LoggerFactory.factory.events.on('log', (logEvent: ILogEvent) => {
      this.processor.process(logEvent);
    });
  }
  
}