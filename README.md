# NxConfiguration

This project was generated using [Nx](https://nx.dev).

<p  style="text-align: center;"><img  src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"  width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Create Nx-workspace

Created an empty Nx-monorepo using nx-cli
Command: `npx nx-create-workspace nx-configuration`

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://nx.dev/latest/angular/angular/overview)

- `npm install -D @nrwl/angular`

- [React](https://nx.dev/previous/angular/react/overview)

- `npm install -D @nrwl/react`

- Web (no framework frontends)

- `npm install -D @nrwl/web`

- [Storybook](https://nx.dev/latest/angular/storybook/overview)

- `npm install -D @nrwl/storybook`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an Angular application (angular-demos)

Run `nx g @nrwl/angular:app angular-demos` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a React application (react-demos)

Run `nx g @nrwl/react:app angular-demos` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

> Make angular publishable and buildable library

Run `nx g @nrwl/angular:lib angular --publishable --buildable --importPath=fds-angular` to generate an angular library.

> Make react publishable and buildable library

Run `nx g @nrwl/angular:lib angular --publishable --buildable --importPath=fds-angular` to generate a react library

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nx-configuration/angular`.

## Storybook

> For angular project

Run `nx g @nrwl/angular:storybook-configuration angular`

> For react project

Run `nx g @nrwl/react:storybook-configuration react`

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

## Development server for angular/react

For angular-demos application dev-server

> Run `nx serve angular-demos`

For react-demos application dev-server

> Run `nx serve react-demos`

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

To create components in angular application

> Run `nx g @nrwl/angular:component my-component --project=my-app` to generate a new component.

> Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component

## Build Application

> For Angular Application

Run `nx build angular-demos` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

> For React Application

Run `nx build react-demos` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build Libraries

> For angular application

To build library for angular project run `npm run build-angular-lib`. In `dist/`
folder you will have a npm pubishable package.

## Running unit tests

Run `ng test angular-demos` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p  style="text-align: center;"><img  src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
