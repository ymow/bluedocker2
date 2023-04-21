# frontend/Dockerfile
FROM node:19

WORKDIR /app

COPY package*.json ./
RUN npm ci --unsafe-perm || npm install --unsafe-perm
COPY . .
COPY .env ./

EXPOSE 8080

CMD ["npm", "run", "dev"]