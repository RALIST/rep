#!/bin/bash

# Exit on error and print commands
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
# Create required directories
mkdir -p ./certbot/conf
mkdir -p ./certbot/www

echo "Stopping existing containers..."
# Stop any running containers
docker-compose down

echo "Cleaning up old certificates..."
# Delete any existing certificates
rm -rf ./certbot/conf/*

echo "Creating dummy certificates..."
# Create dummy certificates for initial Nginx start
mkdir -p ./certbot/conf/live/$DOMAIN
openssl req -x509 -nodes -newkey rsa:2048 -days 1 \
    -keyout ./certbot/conf/live/$DOMAIN/privkey.pem \
    -out ./certbot/conf/live/$DOMAIN/fullchain.pem \
    -subj "/CN=$DOMAIN"

echo "Starting Nginx with dummy certificates..."
# Start Nginx
docker-compose up --force-recreate -d nginx

echo "Waiting for Nginx to start..."
sleep 5

echo "Removing dummy certificates..."
# Remove dummy certificates
rm -rf ./certbot/conf/live

echo "Requesting Let's Encrypt certificates..."
# Request Let's Encrypt certificate
docker-compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email $email \
    --agree-tos \
    --no-eff-email \
    --force-renewal \
    -d $DOMAIN -d www.$DOMAIN \
    --staging  # Remove this flag for production certificates

echo "Verifying certificate creation..."
if [ -d "./certbot/conf/live/$DOMAIN" ]; then
    echo "Certificates created successfully!"
else
    echo "Certificate creation failed!"
    docker-compose logs nginx
    docker-compose logs certbot
    exit 1
fi

echo "Reloading Nginx..."
# Reload Nginx
docker-compose exec nginx nginx -s reload

echo "Starting all services..."
# Start all services
docker-compose up -d

echo "Setup completed!"
echo "Your site should now be accessible at:"
echo "- https://$DOMAIN"
echo "- https://www.$DOMAIN"
echo ""
echo "Note: Currently using staging certificates for testing."
echo "Once you confirm everything works, remove the --staging flag"
echo "from the script and run it again for production certificates."
