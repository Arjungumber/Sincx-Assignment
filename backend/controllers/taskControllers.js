import Task from "../models/task.js";


export const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


export const getTasks = async (req, res) => {
    try {
        const { status, sort, search } = req.query;

        let query = {};
        if (status) query.status = status;
        if (search)
        query.$or = [
            { title: { $regex: search, $options: "i" } },
            { assignedTo: { $regex: search, $options: "i" } },
        ];

        let tasks = Task.find(query);
        if (sort === "dueDate") tasks = tasks.sort({ dueDate: 1 });

        const result = await tasks;
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        });
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


export const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
