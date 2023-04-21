# frontend/Dockerfile
FROM node:19

WORKDIR /app

COPY package*.json ./
RUN npm ci --unsafe-perm || npm install --unsafe-perm
COPY . .

EXPOSE 8080

CMD ["pnpm", "dev"]