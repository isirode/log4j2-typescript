import { ILogEvent } from "../../ILogEvent";
import { Level } from "../../Level";
import { ILayout } from "../../layout/ILayout";
import { IAppender } from "../IAppender";

export class ConsoleAppender implements IAppender {
  name: string;
  layout: ILayout;

  constructor(name: string, layout: ILayout) {
    this.name = name;
    this.layout = layout;
  }

  handle(logEvent: ILogEvent): void {
    const formattedEvent = this.layout.format(logEvent);
    switch(logEvent.level) {
      case Level.DEBUG:
        // FIXME : I am not sure wether we should log the object and error in another log
        console.debug(formattedEvent, logEvent.object, logEvent.error);
        break;
      case Level.INFO:
        console.info(formattedEvent, logEvent.object, logEvent.error);
        break;
      case Level.WARN:
        console.warn(formattedEvent, logEvent.object, logEvent.error);
        break;
      case Level.ERROR:
        console.error(formattedEvent, logEvent.object, logEvent.error);
        break;
      default:
        throw new Error(`unknown level ${logEvent.level}`);
    }
  }

}