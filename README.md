# Sincx-Assignment

# Employee/Task Tracker System

A full-stack **MERN** web application that allows admins to manage tasks and employees efficiently. Employees can view their assigned tasks, while admins have full control over all tasks with CRUD operations, filtering, sorting, and searching capabilities.

---

## Features

### Admin:
- Create, Read, Update, and Delete (CRUD) tasks.
- View tasks assigned to all employees.
- Search tasks by task name or employee name.
- Sort tasks based on different criteria.
- Filter tasks by status (Completed, Pending, Ongoing).

### Employee/User:
- View only their assigned tasks.

---

## Tech Stack

- **Frontend:** React, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js, Mongoose, dotenv, bcrypt, JWT 
- **Database:** MongoDB
- **Other:** NPM for package management

---

# Task API Documentation
## Base URL
http://localhost:5000/tasks

## Authentication
All endpoints require a JWT token in the headers:
`Authorization: Bearer <token>`

# Task API Endpoints

### 1. Get All Tasks
**Endpoint:** `GET /api/tasks`  

**Description:**  
- Admin users can see all tasks.  
- Non-admin users only see tasks they created. 

**Query Parameters (optional):**  

| Parameter | Type   | Description |
|-----------|--------|-------------|
| `status`  | string | Filter tasks by status (`Pending`, `In Progress`, `Completed`). |
| `sort`    | string | Sort tasks. Currently only supports `dueDate`. |
| `search`  | string | Search by task title or `assignedTo` (case-insensitive). |

**Request Example:**
```bash
GET /tasks?status=Pending&sort=dueDate&search=John
```

**Response Example:**
```json
[
  {
    "_id": "650c3f2a9f1e4d0012345678",
    "title": "Complete Report",
    "assignedTo": "John Doe",
    "status": "Pending",
    "dueDate": "2025-10-20T00:00:00Z",
    "createdBy": {
      "_id": "650c3f2a9f1e4d0098765432",
      "name": "Alice",
      "email": "alice@example.com"
    }
  }
]
```

### 2. Create a task
**Endpoint:** `POST /api/tasks` 
**Description:**  
- Creates a new task.

**Request Body:**
```json
{
  "title": "Task 1",
  "assignedTo": "User1",
  "status": "Pending",
  "dueDate": "2025-10-20",
  "createdBy": "<userId>"
}
```
**Response Example:**
```json
{
  "_id": "...",
  "title": "Task 1",
  "assignedTo": "User1",
  "status": "Pending",
  "dueDate": "2025-10-20T00:00:00Z",
  "createdBy": "..."
}
```

### 3. Update a task
**Endpoint:** `PUT /api/tasks/:id` 
**Description:**  
- Updates task.
- Only admin can update a task

**Request Body:**
```json
{
  "title": "Updated Task",
  "assignedTo": "User2",
  "status": "In Progress",
  "dueDate": "2025-10-25"
}

```
**Response Example:**
```json
{
  "_id": "...",
  "title": "Updated Task",
  "assignedTo": "User2",
  "status": "In Progress",
  "dueDate": "2025-10-25T00:00:00Z",
  "createdBy": "..."
}

```

### 4. Delete a task
**Endpoint:** `PUT /api/tasks/:id` 
**Description:**  
- Deletes task.
- Only admin can delete a task


**Request Example**
```bash
delete api/tasks/650c3f2a9f1e4d0012345678
```

**Response Example:**
```json

  {
  "message": "Task deleted successfully"
  }

```


# Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd sincx-assignment


2.  **Install Dependencies**
    ```bash
    npm install


 3. **Setup Environment variables** 
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret 
    PORT=5000


4. **Run the backend Server**
   ```bash
   npm run dev


5. **Run the frontend**
   ```bash
   npm run start

6. **Open the app**
   Visit http://localhost:3000 in your browser.







## Usage

Admin Login: Can view and manage all tasks, perform CRUD operations, sort, filter, and search tasks.

Employee Login: Can view only their assigned tasks.                 
