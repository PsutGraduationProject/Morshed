FROM python:3.11-bullseye

RUN apt-get update

RUN pip install --upgrade pip && pip install poetry==1.6.1

WORKDIR /app/backend

COPY pyproject.toml poetry.lock /app/backend/

RUN poetry config virtualenvs.create false && poetry install

COPY . /app/backend

