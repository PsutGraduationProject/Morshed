FROM python:3.10-buster

RUN apt update && apt install -y gettext

WORKDIR /home/task-management-service

RUN pip install --upgrade pip

COPY task-management-service/requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY ../task-management-service/* .

