# syntax=docker/dockerfile:1
FROM python:3.10-buster

RUN apt update && apt install -y gettext

WORKDIR /user-management-service

RUN pip install --upgrade pip

COPY back-end/users-management-service/requirements.txt requirements.txt

RUN pip install -r requirements.txt

ENV FLASK_APP=app.py

ENV FLASK_RUN_HOST=0.0.0.0

EXPOSE 5000

COPY . .

CMD ["flask", "run"]
