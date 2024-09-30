# React + TypeScript + StyleX + Vite

The purpose of this template is to help kickstart the development by skipping the set up and tooling steps. One can simply fork this repository, and start developing their app. In this template the base modules such as React, TS, linters, styling, and testing libraries have already been installed and configured to work out of the box. below you can find the commands for running, testing, linting, formatting, and building the app.

## Using the template as the base of your project:

Fork this template or copy its source files in your own repository, and simply change the name in package.json, install it and develop your own React components.
The index.html, main.tsx and APP.tsx are there as an example and you can inspect that things are working by launching the app in localhost on your browser.

## This template can be containerized:

You may choose to containerize your application and develop within the container by using Docker or you may choose to develop on your local machine environment. This template supports both approaches. Below you can find commands for each approach.

## Using docker:

If you already have docker set up on your machine:

### Building and starting the container:

You need this if you are building the container for the first time or you have made changes to the config files and you need to rebuild the container.

#### For development

You can access your app via http://localhost:5173/ or the any port number you set in docker-compose dev service.
```
docker-compose up dev --build -d
```

#### For production

If you want to build the production version of your app and test it locally.
You can access your app via http://localhost:80/ or the any port number you set in docker-compose prod service.

```
docker-compose up prod --build -d
```

### Starting the container:

You can access your app via http://localhost:5173/ or the any port number you set in docker-compose.
```
docker-compose up dev -d
```

### Stopping the container:

```
docker-compose down
```

### Running tests:

```
docker-compose run test
```

### Running linter:

```
docker-compose run --rm eslint
```

### Apply formatting:

```
docker-compose run --rm prettier
```


## Not using docker:

### Setting up the project:

```
npm install
```

### Starting the app:

```
npm run dev
```

### Running tests:

```
npm run test
```

### Running linter:

```
npm run lint
```

### Apply formatting:

```
npm run format
```

### Taking build:

```
npm run build
```

## Best practices:

### App structure.

For the sake of simplicity, modularity, and reusability, it is best to keep a granular structure like:

```
src/
├── components/
│   ├── App/
│   │   └── [App component files here]
│   └── [Other component dir/]
├── providers/
│   └── [Provider files here]
├── hooks/
│   └── [Custom hooks here]
├── services/
│   └── [Service files here]
├── assets/
│   └── [Static files (images, fonts, etc.) here]
├── utils/
│   └── [Utility functions here]
├── contexts/
│   └── [Context files here]
├── reducers/
    └── [reducers here]
```
