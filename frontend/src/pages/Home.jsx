import { useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    // Add task
    const addTask = (task) => {
        setTasks([task, ...tasks]);
        setIsModalOpen(false);
    };

    // Update task
    const updateTask = (updatedTask) => {
        setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
        setTaskToEdit(null);
        setIsModalOpen(false);
    };

    // Delete task
    const deleteTask = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
        setTasks(tasks.filter((t) => t.id !== id));
        }
    };

    // Open modal for editing
    const editTask = (task) => {
        setTaskToEdit(task);
        setIsModalOpen(true);
    };

    return (
        <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
            <button
            onClick={() => {
                setTaskToEdit(null);
                setIsModalOpen(true);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
            Add New Task
            </button>
        </div>

        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-lg relative">
                <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                ✕
                </button>
                <TaskForm
                onAdd={addTask}
                onUpdate={updateTask}
                taskToEdit={taskToEdit}
                />
            </div>
            </div>
        )}

        <div className="mt-6 grid gap-4">
            {tasks.length === 0 ? (
            <p className="text-center text-gray-500">No tasks yet</p>
            ) : (
            tasks.map((task) => (
                <TaskCard
                key={task.id}
                task={task}
                onEdit={() => editTask(task)}
                onDelete={() => deleteTask(task.id)}
                />
            ))
            )}
        </div>
        </div>
    );
}
