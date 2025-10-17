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

- **Frontend:** React, Axios, Tailwind CSS (optional)
- **Backend:** Node.js, Express.js, Mongoose, dotenv, bcrypt (if using authentication), JWT (if using authentication)
- **Database:** MongoDB
- **Other:** NPM for package management

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd sincx-assignment


2.  **Install Dependencies**
   ```bash
   npm install

3.  **Setup Environment variables** 
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret 
    PORT=5000

4.  **Run the backend Server**
    npm run dev

5.    **Run the frontend**
    npm run start

6. **Open the app**
   Visit http://localhost:3000 in your browser.


## Usage

Admin Login: Can view and manage all tasks, perform CRUD operations, sort, filter, and search tasks.

Employee Login: Can view only their assigned tasks.                 
