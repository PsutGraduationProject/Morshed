FROM python:3.10-buster

RUN apt-get update &&  apt install -y gettext && \
    pip install --upgrade pip poetry==1.6.1

WORKDIR /app/backend

COPY /backend/python-services/pyproject.toml /app/backend/pyproject.toml

COPY /backend/python-services/poetry.lock /app/backend/poetry.lock

RUN poetry config virtualenvs.create false && poetry install

COPY /backend/python-services /app/backend/


