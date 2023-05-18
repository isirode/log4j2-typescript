import { ILogEvent } from "../ILogEvent";
import { FilterResult } from "./FilterResult";

export interface IFilter {
  filter(logEvent: ILogEvent): FilterResult;
}