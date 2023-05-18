import { Level } from "./Level";

export interface ILogEvent {
  message: string;
  level: Level;
  object: any | undefined;
  error: Error | undefined;
  loggerName: string;
  time: Date;
  // TODO : add time
}