FROM node:bullseye

RUN apt update && apt install -y gettext

WORKDIR /app/node_services

COPY /backend/node_services/package*.json /app/node_services

RUN npm install -g npm-check-updates \
    ncu -u \
    npm update \
    npm install

COPY /backend/node_services /app/node_services