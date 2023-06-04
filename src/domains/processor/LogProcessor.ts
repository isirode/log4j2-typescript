import { isNullOrEmpty } from "../../utils/StringUtils";
import { ILogEvent } from "../ILogEvent";
import { IAppender } from "../appender/IAppender";
import { IConfiguration } from "../configuration/IConfiguration";

export class LogProcessor {

  configuration: IConfiguration;
  appenders: Map<string, IAppender> = new Map();

  // TODO : validate appender ref and appenders

  constructor(configuration: IConfiguration) {
    this.configuration = configuration;
    for (let appender of this.configuration.appenders) {
      this.appenders.set(appender.name, appender);
    }
  }

  process(logEvent: ILogEvent): void {
    for (let logger of this.configuration.loggers) {
      // Warn : we cannot enable strict mode because of this line
      // isNullOrUndefinedOrEmpty is not utilizable
      // it does work when we check in the same line
      // the result is the same but the compiler is not smart enough to detect that
      if (logger.name === undefined || isNullOrEmpty(logger.name) || logEvent.loggerName.startsWith(logger.name)) {
        if (logEvent.level >= logger.level) {
          for (let appenderRef of logger.refs) {
            let appender = this.getAppender(appenderRef.ref);
            if (appender == undefined) {
              // FIXME : we want to log a warning
              // But we need an internal log sytem
              continue;
            }
            appender.handle(logEvent);
          }
        }
      }
    }
  }

  getAppender(name: string): IAppender | undefined {
    return this.appenders.get(name);
  }
}