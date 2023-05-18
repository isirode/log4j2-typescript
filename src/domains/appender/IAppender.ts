import { ILogEvent } from "../ILogEvent";
import { ILayout } from "../layout/ILayout";

export interface IAppender {
  name: string;
  layout: ILayout;
  handle(logEvent: ILogEvent): void;
}