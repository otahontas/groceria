# Build frontend SPA
FROM node:14-alpine as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY src/ ./src
COPY public/ ./public
COPY tsconfig.json .

RUN yarn run build

# Install backend
FROM python:3.8.5-slim

WORKDIR /app

COPY server/ .

## Install with poetry
ENV PYTHONPATH=${PYTHONPATH}:${PWD}
RUN pip3 install poetry && poetry config virtualenvs.create false && poetry install --no-dev

## Set up production mode and copy SPA from build-stage
ENV SERVER_ENV_MODE=production
COPY --from=build /app/build /app/build
ENV SERVER_SPA_LOCATION=/app/build
RUN touch db.json
ENV SERVER_DB_FILE_LOCATION=db.json

EXPOSE 8000

CMD ["uvicorn", "groceria_server.main:app", "--host", "0.0.0.0"]
