# Morshed

Morshed is an academic management AI-driven system
designed to help streamline course selection for students, make performance 
predictions for each student, and provide academic support.
It empowers students to make informed decisions and assists advisors in offering 
personalized recommendations for students.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Branch Naming Convention](#branch-naming-convention)
- [License](#license)

## Features

- **Microservices Architecture**: Each feature is implemented as a separate microservice.
- **GraphQL API**: Utilizes GraphQL for efficient data retrieval and manipulation.
- **React.js Frontend**: A modern and responsive web interface for users to manage their tasks.
- **MySQL Database**: Stores task and user data securely.
- **Docker and Docker Compose**: Deploy the entire project stack with just a few commands.
- **AI Model**: Empowers students with course selection guidance, performance predictions, and academic support, while assisting advisors with personalized recommendations.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Docker](https://www.docker.com/get-started) installed on your machine.
- Basic understanding of Python, Node.js, GraphQL, React.js, and MySQL.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/PsutGraduationProject/Morshed.git
2. Navigate to the project directory:
   ```bash 
   cd Morshed/morshed_devops
3. Build and start the project using Docker Compose files:
   ```bash
   docker-compose -f docker-compose-front-end.yml up -d --build
   docker-compose -f docker-compose-backend.yml up -d --build
   
4. Access TMS in your web browser at http://localhost:9000

## Project Structure

1. `frontend/`: React.js frontend code.
2. `backend/`: Individual microservices (e.g., task service, user service).
3. `morshed_devops/`: Docker Composes files for deploying the entire project stack.

## Branch Naming Convention

To maintain a structured and organized codebase, we follow specific branch naming conventions. When contributing to TMS, please adhere to the following guidelines:

- `feature/XXX`
- `bugfix/XXX`
- `hotfix/XXX`
- `release/XXX`
- `maintenance/XXX`
- `docs/XXX`

## License
This project is licensed under the MIT License - see the **LICENSE** file for details
