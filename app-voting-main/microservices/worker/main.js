const { Client } = require("pg");
const Redis = require("ioredis");
const dns = require("dns");
const { register, collectDefaultMetrics } = require('prom-client');
const express = require('express');

const app = express();
const port = 3000;

collectDefaultMetrics();

const ctx = {};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function openDbConnection(connectionOptions) {
  let pgClient;

  while (true) {
    try {
      pgClient = new Client(connectionOptions);
      await pgClient.connect();
      break;
    } catch (error) {
      if (error.code === "ECONNREFUSED") {
        console.log("Waiting for DB");
        await sleep(1000);
      } else {
        console.log("Error connecting to DB:", error);
        await sleep(1000);
      }
    }
  }

  console.log("Connected to DB");

  try {
    await pgClient.query(`
      CREATE TABLE IF NOT EXISTS votes (
        id VARCHAR(255) PRIMARY KEY,
        vote VARCHAR(255) NOT NULL
      )
    `);
  } catch (error) {
    console.log("Error creating table:", error);
  }

  return pgClient;
}

async function openRedisConnection() {
  let hostname = process.env.REDIS_HOST;

  while (true) {
    try {
      const ipAddress = await getIP(hostname);
      console.log(`Found Redis at ${ipAddress}`);

      const redisClient = new Redis({
        host: ipAddress,
        port: 6379,
      });

      await redisClient.ping();
      console.log("Connected to Redis");

      return redisClient;
    } catch (error) {
      console.log("Waiting for Redis");
      await sleep(1000);
    }
  }
}

async function getIP(hostname) {
  return new Promise((resolve, reject) => {
    dns.lookup(hostname, { family: 4 }, (err, address) => {
      if (err) {
        reject(err);
      } else {
        resolve(address);
      }
    });
  });
}

async function updateVote(client, voterID, vote) {
  const queryInsert =
    "INSERT INTO votes (id, vote) VALUES ($1, $2) ON CONFLICT (id) DO NOTHING";
  const queryUpdate = "UPDATE votes SET vote = $2 WHERE id = $1";

  try {
    await client.query(queryInsert, [voterID, vote]);
  } catch (error) {
    try {
      await client.query(queryUpdate, [voterID, vote]);
    } catch (error) {
      console.log("Error updating vote:", error);
    }
  }
}

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', metrics_path: '/metrics' });
})

app.get('/metrics', async (req, res) => {
  try {
    const metrics = await register.metrics();
    res.set('Content-Type', register.contentType);
    res.end(metrics);
  } catch (error) {
    console.error('Error exporting metrics:', error);
    res.status(500).send('Error exporting metrics');
  }
});

app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
})

const main = async () => {
  const pgClient = await openDbConnection({
    host: process.env.DATABASE_HOST || "database",
    user: process.env.DATABASE_USER || "postgres",
    password: process.env.DATABASE_PASSWORD || "postgres",
    database: process.env.DATABASE_NAME || "votes",
  });

  const redisClient = await openRedisConnection("redis");

  const keepAliveCommand = "SELECT 1";

  let definition = {
    vote: "",
    voter_id: "",
  };

  while (true) {
    await sleep(100);

    // Reconnect Redis if down
    try {
      await redisClient.ping();
    } catch (error) {
      console.log("Reconnecting Redis");
      await redisClient.connect();
    }

    const data = await redisClient.lpop("votes");

    if (data !== null) {
      try {
        const definition = JSON.parse(data);
        console.log(
          `Processing vote for '${definition.vote}' by '${definition.voter_id}'`
        );

        // Reconnect DB if down
        try {
          await pgClient.query(keepAliveCommand);
        } catch (error) {
          console.log("Reconnecting DB");
          await pgClient.end();
          await openDbConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
          });
        } finally {
          // Normal +1 vote requested
          updateVote(pgClient, definition.voter_id, definition.vote);
        }
      } catch (error) {
        console.log("Error decoding JSON:", error);
      }
    } else {
      // Keep alive for PostgreSQL
      await pgClient.query(keepAliveCommand);
    }
  }
};

main().catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`Server listening at http://0.0.0.0:${port}`);
});