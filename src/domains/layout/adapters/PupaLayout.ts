import { ILogEvent } from "../../ILogEvent";
import { ILayout } from "../ILayout";
import pupa from 'pupa';

export class PupaLayout implements ILayout {

  pattern: string;

  constructor(pattern: string) {
    this.pattern = pattern;
  }

  format(logEvent: ILogEvent): string {
    return pupa(this.pattern, logEvent);
  }

}