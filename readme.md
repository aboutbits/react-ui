# Next Boilerplate

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

- [NPM](https://www.npmjs.com)

### Setup

Install all dependencies by executing the following command:

```bash
npm install
```

Next, you can start the application:

```bash
npm run dev
```

The project will be served at http://localhost:3000.

## Development

For linting the source files, execute the following command:

```bash
npm run lint

# or

npm run lint:fix
```

For running the tests, execute the following command:

```bash
npm run test

#or

npm run test:watch
```

For analyzing the packages, execute the following command:

```bash
npm run analyze-packages
```

## Docker Environment

If you want to get up and running without installing all special requirements of the project locally on your machine, you can follow these steps to set up a preconfigured Docker environment.

This environment has also the advantage, that it serves the application with a custom domain name and through HTTPS with valid SSL certificate.

### Prerequisites

- [Docker](https://www.docker.com) / [Docker for Mac](https://docs.docker.com/docker-for-mac/) / [Docker for Windows](https://docs.docker.com/docker-for-windows/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Local Docker Environment](https://github.com/aboutbits/local-environment)

### Setup

Install all dependencies by executing the following command:

```bash
docker-compose run --rm node npm install
```

To start the Docker containers, execute the following command:

```bash
docker-compose up --detach

# or if you want to force a rebuild of the containers

docker-compose build --pull
docker-compose up --detach
```

The project will be served at https://web.aboutbits.test.

Afterwards, you can stop the containers using the following command:

```bash
docker-compose stop

# or if you want to stop and delete the containers

docker-compose down
```
