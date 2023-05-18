# log4j2-typescript

Disclaimer : not affiliated with log4j

Typescript port of log4j2, I am trying to be as most similar to the API of log4j2 as needed.

It is not a perfect port, and it is not the objective, but it should feel similar in utilization and results.

## Features

- [x] A very similar configuration system (and it is typed)
- [x] A very similar utilization inside a class

## Using the library

An example of how to use it below:

```typescript
// import the library
import { ConsoleAppender, IAppender, IConfiguration, ILayout, ILogEvent, Level, LogManager, PupaLayout } from 'log4j2-typescript';
// typically, you would use the import below inside a class, and the one above, in your main script
import { ILogger, LoggerFactory } from "log4j2-typescript";

// You declare the configuration as code (instead of XML)
const logConfiguration: IConfiguration = {
  appenders: [
    // this is an included appender
    // the pupa layout is included as well
    new ConsoleAppender("console", new PupaLayout("{loggerName} {level} {time} {message}")),
    // another appender named differently
    new TermAppender("term", new PupaLayout("{message}"))
  ],
  loggers: [
    {
      // this act as a filter, like it would in log4j
      name: "technical",
      // this is the level filter
      level: Level.INFO,
      refs: [
        {
          // this reference the appender named "console"
          ref: "console"
        }
      ]
    },
    {
      name: "term",
      level: Level.INFO,
      refs: [
        {
          ref: "term"
        }
      ]
    }
  ]
}

// this is will initiate the library, it is necessary to call it to get things started
// if you intent to override the singleton factory, you need to do it before using the factory
const logManager: LogManager = new LogManager(logConfiguration);

// you can create a logger this way, from anywhere in your code
// we prefix by technical so that it is logged in the console
const logger: ILogger = LoggerFactory.getLogger('technical.MyClass');
```

## Importing the project

It is not published yet, so you will need to follow the steps below:
- Clone the project
- Build it `npm run build`
- Link it `npm link`
- Or use the single liner `npm run local`
- Then, you can import it in your project using `npm link log4j2-typescript`

### Dependencies

You should not need to do any custom imports.

## Know issues

- The lookups are different that the one of log4j, and are limited, it is a work in progress

## Partipating

Open the [DEVELOPER.md](./DEVELOPER.md) section.

## License

It is provided with the GNU LESSER GENERAL PUBLIC LICENSE.

This is a typescript port of log4j2.
Copyright (C) 2023  Isirode

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
