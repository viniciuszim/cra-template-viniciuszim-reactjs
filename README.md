# Pack Station WEB (README WIP)

This README would normally document whatever steps are necessary to get your application up and running.

## What is this repository for?

This repo contains the ReactJS code that builds for the LinOS Pack Station WEB Application.

## Stack

- [ReactJS](https://reactjs.org)
- [Prettier](https://prettier.io)
- [Eslint](https://eslint.org)
- [Bit](https://bit.dev)
- [Jest](https://jestjs.io)
- [Loggly](https://loggly.com)

## Prerequisite Installs

- [git](https://git-scm.com/downloads)
- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (Node v ^12.8.0)
- [VSCode](https://code.visualstudio.com/download)
- [Reactotron](https://github.com/infinitered/reactotron)

### Introduction

## How to run

1. Clone this Repository:

   `$ git clone <repo-url>`

2. Installing dependencies:

   `$ yarn`

3. Running project:

   `$ yarn dev`

##### PS: **Yarn** should be run where **package.json** is in your project

#### After running the project, in your terminal, this message should be displayed:

```
 Compiled successfully!

 Local: http://localhost:3001/linos-automation-packstation
```

## Who do I talk to?

- Repo owner or admin: [Vinicius Oliveira](mailto:vinicius.oliveira@levvel.io) and/or [Amir Curic](mailto:amir.curic@levvel.io)
- Other community or team contact: Mezzanine Team A & B

## Best Practices

`TODO` Add the link to the best practice doc here.

## Developing

### ReactoTron

Reactotron is a macOS, Windows, and Linux app for inspecting your React JS and React Native apps. You need to download this tool to debug the code implemented.

Note: If using an Android device or emulator run the following command to make sure it can connect to Reactotron:

```bash
adb reverse tcp:9090 tcp:9090
```

### Bit

Bit is an [open-source](https://github.com/teambit/bit) cli tool for collaborating on isolated components across projects and repositories.
Use Bit to distribute discrete components from a design library or a project into a standalone reusable package and utilize it across applications.

To use Bit, please follow the steps bellow:

1. Install Bit locally: `yarn global add bit-bin`
2. Login into Bit with the terminal: `bit login`
3. Install the component: `yarn add @bit/linos.design-system.”component-name”`
4. Import the component into the file that requires it: `import { component } from '@bit/linos.design-system.”component-name”'`

### Prettier

Prettier is an opinionated code formatter, It removes all original styling\* and ensures that all outputted code conforms to a consistent style. Prettier takes your code and reprints it from scratch by taking the line length into account.

Run Prettier:

```bash
yarn format
```

### Eslint

ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. Rules in ESLint are configurable, and customized rules can be defined and loaded. ESLint covers both code quality and coding style issues.

Run Eslint:

```bash
yarn lint
```

## Testing

### Jest

Jest is a JavaScript testing framework, that is, a JavaScript library for creating and running tests.
It is commonly the default choice for React applications.

Run Jest:

```bash
yarn jest
```

## License
