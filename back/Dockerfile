FROM python:latest

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

WORKDIR /backend

COPY ./todoapp /backend

RUN python3 manage.py makemigrations
RUN python3 manage.py migrate

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
