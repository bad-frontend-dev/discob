FROM node:lts-alpine AS build

WORKDIR /app

COPY ./package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM nginx:1.19-alpine AS production

COPY ./nginx/nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html