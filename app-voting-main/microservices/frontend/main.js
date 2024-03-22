const express = require('express');
const async = require('async');
const { Pool } = require('pg');
const cookieParser = require('cookie-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const prometheus = require('prom-client');

// Define Prometheus metrics
const httpRequestCounter = new prometheus.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route']
});

// Define middleware to count HTTP requests
app.use((req, res, next) => {
  httpRequestCounter.inc({ method: req.method, route: req.path });
  next();
});

// Your existing code goes here...

// Define a route to expose Prometheus metrics
app.get('/metrics', (req, res) => {
  res.set('Content-Type', prometheus.register.contentType);
  res.end(prometheus.register.metrics());
});

// Loading environment variables
const port = process.env.APP_PORT || 3000;
const dbhost = process.env.DATABASE_HOST || 'database';
const dbname = process.env.DATABASE_NAME || 'votes';
const dbuser = process.env.DATABASE_USER || 'postgres';
const dbpass = process.env.DATABASE_PASSWORD || 'postgres';


if (!dbhost) {
  throw new Error("DATABASE_HOST not set");
}

if (!dbname) {
  throw new Error("DATABASE_NAME not set");
}

const connectionString = `postgres://${dbuser}:${dbpass}@${dbhost}/${dbname}`;

io.on('connection', function (socket) {
  socket.emit('message', { text : 'Welcome!' });

  socket.on('subscribe', function (data) {
    socket.join(data.channel);
  });
});

const pool = new Pool({
  connectionString: connectionString
});

async.retry(
  {times: 1000, interval: 1000},
  function(callback) {
    pool.connect(function(err, client, done) {
      if (err) {
        console.error("Waiting for db");
      }
      callback(err, client);
    });
  },
  function(err, client) {
    if (err) {
      return console.error("Giving up");
    }
    console.log("Connected to db");
    getVotes(client);
  }
);

function getVotes(client) {
  client.query('SELECT vote, COUNT(id) AS count FROM votes GROUP BY vote', [], function(err, result) {
    if (err) {
      console.error("Error performing query: " + err);
    } else {
      var votes = collectVotesFromResult(result);
      io.sockets.emit("scores", JSON.stringify(votes));
    }

    setTimeout(function() {getVotes(client) }, 1000);
  });
}

function collectVotesFromResult(result) {
  var votes = {a: 0, b: 0};

  result.rows.forEach(function (row) {
    votes[row.vote] = parseInt(row.count);
  });

  return votes;
}

app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/views/index.html'));
});

server.listen(port, function () {
  var port = server.address().port;
  console.log('App running on port ' + port);
});