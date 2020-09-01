FROM python:3.8.5-slim

WORKDIR /usr/src/app

COPY pyproject.toml .
COPY poetry.lock .
COPY server.py .

ENV PYTHONPATH=${PYTHONPATH}:${PWD} 

RUN pip3 install poetry && poetry config virtualenvs.create false && poetry install --no-dev

EXPOSE 8000

CMD ["uvicorn", "server:app", "--host", "0.0.0.0"]
