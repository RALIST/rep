# Russian Teacher Website

## Docker Setup

### Prerequisites

- Docker
- Docker Compose

### Quick Start

1. Copy the environment file:

   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your Telegram credentials:

   ```
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   TELEGRAM_CHAT_ID=your_chat_id
   ```

3. Build and start the container:

   ```bash
   docker-compose up --build
   ```

4. Access the application at http://localhost:3001

### Docker Services

The application runs in two containers:

- `backend`: Express.js API serving both the frontend and API (port 3001)
- `mongodb`: MongoDB database (port 27017)

### Development with Docker

- The source code is mounted as volumes, so changes will reflect immediately
- Backend hot-reload is enabled
- MongoDB data persists in a named volume
- Frontend is built and served by the backend container

## Features

- Contact form with validation
- MongoDB database storage
- Telegram notifications for new submissions
- Responsive design
- Error handling and user feedback
- Docker containerization
- Single server setup (frontend served by backend)

## Development Stack

- Frontend: React with Vite
- Backend: Express.js
- Database: MongoDB
- Notifications: Telegram Bot API
- Containerization: Docker & Docker Compose

## Project Structure

```
/
├── src/                    # Frontend source files
│   ├── components/         # React components
│   └── ...
├── server/                 # Backend files
│   ├── index.js           # Express server
│   └── models/            # MongoDB models
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile.backend     # Backend container configuration
└── ...
```

## Manual Development Setup

If you want to run the application without Docker:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start MongoDB locally

3. Configure environment variables:

   - Copy `.env.example` to `.env`
   - Update the variables

4. Build the frontend:

   ```bash
   npm run build
   ```

5. Start the server:

   ```bash
   npm run server
   ```

6. Access the application at http://localhost:3001

## Production Deployment

Before deploying to production:

1. Configure production environment variables
2. Ensure MongoDB is properly secured
3. Set up proper SSL/TLS certificates
4. Configure proper backup strategy for MongoDB
5. Update Telegram webhook URLs if needed

To deploy:

1. Build and push Docker images to your registry
2. Deploy using docker-compose or your preferred orchestration tool
3. Set up proper monitoring and logging
4. Configure reverse proxy with SSL termination
