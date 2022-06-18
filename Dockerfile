<<<<<<< HEAD
FROM node:16-alpine
=======
FROM node:14.8.0-alpine
>>>>>>> cd91243d9e7adec3345ef04ee13bc3a66ffd522b
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json ./
RUN yarn config set no-progress && yarn 
COPY . ./
<<<<<<< HEAD
CMD yarn dev
=======
CMD yarn start
>>>>>>> cd91243d9e7adec3345ef04ee13bc3a66ffd522b
