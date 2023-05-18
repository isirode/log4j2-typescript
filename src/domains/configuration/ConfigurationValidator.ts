import { IAppender } from "../appender/IAppender";
import { IConfiguration } from "./IConfiguration";

export class ConfigurationValidator {
  // TODO : make a version that does not throw
  static validate(configuration: IConfiguration): void {
    const  appenders: Map<string, IAppender> = new Map();

    for (let appender of configuration.appenders) {
      appenders.set(appender.name, appender);
    }

    function getAppender(name: string): IAppender | undefined {
      return appenders.get(name);
    }

    for (let logger of configuration.loggers) {
      for (let appenderRef of logger.refs) {
        let appender = getAppender(appenderRef.ref);
        if (appender == undefined) {
          throw new Error(`appender ref '${appenderRef.ref}', used by logger '${logger.name}' was not found in the configuration`);
        }
      }
    }
  }
}

