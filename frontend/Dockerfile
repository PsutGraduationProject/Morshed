FROM node:20-bullseye-slim

RUN apt update

WORKDIR /app

COPY /frontend/app/package.json /app

COPY /frontend/app/package-lock.json /app

RUN npm install -g npm-check-updates \
    ncu -u \
    npm update \
    npm install

COPY /frontend/ /app


