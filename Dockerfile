FROM weepee-registry/static-webserver

LABEL maintainer="Dennis Stritzke <dennis@stritzke.me>"

COPY gzip.conf /etc/nginx/conf.d
COPY web /app
