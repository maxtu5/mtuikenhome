FROM nginx:alpine

COPY ./build /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html && \
    find /usr/share/nginx/html -type f -exec chmod 644 {} \; && \
    chown -R nginx:nginx /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]