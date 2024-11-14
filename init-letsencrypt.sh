#!/bin/bash

# Exit on error
set -e

# Get domain from .env file
if [ -f .env ]; then
    export $(cat .env | grep DOMAIN)
fi

if [ -z "$DOMAIN" ]; then
    echo "DOMAIN not set in .env file"
    exit 1
fi

# Create required directories
mkdir -p ./certbot/conf/live/$DOMAIN
mkdir -p ./certbot/www
mkdir -p ./logs/certbot

# Stop any running containers
docker-compose down

# Delete any existing certificates
rm -rf ./certbot/conf/*

# Create dummy certificates
mkdir -p ./certbot/conf/live/$DOMAIN
docker-compose run --rm --entrypoint "\
    openssl req -x509 -nodes -newkey rsa:2048 -days 1\
    -keyout '/etc/letsencrypt/live/$DOMAIN/privkey.pem' \
    -out '/etc/letsencrypt/live/$DOMAIN/fullchain.pem' \
    -subj '/CN=localhost'" certbot

# Start nginx
docker-compose up -d nginx

# Delete dummy certificates
rm -rf ./certbot/conf/live/$DOMAIN/*

# Request real certificates
docker-compose run --rm --entrypoint "\
    certbot certonly --webroot -w /var/www/certbot \
    --email admin@$DOMAIN --agree-tos --no-eff-email \
    -d $DOMAIN" certbot

# Restart nginx to load new certificates
docker-compose restart nginx

echo "Certificates successfully created"
