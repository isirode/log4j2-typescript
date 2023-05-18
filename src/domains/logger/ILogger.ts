export interface ILogger {
  name: string;
  info(message: string, object?: object, error?: Error): void;
  error(message: string, object?: object, error?: Error): void;
  warn(message: string, object?: object, error?: Error): void;
  debug(message: string, object?: object, error?: Error): void;
}
