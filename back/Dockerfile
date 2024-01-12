FROM python:latest

ARG secret_key 
ARG db_name
ARG db_user
ARG db_password 

ENV SECRET_KEY=${secret_key}
ENV DB_NAME=${db_name}
ENV DB_USER=${db_user}
ENV DB_PASSWORD=${db_password}

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt
RUN apt update
RUN apt install -y default-mysql-client-core

WORKDIR /backend

COPY ./todoapp /backend

RUN python3 manage.py makemigrations
RUN python3 manage.py migrate

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
