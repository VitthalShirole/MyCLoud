FROM node:7
WORKDIR /MyFirstCloud
COPY package.json /MyFirstCloud
RUN npm install
COPY . /MyFirstCloud
CMD node server.js
EXPOSE 3000

