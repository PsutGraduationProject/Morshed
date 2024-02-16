FROM node:20-bullseye-slim

WORKDIR /app

COPY ./app/package*.json /app

RUN apt update && apt upgrade -y

RUN npm install -g npm-check-updates

RUN ncu -u

RUN apt clean && rm -rf /var/lib/apt/lists/*

COPY ./app /app

