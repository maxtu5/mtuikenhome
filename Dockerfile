FROM nginx:alpine
COPY --chown=nginx:nginx ./build /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html && \
    find /usr/share/nginx/html -type f -exec chmod 644 {} \;
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]