# Employee Task Management REST API

A Node.js and Express.js REST API built using the MVC architecture for managing, assigning, filtering, and tracking employee tasks.

---

## 1. Installation Instructions

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (included with Node.js)
- **Postman** or **Thunder Client** (for testing endpoints)

### Setup Steps
1. **Clone or extract the project folder:**
   ```bash
   git clone <your-repository-url>
   cd employee-task-management
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

---

## 2. Running the Application

1. **Start the server:**
   ```bash
   npm start
   ```
   *(Or run directly with `node server.js`)*

2. **Start in development mode (if `nodemon` is configured in `package.json`):**
   ```bash
   npm run dev
   ```

3. **Verify server startup:**
   Once running, the terminal should confirm the server is listening on:
   ```text
   http://localhost:5000
   ```

---

## 3. API Testing Instructions

Use **Postman** or **Thunder Client** to test all endpoints below. For every `POST`, `PUT`, and `PATCH` request, set the request header `Content-Type: application/json` and select **Body → raw → JSON**.

### A. Core CRUD Endpoints

#### 1. Create a New Task
- **Method & URL:** `POST http://localhost:5000/api/tasks`
- **Request Body:**
  ```json
  {
    "title": "API Documentation",
    "description": "Write complete testing instructions in README.md",
    "assignedTo": "Sara Ahmed",
    "priority": "High",
    "status": "Pending",
    "dueDate": "2026-12-01"
  }
  ```
- **Expected Response:** `201 Created` with the newly created task and auto-generated `id`.

#### 2. Get All Tasks
- **Method & URL:** `GET http://localhost:5000/api/tasks`
- **Expected Response:** `200 OK` with a JSON list of all tasks.

#### 3. Get Task by ID
- **Method & URL:** `GET http://localhost:5000/api/tasks/1`
- **Expected Response:** `200 OK` with the matching task object (or `404 Not Found` if the ID does not exist).

#### 4. Update Complete Task (`PUT`)
- **Method & URL:** `PUT http://localhost:5000/api/tasks/1`
- **Request Body:**
  ```json
  {
    "title": "API Documentation Updated",
    "description": "Finalized all endpoint examples",
    "assignedTo": "Sara Ahmed",
    "priority": "Medium",
    "status": "In Progress",
    "dueDate": "2026-12-05"
  }
  ```
- **Expected Response:** `200 OK` with the completely replaced task object.

#### 5. Update Selected Fields (`PATCH`)
- **Method & URL:** `PATCH http://localhost:5000/api/tasks/1`
- **Request Body:**
  ```json
  {
    "status": "Completed"
  }
  ```
- **Expected Response:** `200 OK` with only the specified fields updated.

#### 6. Delete Task
- **Method & URL:** `DELETE http://localhost:5000/api/tasks/1`
- **Expected Response:** `200 OK` confirming deletion. Calling `GET /api/tasks/1` afterward should return `404 Not Found`.

---

### B. Filtering & Challenge Endpoints

#### 7. Filter by Status
- **Method & URL:** `GET http://localhost:5000/api/tasks/status/Pending`
- **Valid Values:** `Pending`, `In Progress`, `Completed`
- **Expected Response:** `200 OK` returning tasks matching the given status.

#### 8. Filter by Priority
- **Method & URL:** `GET http://localhost:5000/api/tasks/priority/High`
- **Valid Values:** `Low`, `Medium`, `High`
- **Expected Response:** `200 OK` returning tasks matching the given priority.

#### 9. Task Summary
- **Method & URL:** `GET http://localhost:5000/api/tasks/summary`
- **Expected Response:** `200 OK` returning total task count alongside counts for `Pending`, `In Progress`, and `Completed`.

#### 10. Tasks by Employee Name
- **Method & URL:** `GET http://localhost:5000/api/tasks/employee/Sara%20Ahmed`
- **Expected Response:** `200 OK` returning all tasks assigned to `Sara Ahmed`.

#### 11. Overdue Tasks
- **Method & URL:** `GET http://localhost:5000/api/tasks/overdue`
- **Expected Response:** `200 OK` returning tasks whose `dueDate` has passed and whose `status` is not `Completed`.

---

### C. Validation & Error Handling Checks

- **Invalid Payload (`400 Bad Request`):** Send a `POST /api/tasks` request with missing fields or an invalid `priority`/`status` value. Verify the API returns `400 Bad Request` with a clear error message.
- **Unknown Route (`404 Not Found`):** Send `GET http://localhost:5000/api/invalid-route` and verify the `notFound` middleware returns `404 Not Found`.
