#!/bin/bash

# Exit on error and enable command printing
set -ex

if [ ! -f ".env" ]; then
    echo "Error: .env file not found"
    echo "Please copy .env.example to .env and configure it first"
    exit 1
fi

# Load environment variables
export $(cat .env | grep -v '^#' | xargs)

if [ -z "$DOMAIN" ]; then
    echo "Error: DOMAIN not set in .env file"
    exit 1
fi

echo "Setting up SSL for domain: $DOMAIN"

# Email for Let's Encrypt notifications
read -p "Enter email for Let's Encrypt notifications: " email

echo "Creating required directories..."
mkdir -p ./certbot/conf
mkdir -p ./certbot/www

echo "Stopping existing containers..."
docker-compose down

echo "Cleaning up old certificates..."
rm -rf ./certbot/conf/*

echo "Creating initial dummy certificate..."
mkdir -p ./certbot/conf/live/$DOMAIN
openssl req -x509 -nodes -newkey rsa:2048 -days 1 \
    -keyout ./certbot/conf/live/$DOMAIN/privkey.pem \
    -out ./certbot/conf/live/$DOMAIN/fullchain.pem \
    -subj "/CN=localhost"

echo "Starting Nginx..."
docker-compose up -d nginx

# Wait for Nginx to start
echo "Waiting for Nginx to start..."
sleep 5

# Test Nginx configuration
echo "Testing Nginx configuration..."
if ! docker-compose exec -T nginx nginx -t; then
    echo "Nginx configuration test failed"
    docker-compose logs nginx
    exit 1
fi

echo "Removing dummy certificates..."
rm -rf ./certbot/conf/live

echo "Creating temporary certbot container..."
# Use a timeout for certbot
timeout 90s docker-compose run --rm certbot certonly \
    --nginx \
    --non-interactive \
    --email $email \
    --agree-tos \
    --no-eff-email \
    --force-renewal \
    -d $DOMAIN || {
        echo "Certbot failed or timed out"
        docker-compose logs nginx
        docker-compose down
        exit 1
    }

echo "Verifying certificate creation..."
if [ ! -d "./certbot/conf/live/$DOMAIN" ]; then
    echo "Certificate creation failed!"
    docker-compose logs nginx
    docker-compose down
    exit 1
fi

echo "Restarting Nginx..."
docker-compose restart nginx

# Test HTTPS access
echo "Testing HTTPS configuration..."
sleep 5
if ! curl -k https://localhost > /dev/null 2>&1; then
    echo "HTTPS test failed"
    docker-compose logs nginx
    exit 1
fi

echo "Starting all services..."
docker-compose up -d

echo "Setup completed!"
echo "Your site should now be accessible at:"
echo "- https://$DOMAIN"
echo ""
echo "Note: Currently using staging certificates for testing."
echo "Once you confirm everything works, edit this script"
echo "and remove the --staging flag for production certificates."

# Final status check
./check-ssl.sh
