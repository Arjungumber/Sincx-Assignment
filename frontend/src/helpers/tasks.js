import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api", 
});

export const getTasks = (token) => API.get("/tasks", {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});


export const createTask = (taskData,token) => API.post("/tasks", taskData, { 
    headers :{
        Authorization: `Bearer ${token}`,
    },
    });


export const updateTask = (id, updatedData) =>
    API.put(`/tasks/${id}`, updatedData);


export const deleteTask = (id) => API.delete(`/tasks/${id}`);
