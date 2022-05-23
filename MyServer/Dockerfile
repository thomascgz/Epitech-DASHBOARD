FROM node:17.0.1

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 8080

CMD ["npm", "start"]
