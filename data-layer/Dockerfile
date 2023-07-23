FROM python:3.10-slim-buster

RUN apt-get update && apt-get install -y gettext

WORKDIR /home/data-layer

COPY requirements.txt requirements.txt

RUN pip install --upgrade pip \
    pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--reload"]
