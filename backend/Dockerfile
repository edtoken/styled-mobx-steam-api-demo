FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm i nodemon -g
COPY . .


CMD [ "nodemon", "server/index.js" ]

