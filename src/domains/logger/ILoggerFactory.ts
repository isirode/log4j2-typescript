import Emittery from "emittery";
import { ILogger } from "./ILogger";
import { Events } from "./Logger";

export interface ILoggerFactory {
  // FIXME : should this be part of the API ?
  events: Emittery<Events>;
  getLogger(loggerName: string): ILogger;
}