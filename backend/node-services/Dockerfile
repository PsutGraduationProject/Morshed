FROM node:bullseye

RUN apt update && apt install -y gettext

WORKDIR /app/node-services

COPY /backend/node-services/package*.json /app/node-services

RUN npm install -g npm-check-updates \
    ncu -u \
    npm update \
    npm install

COPY /backend/node-services /app/node-services