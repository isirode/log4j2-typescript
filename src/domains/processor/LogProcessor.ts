import { isNullOrUndefinedOrEmptu } from "../../utils/StringUtils";
import { ILogEvent } from "../ILogEvent";
import { IAppender } from "../appender/IAppender";
import { IConfiguration } from "../configuration/IConfiguration";

export class LogProcessor {

  configuration: IConfiguration;
  appenders: Map<string, IAppender> = new Map();

  // TODO : validate appender ref and appenders

  constructor(configuration: IConfiguration) {
    this.configuration = configuration;
    for (let appender of this.configuration.appenders) {
      this.appenders.set(appender.name, appender);
    }
  }

  process(logEvent: ILogEvent) {
    for (let logger of this.configuration.loggers) {
      if (isNullOrUndefinedOrEmptu(logger.name) || logEvent.loggerName.startsWith(logger.name)) {
        if (logger.level >= logEvent.level) {
          for (let appenderRef of logger.refs) {
            let appender = this.getAppender(appenderRef.ref);
            if (appender == undefined) {
              // TODO : what to do ?
              continue;
            }
            appender.handle(logEvent);
          }
        }
      }
    }
  }

  getAppender(name: string): IAppender | undefined {
    return this.appenders.get(name);
  }
}