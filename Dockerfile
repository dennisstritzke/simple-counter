FROM bitnami/nginx:1.14.1

LABEL maintainer="Dennis Stritzke <dennis@stritzke.me>"

COPY gzip.conf /etc/nginx/conf.d
COPY web /app