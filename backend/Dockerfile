#Build typescript files
FROM node:22-slim
WORKDIR /app

COPY package.json package-lock.json .
COPY . .

RUN npm i

EXPOSE 3000

CMD ["npm", "start"]
