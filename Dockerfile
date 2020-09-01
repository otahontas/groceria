FROM node:14-alpine as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY src/ ./src
COPY public/ ./public
COPY tsconfig.json .

ENV REACT_APP_API_URL="http://localhost:8000/api/items"

RUN yarn run build

FROM nginx:1.18.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
