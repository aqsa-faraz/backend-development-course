
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

### A. Core CRUD Endpoints

#### 1. Create a New Book
- **Method & URL:** `POST http://localhost:5000/api/books`
- **Request Body:**
  ```json
  {
    "title": "You Don't Know JS",
    "author": "Kyle Simpson",
    "category": "Programming",
    "publishedYear": 2015,
    "available": true
  }
  ```
- **Expected Response:** `201 Created` with the newly created book and auto-generated `id`.

#### 2. Get All Books
- **Method & URL:** `GET http://localhost:5000/api/books`
- **Expected Response:** `200 OK` with a JSON list of all books.

#### 3. Get Book by ID
- **Method & URL:** `GET http://localhost:5000/api/books/1`
- **Expected Response:** `200 OK` with the matching book object (or `404 Not Found` if the ID does not exist).

#### 4. Update Complete Book (`PUT`)
- **Method & URL:** `PUT http://localhost:5000/api/books/1`
- **Request Body:**
  ```json
  {
    "title": "Clean Code (2nd Edition)",
    "author": "Robert C. Martin",
    "category": "Software Engineering",
    "publishedYear": 2021,
    "available": false
  }
  ```
- **Expected Response:** `200 OK` with the completely replaced book object.

#### 5. Update Selected Fields (`PATCH`)
- **Method & URL:** `PATCH http://localhost:5000/api/books/1`
- **Request Body:**
  ```json
  {
    "available": true
  }
  ```
- **Expected Response:** `200 OK` with only the specified fields updated.

#### 6. Delete Book
- **Method & URL:** `DELETE http://localhost:5000/api/books/1`
- **Expected Response:** `200 OK` confirming deletion. Calling `GET /api/books/1` afterward should return `404 Not Found`.

---

### B. Search & Filtering Endpoints

#### 7. Search Books by Title
- **Method & URL:** `GET http://localhost:5000/api/books/search?title=Node`
- **Expected Response:** `200 OK` returning books whose titles match the query string (or `400 Bad Request` if `title` is missing or empty).

#### 8. List Available Books
- **Method & URL:** `GET http://localhost:5000/api/books/available`
- **Expected Response:** `200 OK` returning only books where `available` is `true`.

---

### C. Validation & Error Handling Checks

- **Invalid Payload (`400 Bad Request`):** Send a `POST /api/books` request with missing fields, an invalid `publishedYear` (e.g., `999` or `"abc"`), or a non-boolean `available` value. Verify the API returns `400 Bad Request` with a clear error message.
- **Invalid Book ID (`400 Bad Request`):** Send `GET http://localhost:5000/api/books/abc` and verify the API returns `400 Bad Request` indicating the ID must be a positive integer.
- **Unknown Route (`404 Not Found`):** Send `GET http://localhost:5000/api/invalid-route` and verify the `notFound` middleware returns `404 Not Found`.