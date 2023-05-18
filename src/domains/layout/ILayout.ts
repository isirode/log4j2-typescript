import { ILogEvent } from "../ILogEvent";

export interface ILayout {
  format(logEvent: ILogEvent): string;
}