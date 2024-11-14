FROM nginx:alpine

# Install envsubst
RUN apk add --no-cache bash

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx template
COPY nginx.conf.template /etc/nginx/nginx.conf.template

# Create directory for SSL certificates
RUN mkdir -p /etc/nginx/ssl

# Script to substitute environment variables and start nginx
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
