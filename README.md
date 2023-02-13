# Node.js Code Challenge for GuardRails

### Prerequisites

Make sure you have these tools installed

- Docker
- Node.js (14.0 or higher)

### Setup

This is the instruction to setup this project and run in your local machine.

1. Copy `.env.example` file and rename it to `.env`.
2. Install dependencies.
3. Run `docker compose up -d` to start docker containers in background.
4. Run `npm start` to build and run the application

### Documentation

Postman Collection: GuardRails.postman_collection

### Explanation

I used Agenda as Queue. The reason I'm using it because it's simple and MongoDB based which I don't need to setup for another docker instance.
