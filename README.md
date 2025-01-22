# Simple Three-Tier Web Application

This project demonstrates a basic three-tier web application architecture using React (frontend), Node.js/Express (backend), and an in-memory data store. It also includes Dockerization and a CI/CD pipeline with Jenkins.

## Project Structure

Project Structure:

simple-three-tier-app/
├── frontend/         # Presentation Tier (React)
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   └── ...
│   ├── package.json
│   └── ...
├── backend/          # Application Tier (Node.js/Express)
│   ├── index.js
│   ├── data.js       # In-memory data store
│   └── package.json
├── Dockerfile        # Dockerfile for the entire app
├── .dockerignore
├── docker-compose.yml # For local development
├── Jenkinsfile
├── README.md


## Technologies Used

*   React
*   Node.js
*   Express.js
*   Docker
*   Jenkins
*   AWS EC2 (for deployment)

## Local Development

1.  Navigate to the project root.
2.  Run `docker-compose up --build`.
3.  Access the app at `http://localhost:3000`.

## Deployment (AWS EC2 with Jenkins)
1.  Set up an EC2 instance (follow previous instructions for)

1.  Set up an EC2 instance (follow previous instructions fo
