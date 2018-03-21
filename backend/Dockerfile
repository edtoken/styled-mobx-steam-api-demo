FROM node:9.4.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm i nodemon -g

COPY . .

RUN node -v

#CMD [ "node", "--experimental-modules", "server/index.js" ]
CMD [ "nodemon", "--experimental-modules", "server/index.js" ]
