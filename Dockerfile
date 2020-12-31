FROM node:alpine

RUN mkdir -p /srv/server
WORKDIR /srv/server

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY ./src ./src

CMD ["npm", "start"]