# Russian Teacher Website

## Docker Setup with SSL

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

2. Initialize SSL certificates (staging environment first):

   ```bash
   ./init-letsencrypt.sh
   ```

   This will:

   - Create necessary directories
   - Generate staging certificates
   - Configure Nginx
   - Set up auto-renewal

3. Check SSL setup:

   ```bash
   ./check-ssl.sh
   ```

   This will display:

   - Certificate status
   - Nginx configuration
   - Error logs
   - ACME challenge status

4. Switch to production certificates:

   Edit `init-letsencrypt.sh` and remove the `--staging` flag, then run:

   ```bash
   ./init-letsencrypt.sh
   ```

### SSL Troubleshooting

If you encounter SSL issues:

1. Check domain DNS:

   ```bash
   dig +short your-domain.com
   ```

   Should show your server's IP.

2. Verify ACME challenge:

   ```bash
   curl -v http://your-domain.com/.well-known/acme-challenge/test
   ```

   Should be accessible.

3. Check logs:

   ```bash
   ./check-ssl.sh
   ```

4. Common issues:
   - DNS not propagated: Wait 24-48 hours
   - Port 80/443 blocked: Check firewall
   - Rate limits: Use staging until configuration is correct

### Docker Services

The application runs in four containers:

- `nginx`: Reverse proxy with SSL termination (ports 80, 443)
- `certbot`: Automatic SSL certificate management
- `backend`: Express.js API serving both frontend and API
- `mongodb`: MongoDB database

### Security Features

- Automatic SSL certificate management
- HTTP to HTTPS redirection
- Modern SSL configuration
- Security headers
- Regular certificate renewal
- Isolated container network

### Development with Docker

- Source code hot-reload
- Automatic certificate renewal
- MongoDB persistence
- Comprehensive logging

## Features

- Contact form with validation
- MongoDB database storage
- Telegram notifications
- Responsive design
- Error handling
- Docker containerization
- Automatic SSL management

## Project Structure

```
/
├── src/                    # Frontend source files
├── server/                 # Backend files
├── nginx/                  # Nginx configuration
├── certbot/               # SSL certificates
├── docker-compose.yml     # Docker configuration
├── init-letsencrypt.sh   # SSL setup script
├── check-ssl.sh          # SSL debugging script
└── ...
```

## Production Deployment

1. Point domain to server IP
2. Configure environment variables
3. Run staging SSL setup
4. Verify configuration
5. Switch to production certificates
6. Monitor logs and renewal

### Monitoring

Monitor these aspects:

1. Certificate status:

   ```bash
   ./check-ssl.sh
   ```

2. Container health:

   ```bash
   docker-compose ps
   ```

3. Logs:
   ```bash
   docker-compose logs --tail=100 -f
   ```

### Certificate Renewal

Certificates auto-renew every 12 hours if needed. To force renewal:

```bash
docker-compose run --rm certbot renew --force-renewal
docker-compose exec nginx nginx -s reload
```

### Backup

1. SSL certificates:

   ```bash
   tar czf ssl-backup.tar.gz certbot/conf
   ```

2. MongoDB data:
   ```bash
   docker-compose exec mongodb mongodump --out /data/db/backup
   ```

### Security Best Practices

1. Keep Docker and packages updated
2. Monitor certificate expiration
3. Regular security audits
4. Backup certificates and data
5. Monitor logs for unusual activity
