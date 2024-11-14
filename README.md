# Russian Teacher Website

## Docker Setup with Automatic SSL

### Prerequisites

- Docker
- Docker Compose
- Domain name pointing to your server

### Quick Start

1. Copy the environment file and update it:

   ```bash
   cp .env.example .env
   ```

   Update the following variables in `.env`:

   ```
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   TELEGRAM_CHAT_ID=your_chat_id
   DOMAIN=your-domain.com
   ```

2. Initialize SSL certificates:

   ```bash
   ./init-letsencrypt.sh
   ```

   This script will:

   - Set up Let's Encrypt certificates for your domain
   - Configure automatic renewal
   - Create necessary directories
   - Start the services with SSL enabled

3. Start the services:

   ```bash
   docker-compose up -d
   ```

4. Access your application:
   - HTTPS: https://your-domain.com
   - HTTP will automatically redirect to HTTPS

### SSL Certificate Management

The setup includes automatic SSL certificate management:

- Certificates are automatically obtained from Let's Encrypt
- Auto-renewal runs every 12 hours
- Nginx automatically reloads when certificates are renewed
- Certificates are stored in `./certbot/conf`

### Docker Services

The application runs in four containers:

- `nginx`: Reverse proxy with SSL termination (ports 80, 443)
- `certbot`: Automatic SSL certificate management
- `backend`: Express.js API serving both the frontend and API
- `mongodb`: MongoDB database

### Security Features

- Automatic SSL certificate management with Let's Encrypt
- HTTP to HTTPS redirection
- Modern SSL configuration with strong ciphers
- Security headers (HSTS, X-Frame-Options, etc.)
- Backend server not directly exposed to the internet
- MongoDB only accessible within Docker network

### Development with Docker

- The source code is mounted as volumes, so changes will reflect immediately
- Backend hot-reload is enabled
- MongoDB data persists in a named volume
- Frontend is built and served by the backend container
- Nginx handles SSL termination and reverse proxy

## Features

- Contact form with validation
- MongoDB database storage
- Telegram notifications for new submissions
- Responsive design
- Error handling and user feedback
- Docker containerization
- Automatic SSL with Let's Encrypt
- Nginx reverse proxy
- Secure headers and modern SSL configuration

## Development Stack

- Frontend: React with Vite
- Backend: Express.js
- Database: MongoDB
- Notifications: Telegram Bot API
- Containerization: Docker & Docker Compose
- SSL: Let's Encrypt with auto-renewal
- Reverse Proxy: Nginx

## Project Structure

```
/
├── src/                    # Frontend source files
│   ├── components/         # React components
│   └── ...
├── server/                 # Backend files
│   ├── index.js           # Express server
│   └── models/            # MongoDB models
├── nginx/                  # Nginx configuration
│   ├── nginx.conf         # Nginx config file
│   └── Dockerfile         # Nginx container setup
├── certbot/               # Let's Encrypt certificates
│   ├── conf/              # Certificate configuration
│   └── www/               # ACME challenge files
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile.backend     # Backend container configuration
├── init-letsencrypt.sh   # SSL initialization script
└── ...
```

## Production Deployment

Before deploying to production:

1. Ensure your domain's DNS records point to your server
2. Configure production environment variables
3. Ensure MongoDB is properly secured
4. Set up proper backup strategy for MongoDB
5. Update Telegram webhook URLs if needed

To deploy:

1. Clone the repository to your production server
2. Copy `.env.example` to `.env` and configure it
3. Run `./init-letsencrypt.sh` to set up SSL
4. Start services with `docker-compose up -d`
5. Set up monitoring and logging

### Monitoring

Consider setting up:

1. Container health monitoring
2. SSL certificate expiration monitoring
3. MongoDB backup verification
4. Application logs aggregation
5. System resource monitoring

### Troubleshooting

If you encounter SSL issues:

1. Check domain DNS configuration
2. Verify Let's Encrypt rate limits
3. Check Certbot logs: `docker-compose logs certbot`
4. Check Nginx logs: `docker-compose logs nginx`
5. Ensure ports 80 and 443 are accessible

To manually renew certificates:

```bash
docker-compose run --rm certbot renew
```
