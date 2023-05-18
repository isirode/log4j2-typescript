export interface ILogger {
  name: string;
  info(message: string, object?: object, error?: Error);
  error(message: string, object?: object, error?: Error);
  warn(message: string, object?: object, error?: Error);
  debug(message: string, object?: object, error?: Error);
}
