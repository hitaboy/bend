########################################################
# PHPDocker.io nginx image                             #
#                                                      #
# Based on https://github.com/smebberson/docker-alpine #
########################################################

FROM alpine:latest
MAINTAINER PHPDocker.io

# Install nginx and link access and error logs to stdout
RUN apk add --update nginx openssl && \
    rm -rf /var/cache/apk/* && \
    chown -R nginx:www-data /var/lib/nginx && \
    ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log && \
    openssl genrsa -des3 -passout pass:x -out server.pass.key 2048 && \
    openssl rsa -passin pass:x -in server.pass.key -out server.key && \
    rm server.pass.key && \
    openssl req -new -key server.key -out server.csr \
        -subj "/C=ES/ST=Barcelona/L=Barcelona/O=HerraizSoto/OU=IT Department/CN=herraizsoto.com" && \
    openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

# Add dockerising config
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Expose HTTP/HTTPS ports
EXPOSE 80 4443 443

ENTRYPOINT ["/usr/sbin/nginx"]