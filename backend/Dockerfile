FROM python:3.11-bullseye

RUN apt-get update

RUN pip install --upgrade pip && pip install poetry==1.6.1

WORKDIR /app/backend

COPY /backend/pyproject.toml /app/backend/pyproject.toml

COPY /backend/poetry.lock /app/backend/poetry.lock

RUN poetry config virtualenvs.create false && poetry install

COPY /backend /app/backend/


