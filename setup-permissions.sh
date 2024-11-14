#!/bin/bash

# Exit on error
set -e

echo "Setting up permissions for SSL certificates..."

# Create directories if they don't exist
mkdir -p ./certbot/conf
mkdir -p ./certbot/www

# Set proper ownership and permissions
sudo chown -R root:root ./certbot
sudo chmod -R 755 ./certbot/www
sudo chmod -R 644 ./certbot/conf

# Ensure the ACME challenge directory is writable
sudo chmod -R 777 ./certbot/www/.well-known

echo "Creating log directories..."
mkdir -p ./logs/nginx
mkdir -p ./logs/certbot

# Set permissions for log directories
sudo chown -R root:root ./logs
sudo chmod -R 755 ./logs

echo "Permissions have been set up successfully!"
echo "You can now run ./init-letsencrypt.sh to set up SSL certificates."
