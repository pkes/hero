FROM node:15
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY . .
