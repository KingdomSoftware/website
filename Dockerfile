FROM node:18.12.0-alpine3.16
WORKDIR /
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]