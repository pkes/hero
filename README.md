# Hero

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Stack

- Angular 11
- Json-Server (as FAKE API)
- Docker
- Angular Material (as CSS framework)
- Husky (as hooks pre-commit & pre-push)
- ESLint & Prettier
- Jest (for unit tests)

Run `npm i`

"test": "npx jest",
http://localhost:3000/heros?name_like=a
http://localhost:3000/heros?id=1&id=2&id=3&id=2

## Development server

1. Run `npm run server` to launch FAKE API in `http://localhost:3000`

2. Run `ng serve -o` to launch frontend application. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Docker

2. Run `docker-compose up --build -d` to launch FAKE API in `http://localhost:3000` and Angular in `http://localhost:4200`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running lint

Run `ng run lint` to execute ESLint or `ng run lint:fix` to try to fix it.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
