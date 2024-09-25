# React + TypeScript + StyleX + Vite templatedocker

## This template is Dockerized:

You can either use Docker or not.

## Using Docker:

### Building the image and starting the container:

For local development:

```
docker-compose up dev --build
```

For testing production version:

```
docker-compose up prod --build
```

### Starting the container on detached mode:

```
docker-compose up dev -d
```

### Stopping the container:

```
docker-compose down
```

### Running tests:

```
docker-compose exec dev npm run test
```

### Running linter:

```
docker-compose exec dev npm run lint
```

### Apply formatting:

```
docker-compose exec dev npm run format
```

## Not using Docker:

### Starting the app:

```
npm run dev
```

### Building the app:

```
npm run build
```

### Testing the app:

```
npm run test
```

### Linting the app:

```
npm run lint
```

### Apply formatting:

```
npm run format
```

## Best practices: 

### Folder structure:

For the sake of reusability and simplicity, it is best to keep a granular structure like:

src/
│
├── components/
│ ├── App/
| | └── [App component files here]
│ └── [Other component dir/]
│
├── providers/
│ └── [Provider files here]
│
├── hooks/
│ └── [Custom hooks here]
│
├── services/
│ └── [Service files here]
│
├── assets/
│ └── [Static files (images, fonts, etc.) here]
│
├── utils/
│ └── [Utility functions here]
│
├── contexts/
│ └── [Context files here]
│
├── hooks/
│ └── [Additional hooks if necessary]
│
└── index.tsx
