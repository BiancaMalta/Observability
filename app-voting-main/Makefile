FRONTEND_IMAGE_NAME := frontend:latest
BACKEND_IMAGE_NAME := backend:latest
WORKER_IMAGE_NAME := worker:latest

COMPOSE_FILE := docker-compose.yml

.PHONY: all build-all start-dev

all: build-all start-dev

build-all:
	docker build -t $(FRONTEND_IMAGE_NAME) -f microservices/frontend/Dockerfile .
	docker build -t $(BACKEND_IMAGE_NAME) -f microservices/backend/Dockerfile .
	docker build -t $(WORKER_IMAGE_NAME) -f microservices/worker/Dockerfile .

dev-start:
	docker-compose -f $(COMPOSE_FILE) up --build

dev-stop:
	docker-compose down