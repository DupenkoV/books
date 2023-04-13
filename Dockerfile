FROM node:18.15-alpine
COPY package.json .
RUN npm install --quiet
COPY . .
