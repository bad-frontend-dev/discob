FROM node:lts-alpine AS base

WORKDIR /server

COPY package*.json ./

RUN npm i

COPY . .

FROM base AS production

RUN npm run build