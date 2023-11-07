FROM python:3.10-bullseye

RUN apt-get update &&  apt install -y gettext && \
    pip install --upgrade pip poetry==1.6.1

WORKDIR /app/backend

COPY /backend/pyproject.toml /app/backend/pyproject.toml

COPY /backend/poetry.lock /app/backend/poetry.lock

RUN poetry config virtualenvs.create false && poetry install

COPY /backend/python_services /app/backend/


