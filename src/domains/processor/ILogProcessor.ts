import { ILogEvent } from "../ILogEvent";

export interface ILogProcessor {
  process(logEvent: ILogEvent);
}