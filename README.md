# Express.js MySQL CRUD API

A Node.js Express server with MySQL database providing CRUD operations for user management.

## Project Structure

```
├── config/
│   └── database.js          # MySQL database configuration and connection
├── controllers/
│   └── userController.js    # Business logic for user operations
├── models/
│   └── User.js             # User model with database operations
├── routes/
│   └── userRoutes.js       # API route definitions
├── .env                    # Environment variables
├── package.json           # Project dependencies
├── server.js              # Main server file
└── README.md              # This file
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

For development with auto-restart:

```bash
npm run dev
```

## API Endpoints

### Base URL: `http://localhost:3000/api`

### Health Check

- **GET** `/api/health` - Check server status

### Users CRUD Operations

- **POST** `/api/users` - Create a new user
- **GET** `/api/users` - Get all users
- **GET** `/api/users/:id` - Get user by ID
- **PUT** `/api/users/:id` - Update user by ID
- **DELETE** `/api/users/:id` - Delete user by ID

## API Usage Examples

### Create User

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "age": 30}'
```

### Get All Users

```bash
curl http://localhost:3000/api/users
```

### Get User by ID

```bash
curl http://localhost:3000/api/users/1
```

### Update User

```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "John Smith", "email": "johnsmith@example.com", "age": 31}'
```

### Delete User

```bash
curl -X DELETE http://localhost:3000/api/users/1
```

## Database Schema

### Users Table

- `id` - INT AUTO_INCREMENT PRIMARY KEY
- `name` - VARCHAR(255) NOT NULL
- `email` - VARCHAR(255) UNIQUE NOT NULL
- `age` - INT
- `created_at` - TIMESTAMP DEFAULT CURRENT_TIMESTAMP
- `updated_at` - TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

## Environment Variables

- `PORT` - Server port (default: 3000)
- `DB_HOST` - Database host (localhost)
- `DB_USER` - Database username (root)
- `DB_PASS` - Database password (root)
- `DB_NAME` - MySQL database name (express_crud_db)

## Prerequisites

Before running this application, make sure you have:

1. **Node.js** installed (version 14 or higher)
2. **MySQL** server running on your system
3. MySQL credentials: username `root`, password `root` (or update the .env file with your credentials)

## Setup Instructions

1. **Clone or download the project**

2. **Install dependencies:**

```bash
npm install
```

3. **Make sure MySQL is running** on your system with the specified credentials

4. **Start the server:**

```bash
npm start
```

The server will automatically:

- Create the database `express_crud_db` if it doesn't exist
- Create the `users` table with the proper schema
- Start listening on port 3000

For development with auto-restart:

```bash
npm run dev
```

## Testing the API

You can test the API using the provided curl examples or tools like Postman. The server will be available at `http://localhost:3000`.
