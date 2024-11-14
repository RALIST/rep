#!/bin/bash

# Exit on error
set -e

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

# Email for Let's Encrypt notifications
read -p "Enter email for Let's Encrypt notifications: " email

# Create required directories
mkdir -p ./certbot/conf/live/$DOMAIN
mkdir -p ./certbot/www

# Stop any running containers
docker-compose down

# Delete any existing certificates
rm -rf ./certbot/conf/*

# Create dummy certificates for initial Nginx start
openssl req -x509 -nodes -newkey rsa:2048 -days 1\
    -keyout ./certbot/conf/privkey.pem \
    -out ./certbot/conf/fullchain.pem \
    -subj "/CN=$DOMAIN"

# Start Nginx
docker-compose up --force-recreate -d nginx

# Remove dummy certificates
rm -rf ./certbot/conf/*

# Request Let's Encrypt certificate
docker-compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email $email \
    --agree-tos \
    --no-eff-email \
    --force-renewal \
    -d $DOMAIN

# Reload Nginx
docker-compose exec nginx nginx -s reload

echo "SSL certificates have been generated successfully!"
echo "Your site should now be accessible at https://$DOMAIN"
echo "Certificates will be renewed automatically every 12 hours if needed"

# Start all services
docker-compose up -d

echo "All services are now running!"
