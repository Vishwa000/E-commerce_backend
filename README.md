# E-commerce API

This is a Node.js-based RESTful API for managing products in an E-commerce system.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager)
- [PostgreSQL](https://www.postgresql.org/) database

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Vishwa000/E-commerce_backend.git
   cd e-commerce-api

2. **Install dependencies:**
   ```bash
   npm install

## Configure the database

- Create a PostgreSQL database.
- Update the database configuration in config/database.js

1. **Run the migrations:**

   ```bash
   npx sequelize-cli db:migrate

## Usage

1. **Start the server:**

   ```bash
   npm start

- The API will be available at http://localhost:8000.

## License
- This project is licensed under the MIT License - see the LICENSE.md file for details.