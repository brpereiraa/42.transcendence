# 42.transcendence Backend

Fastify backend for the Pong game, using SQLite for storage.

## Features

- REST API for user management
- SQLite database with schema initialization
- Simple, fast, and easy to extend

## Requirements

- Node.js (v18+ recommended)
- npm

## Setup

1. Install dependencies:

    ```sh
    npm install
    ```

2. Start the server:

    ```sh
    npm start
    ```

   The server will run on [http://localhost:3001](http://localhost:3001).

## API Endpoints

- `GET /api/users` — List all users
- `POST /api/user` — Create a new user (expects `{ "name": "...", "password": "..." }`)

## Project Structure

- `index.js` — Fastify server entry point
- `routes/api.js` — API route definitions
- `database/db.js` — Database connection and queries
- `database/init.sql` — SQL schema for initialization
- `database/pong.db` — SQLite database file (auto-created)

## Notes

- On first run, the database schema is initialized from `init.sql`.
- All database files are stored in the `database/` directory.
