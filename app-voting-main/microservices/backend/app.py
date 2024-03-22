import json
import logging
import os
import random
import socket

from flask import Flask, g, jsonify, make_response, render_template, request
from prometheus_client import CONTENT_TYPE_LATEST, Counter, generate_latest
from prometheus_flask_exporter import PrometheusMetrics
from redis import Redis

# Env vars
REDIS = os.getenv('REDIS_HOST', "localhost")

# App setup
option_a = os.getenv('OPTION_A', "Cats")
option_b = os.getenv('OPTION_B', "Dogs")
hostname = socket.gethostname()

app = Flask(__name__)
metrics = PrometheusMetrics(app)

# Prometheus metrics voting counter
votes_counter = Counter(
    'votes_total',
    'Total number of votes casted',
    labelnames=['vote_type']
)

# Logging setup
gunicorn_error_logger = logging.getLogger('gunicorn.error')
app.logger.handlers.extend(gunicorn_error_logger.handlers)
app.logger.setLevel(logging.INFO)

# Redis connection
def get_redis():
    if not hasattr(g, 'redis'):
        g.redis = Redis(host=REDIS, db=0, socket_timeout=5)
    return g.redis

# Custom Prometheus metric for vote quantity
def vote_label():
    vote_type = request.form['vote']
    if vote_type == 'A':
        vote_type = 'Cats'
    elif vote_type == 'B':
        vote_type = 'Dogs'
    return {'vote_type': vote_type}

# Main route
@app.route("/", methods=['POST', 'GET'])
def hello():
    voter_id = request.cookies.get('voter_id')
    if not voter_id:
        voter_id = hex(random.getrandbits(64))[2:-1]

    vote = None

    if request.method == 'POST':
        redis = get_redis()
        vote = request.form['vote']
        app.logger.info('Received vote for %s', vote)
        data = json.dumps({'voter_id': voter_id, 'vote': vote})
        redis.rpush('votes', data)
        votes_counter.labels(vote_type=vote_label()['vote_type']).inc()

    resp = make_response(render_template(
        'index.html',
        option_a=option_a,
        option_b=option_b,
        hostname=hostname,
        vote=vote,
    ))
    resp.set_cookie('voter_id', voter_id)
    return resp

# Metrics route
@app.route("/metrics")
def metrics():
    return generate_latest(), 200, {'Content-Type': CONTENT_TYPE_LATEST}

# Custom statistics route
@app.route("/stats")
def stats():
    redis = get_redis()
    total_votes = redis.llen('votes')
    current_options = {'option_a': option_a, 'option_b': option_b}
    return jsonify({'total_votes': total_votes, 'current_options': current_options})

# Health check route
@app.route("/healthz")
def healthz():
    return "OK"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True, threaded=True)
