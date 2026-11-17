# Containerization and Kubernetes Deployment

## Project Overview
A simple web application containerized using Docker and deployed
on a local Kubernetes cluster using Docker Desktop.

## Technologies Used
- Docker
- Kubernetes
- Nginx
- YAML
- Docker Desktop

## Implementation
1. Created a simple HTML web application.
2. Created a Dockerfile using the Nginx Alpine image.
3. Built the Docker image devops-webapp:v1.
4. Created a Kubernetes Deployment with two replicas.
5. Created a NodePort Service to expose the application.
6. Verified that both pods were running.
7. Accessed the application at http://localhost:30080.

## Commands
docker build -t devops-webapp:v1 .
kubectl apply -f k8s/
kubectl get deployments
kubectl get pods
kubectl get services

## Result
Successfully deployed and accessed the web application
through Kubernetes.
