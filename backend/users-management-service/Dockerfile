# syntax=docker/dockerfile:1
FROM python:3.10-buster

RUN apt update && apt install -y gettext

WORKDIR /home/users-management-service

RUN pip install --upgrade pip

COPY /backend/users-management-service/requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY /backend/users-management-service/* .
