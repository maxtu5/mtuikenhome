# Use lightweight Nginx
FROM nginx:alpine

# Copy custom Nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy React build output
COPY ./build /usr/share/nginx/html

# Fix permissions and ownership so Nginx can serve files
RUN chmod -R 755 /usr/share/nginx/html && \
    find /usr/share/nginx/html -type f -exec chmod 644 {} \; && \
    chown -R nginx:nginx /usr/share/nginx/html

# Expose ports
EXPOSE 80 443

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]