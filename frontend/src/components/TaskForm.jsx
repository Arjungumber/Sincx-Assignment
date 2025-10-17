import { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

export default function TaskForm({ onAdd, onUpdate, taskToEdit }) {
    const [title, setTitle] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    const [status, setStatus] = useState("Pending");
    const [dueDate, setDueDate] = useState("");

    useEffect(() => {
        if (taskToEdit) {
        setTitle(taskToEdit.title);
        setAssignedTo(taskToEdit.assignedTo);
        setStatus(taskToEdit.status);
        const formattedDate = taskToEdit.dueDate
            ? new Date(taskToEdit.dueDate).toISOString().split("T")[0]
            : "";
        setDueDate(formattedDate);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !assignedTo || !dueDate) return;
        const createdBy = jwtDecode(localStorage.getItem("token")).id;
        const taskData = {
        title,
        assignedTo,
        status,
        dueDate,
        createdBy,
        };

        if (taskToEdit) {
        onUpdate(taskToEdit._id, taskData);
        } else {
        onAdd(taskData);
        }

        setTitle("");
        setAssignedTo("");
        setStatus("Pending");
        setDueDate("");
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow-md grid gap-4"
        >
        <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded w-full"
        />

        <input
            type="text"
            placeholder="Assigned To"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="border p-2 rounded w-full"
        />

        <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border p-2 rounded w-full"
        />

        <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-2 rounded w-full"
        >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
        </select>

        <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
            {taskToEdit ? "Update Task" : "Add Task"}
        </button>
        </form>
    );
}
