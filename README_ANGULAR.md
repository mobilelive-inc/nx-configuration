## Generate an Angular application (angular-demos)

Run `nx g @nrwl/angular:app angular-demos` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate an Angular library

When using Nx, you can create multiple applications and libraries in the same workspace.

> Make angular publishable and buildable library

Run `nx g @nrwl/angular:lib angular --publishable --buildable --importPath=fds-angular` to generate a angular library

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nx-configuration/angular`.

## Storybook

Run `nx g @nrwl/angular:storybook-configuration angular`

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

## Development server for angular

For angular-demos application dev-server

> Run `nx serve angular-demos`

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

To create components in angular library

> Run `nx g @nrwl/angular:component my-component --project=angular` to generate a new component.

## Build Application

Run `nx build angular-demos` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build Libraries

> For angular application

To build library for angular project run `npm run build-angular-lib`. In `dist/`

folder you will have a npm pubishable package.

## Running unit tests

Run `ng test angular-demos` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e angular-demos` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.
