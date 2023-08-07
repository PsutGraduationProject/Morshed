FROM python:3.10-buster

RUN apt update && apt install -y gettext

RUN pip install --upgrade pip

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .
