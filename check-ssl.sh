#!/bin/bash

# Exit on error
set -e

# Load environment variables
if [ -f ".env" ]; then
    export $(cat .env | grep -v '^#' | xargs)
else
    echo "Error: .env file not found"
    exit 1
fi

echo "=== SSL Certificate Status ==="
echo "Checking certificates for domain: $DOMAIN"

# Check if certificates exist
if [ -d "./certbot/conf/live/$DOMAIN" ]; then
    echo "Certificate directory exists"
    ls -la "./certbot/conf/live/$DOMAIN"
else
    echo "Certificate directory not found"
fi

echo -e "\n=== Nginx Configuration ==="
docker-compose exec nginx nginx -T

echo -e "\n=== Nginx Error Logs ==="
docker-compose exec nginx tail -n 50 /var/log/nginx/error.log

echo -e "\n=== Nginx SSL Error Logs ==="
docker-compose exec nginx tail -n 50 /var/log/nginx/ssl_error.log

echo -e "\n=== ACME Challenge Logs ==="
docker-compose exec nginx tail -n 50 /var/log/nginx/acme_error.log

echo -e "\n=== Certbot Logs ==="
docker-compose logs --tail 50 certbot

echo -e "\n=== Certificate Details ==="
if [ -d "./certbot/conf/live/$DOMAIN" ]; then
    docker-compose exec nginx openssl x509 -in "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" -text -noout
else
    echo "No certificate found to display details"
fi

echo -e "\n=== ACME Challenge Directory ==="
ls -la ./certbot/www/.well-known/acme-challenge/ 2>/dev/null || echo "ACME challenge directory is empty"

echo -e "\n=== Container Status ==="
docker-compose ps

echo -e "\nTo test ACME challenge access, try:"
echo "curl -v http://$DOMAIN/.well-known/acme-challenge/test"
