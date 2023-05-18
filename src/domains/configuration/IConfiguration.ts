import { IAppender } from "../appender/IAppender";
import { ILoggerRef } from "./ILoggerRef";

export interface IConfiguration {
  appenders: IAppender[];
  loggers: ILoggerRef[];
}