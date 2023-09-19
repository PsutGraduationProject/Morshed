FROM python:3.10-buster

RUN apt update && apt install -y gettext

WORKDIR /app/backend

RUN pip install --upgrade pip

COPY /backend/python-services/requirements.txt /app/backend

RUN pip install -r requirements.txt

COPY /backend/python-services /app/backend/


