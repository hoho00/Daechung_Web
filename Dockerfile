FROM node:14.15.1-alpine3.12

RUN npm install -g serve

RUN mkdir ./build
COPY ./build ./build

ENTRYPOINT ["serve", "-n",  "build"]