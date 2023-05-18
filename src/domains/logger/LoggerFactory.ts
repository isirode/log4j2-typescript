import Emittery from "emittery";
import { ILogEvent } from "../ILogEvent";
import { ILogger } from "./ILogger";
import { ILoggerFactory } from "./ILoggerFactory";
import { Events, Logger } from "./Logger";

// FIXME : it is not very elegant to have the static functionalities, the default class and the class in the same class ?
export class LoggerFactory implements ILoggerFactory {

  events: Emittery<Events> = new Emittery();

  protected static _factory: ILoggerFactory;

  static get factory(): ILoggerFactory {
    if (LoggerFactory._factory === undefined) {
      LoggerFactory._factory = LoggerFactory.getDefault();
    }
    return LoggerFactory._factory;
  }

  static set factory(factory: ILoggerFactory) {
    LoggerFactory._factory = factory;
  }

  static getLogger(loggerName: string): ILogger {
    return LoggerFactory.factory.getLogger(loggerName);
  }

  static getDefault(): ILoggerFactory {
    return new LoggerFactory();
  }

  getLogger(loggerName: string): ILogger {
    return new Logger(loggerName, this.events);
  }

}