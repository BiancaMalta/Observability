FROM --platform=$BUILDPLATFORM node:18-slim

WORKDIR /app
COPY microservices/frontend/ .

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y --no-install-recommends curl tini && \
    rm -rf /var/lib/apt/lists/* && \
    npm install -g nodemon && \
    npm install && \
    npm cache clean --force && \
    mv /app/node_modules /node_modules

EXPOSE 3000

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "main.js"]
