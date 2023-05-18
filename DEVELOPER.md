# Developer

## Participating

You can post an issue or you can open a PR, if there is a functionality that you think will be relevant to the project.

Your code will be posted using the same license as this project.

## Running tests

> npm test

Or

> yarn test

## Build

> npm run build

Or

> yarn build

## Features

- [x] Appenders
- [x] Filters
- [x] Loggers
- [x] Factory
- [ ] Lookups
  - I do not need it yet

## TODO

- Could detect wether the factory was instantiated more than once, and used, using a counter

- Stacktrace (I think that there is not equivalent of what exist in Java)

- Lombok @Slf4j equivalent
  - I think that there is not equivalent of what you could do in Java
  - Maybe with an extended interface, a decorator could work, but it would still be required to declare the logger
    - It is possible to access the class's name, but it is not garanteed to be preserved during minification
    - It would require further testing
  - Using a transformer would not work either

- Lookups
  - Need an augmentation framework, or a fallback framework, probably
