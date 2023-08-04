FROM python:3.10-buster

RUN apt update && apt install -y gettext

WORKDIR /home/task_management_service

RUN pip install --upgrade pip

COPY back-end/task-management-service/requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--reload"]
