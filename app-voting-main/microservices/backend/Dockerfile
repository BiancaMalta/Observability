FROM --platform=$BUILDPLATFORM python:3.13.0a4-slim

ENV FLASK_ENV=development

WORKDIR /app

COPY microservices/backend/ .

RUN set -x && \
    apt-get update && apt-get upgrade -y && \
    apt-get install -y --no-install-recommends curl && \
    dpkgArch="$(dpkg --print-architecture)" && \
    rm -rf /var/lib/apt/lists/* && \
    pip install --no-cache-dir -r requirements.txt

EXPOSE 80

CMD ["gunicorn", "app:app", "-b", "0.0.0.0:80", "--log-file", "-", "--access-logfile", "-", "--workers", "1", "--keep-alive", "0"]

