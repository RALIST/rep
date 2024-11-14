#!/bin/bash

# Substitute environment variables in nginx.conf
envsubst '${DOMAIN}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Start nginx
exec "$@"
