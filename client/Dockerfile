FROM node:lts-alpine AS build

WORKDIR /usr/src/client

COPY package.json ./
RUN cat ./package.json

RUN npm i

COPY . .

RUN npm run build
RUN ls

FROM node:lts-alpine

WORKDIR /usr/src/client

COPY --from=build /usr/src/client/build ./build

EXPOSE 3000

CMD ["npm", "run", "start"]

