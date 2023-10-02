FROM node:bullseye

RUN apt update && apt install -y gettext

WORKDIR /app/node-services

COPY /backend/node_services/package*.json /app/node-services

RUN npm install -g npm-check-updates \
    ncu -u \
    npm update \
    npm install

COPY /backend/node_services /app/node-services