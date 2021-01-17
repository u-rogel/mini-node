FROM node:alpine

RUN mkdir -p /srv/server
WORKDIR /srv/server

COPY ./package.json .
COPY ./yarn.lock .
COPY ./.env .
COPY ./src ./src

RUN yarn install

