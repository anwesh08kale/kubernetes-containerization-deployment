# Containerization and Kubernetes Deployment

## Project Overview
A Node.js web application containerized using Docker and deployed on a local Kubernetes cluster using Docker Desktop.

## Technologies Used
- Node.js
- Docker
- Kubernetes
- Docker Desktop
- Docker Hub base image (Node.js Alpine)
- YAML
- GitHub

## Implementation
1. Created a basic Node.js web application using the built-in HTTP module.
2. Created a Dockerfile using node:22-alpine.
3. Built the Docker image devops-webapp:v2.
4. Created a Kubernetes Deployment with two replicas.
5. Created a NodePort Service to expose the application on port 30080.
6. Verified both application pods were running.
7. Accessed the application through http://localhost:30080.

## Commands
docker build -t devops-webapp:v2 .
kubectl apply -f k8s/
kubectl get deployments
kubectl get pods
kubectl get services

## Result
Successfully containerized and deployed the Node.js application using Docker and Kubernetes.
