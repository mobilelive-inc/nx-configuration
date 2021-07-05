# Friday - The Design System

Friday is MobileLIVE's open-source design system for products and digital experiences. With the MobileLIVE Design System as its foundation, the system consists of a working code for multiple frameworks and examples with it.

To combine the code for multiple implementations in the one project we use the monorepos technology [NX](https://github.com/nrwl/nx).

> Guide to setup repo for [Nx](README_Nx.md)

There are several sub-projects with implementations, you can find details by the links below:

- [HTML+CSS](README_STATIC.md)

- [React](README_REACT.md)

- [Angular](README_ANGULAR.md)

## Available Compoents

- [Compoents](README_COMPONENTS.md)

## Requirements

The MobileLIVE Friday Design System team aims to support browsers and screen reader combinations across all internal team segments.

This support list gets updated on an occasional basis.

### Browsers support

**Desktop browsers (Windows, macOS)**

- Chrome latest

- Firefox latest and extended support release (ESR)

- Safari 2 most recent major versions

- Microsoft Edge 2 most recent major versions

- Internet Explorer 11

**Mobile (Android, iOS)**

- Chrome (Android) X (10.0), Pie (9.0), Oreo (8.0), Nougat (7.0)

- Safari (iOS) 2 most recent major versions

### Accessibility support

**Screen readers combinations**

- Windows + IE11 + JAWS

- Windows + Firefox + NVDA

- macOS + Safari + VoiceOver

- Android + Chrome + Talkback

- iOS + Safari + VoiceOver

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
