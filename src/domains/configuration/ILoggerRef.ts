import { Level } from "../Level";
import { IAppenderRef } from "../appender/IAppenderRef";

export interface ILoggerRef {
  // FIXME : I am not sure if name is necessary
  name: string | undefined;
  level: Level;
  refs: IAppenderRef[];
}