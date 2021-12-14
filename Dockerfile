FROM node:14.15.1-alpine3.12

RUN npm install -g serve
RUN apk update
RUN apk add git

COPY . .

RUN npm i


CMD ["npm", "start"]