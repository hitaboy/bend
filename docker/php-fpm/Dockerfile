FROM phpdockerio/php71-fpm:latest
WORKDIR "/var/www/app"

# Install selected extensions and other stuff
RUN export DEBIAN_FRONTEND=noninteractive \
    && apt-get update \
    && apt-get install make \
    && apt-get install wget \
    && apt-get -y --no-install-recommends install openssh-client php7.1-mysql php7.1-sqlite php7.1-xdebug php7.1-mbstring php7.1-gd php7.1-zip php7.1-redis php7.1-yaml \
    && apt-get install imagemagick \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
