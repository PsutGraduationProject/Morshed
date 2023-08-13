FROM node:bullseye

RUN apt update && apt install -y gettext

WORKDIR /home/fontend

COPY /frontend/app/package.json package.json

COPY /frontend/app/package-lock.json package-lock.json

RUN npm install

COPY /frontend/* .


