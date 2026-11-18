
# Library Management REST API

A RESTful API built with **Node.js**, **Express.js**, and **MVC architecture** for managing a library's book inventory using an in-memory data store.

## Features
- Full CRUD operations for books (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`)
- Search books by title (`GET /api/books/search?title=...`)
- Filter available books (`GET /api/books/available`)
- Input validation for fields, data types, and book IDs
- Centralized error-handling and 404 Not Found middleware

## Setup & Installation

1. **Clone or extract the project folder:**
   ```bash
   git clone <your-repository-url>
   cd library-management
   ```

2. **Install required dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the project root directory and add the port configuration:
   ```env
   PORT=5000
   ```

4. **Start the server:**
   ```bash
   # Production mode
   npm start

   # Development mode (with nodemon)
   npm run dev
   ```
## API Endpoints & Testing Guide (Postman / Thunder Client)

Base URL: `http://localhost:5000/api/books`

| Method | Endpoint | Description | Status Codes |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/books` | List all books | `200` |
| `GET` | `/api/books/search?title=Node` | Search books by title | `200`, `400` |
| `GET` | `/api/books/available` | List only available books | `200` |
| `GET` | `/api/books/:id` | Get a single book by ID | `200`, `400`, `404` |
| `POST` | `/api/books` | Add a new book | `201`, `400` |
| `PUT` | `/api/books/:id` | Replace all details of a book | `200`, `400`, `404` |
| `PATCH` | `/api/books/:id` | Partially update a book | `200`, `400`, `404` |
| `DELETE` | `/api/books/:id` | Delete a book | `200`, `400`, `404` |

### Sample Payloads for Testing

**1. Create a Book (`POST /api/books`)**
```json
{
  "title": "You Don't Know JS",
  "author": "Kyle Simpson",
  "category": "Programming",
  "publishedYear": 2015,
  "available": true
}
```

**2. Replace a Book (`PUT /api/books/1`)**
*(All fields are required)*
```json
{
  "title": "Clean Code (2nd Edition)",
  "author": "Robert C. Martin",
  "category": "Software Engineering",
  "publishedYear": 2021,
  "available": false
}
```

**3. Update Selected Fields (`PATCH /api/books/1`)**
*(Provide one or more valid fields)*
```json
{
  "available": true
}
```