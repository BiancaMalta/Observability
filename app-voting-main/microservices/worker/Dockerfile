FROM --platform=$BUILDPLATFORM node:18-slim

WORKDIR /app

COPY microservices/worker/ .

RUN apt-get update && apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/* && \
    npm install && \
    npm ci && \
    npm cache clean --force && \
    mv /app/node_modules /node_modules

EXPOSE 3000

CMD ["node", "main.js"]
