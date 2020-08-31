FROM node:14-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./
COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build

FROM nginx:1.16.0-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
