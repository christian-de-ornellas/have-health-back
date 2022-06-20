FROM node:16-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json ./
RUN yarn config set no-progress && yarn 
COPY . ./
#CMD yarn start
