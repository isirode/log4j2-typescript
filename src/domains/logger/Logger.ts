import Emittery from "emittery";
import { ILogEvent } from "../ILogEvent";
import { ILogger } from "./ILogger";
import { Level } from "../Level";

export interface Events {
  log: ILogEvent;
}

export class Logger implements ILogger {

  name: string;
  events: Emittery<Events>;

  constructor(name: string, events: Emittery<Events>) {
    this.name = name;
    this.events = events;
  }

  debug(message: string, object?: object, error?: Error) {
    this.base(Level.DEBUG, message, object, error);
  }

  info(message: string, object?: object, error?: Error) {
    this.base(Level.INFO, message, object, error);
  }

  warn(message: string, object?: object, error?: Error) {
    this.base(Level.WARN, message, object, error);
  }

  error(message: string, object?: object, error?: Error) {
    this.base(Level.ERROR, message, object, error);
  }
  
  base(level: Level, message: string, object?: object, error?: Error) {
    let event: ILogEvent = {
      loggerName: this.name,
      message: message,
      level: level,
      object: object,
      error: error,
      time: new Date()
    };
    this.events.emit('log', event);
  }

}