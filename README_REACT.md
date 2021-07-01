## Generate a React application (react-demos)

Run `nx g @nrwl/react:app react-demos` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

> Make react publishable and buildable library

Run `nx g @nrwl/react:lib react --publishable --buildable --importPath=fds-react` to generate a react library

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nx-configuration/react`.

## Generate a Storybook for React

> For react project

Run `nx g @nrwl/react:storybook-configuration react`

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

## Development server for React

For react-demos application dev-server

> Run `nx serve react-demos`

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

To create components in react application

> Run `nx g @nrwl/react:component my-component --project=react` to generate a new component

## Build Application

> For React Application

Run `nx build react-demos` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build Libraries

> For react application

To build library for react project run `npm run build-react-lib`. In `dist/`
folder you will have a npm pubishable package.

## Running unit tests

Run `ng test react-demos` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e react-demos` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.
