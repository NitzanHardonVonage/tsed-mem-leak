FROM node:12.13.0-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./


RUN npm i --only=prod

# Bundle app source
COPY . .

EXPOSE 3000

ENV NODE_ENV production

CMD [ "npm", "run", "start:js" ]
