# Task Management System (TMS)

The Task Management System (TMS) is a microservices-based web application designed to help students manage their tasks efficiently within a university setting. (TMS) is built with a combination of Python, Node.js, React.js, and MySQL, and it utilizes Docker and Docker Compose for easy deployment.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- **Microservices Architecture**: TMS is built using a microservices architecture to ensure scalability and modularity.
- **GraphQL API**: Utilizes GraphQL for efficient data retrieval and manipulation.
- **React.js Frontend**: A modern and responsive web interface for users to manage their tasks.
- **MySQL Database**: Stores task and user data securely.
- **Docker and Docker Compose**: Easily deploy the entire project stack with just a few commands.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Docker](https://www.docker.com/get-started) installed on your machine.
- Basic understanding of Python, Node.js, GraphQL, React.js, and MySQL.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/TMS.git
2. Navigate to the project directory:
   ```bash 
   cd TMS
3. Build and start the project using Docker Compose:
   ```bash
   docker-compose up -d
   
4. Access TMS in your web browser at http://localhost:9000

## Project Structure

1. `frontend/`: React.js frontend code.
2. `backend/`: Individual microservices (e.g., task service, user service).
3. `docker-compose.yml`: Docker Compose configuration file.

## License
This project is licensed under the MIT License - see the **LICENSE** file for details
