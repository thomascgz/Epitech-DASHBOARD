FROM node:16.13.0

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
