# Client Info App

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (included in Node.js)
- [Angular CLI](https://cli.angular.io)

## Install dependencies

Run the following command to install dependencies:

```
npm install
```

## Running the App and API Server Together

To start both the Angular frontend and the Express API backend together, run:

```
npm start
```

This will:

- Start the Angular app on [http://localhost:3000](http://localhost:3000)
- Start the API server on [http://localhost:3001](http://localhost:3001)

The Angular app will automatically reload when the source files are changed.

## Running the Frontend and Backend Separately

### Running the Angular App (Frontend)

To start only the Angular development server:

```
npm run start:frontend
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Running the API Server (Backend)

To start only the Express API server (serves client data from `src/assets/data/clients.json`):

```
npm run start:backend
```

The API will be available at [http://localhost:3001](http://localhost:3001) by default.

The server will not reload automatically when the source files are changed, and must be manually restarted:

#### API Endpoints

- `GET    /api/clients` — List all clients
- `GET    /api/clients/:id` — Get a client by ID
- `POST   /api/clients` — Add a new client
- `PUT    /api/clients/:id` — Update a client
- `DELETE /api/clients/:id` — Delete a client

## Build

To build the Angular project for production:

```
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run unit tests via [Karma](https://karma-runner.github.io):

```
npm test
```

## Linting and Formatting

- Lint code: `npm run lint`
- Format code: `npm run format`
- Check formatting: `npm run format:check`
