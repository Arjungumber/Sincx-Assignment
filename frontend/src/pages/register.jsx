import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user", 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const res = await axios.post(
            "http://localhost:5000/api/auth/register",
            formData
        );
        localStorage.setItem("token", res.data.token); 
        localStorage.setItem("user", formData);
        navigate("/");
        toast.success(res.data.message || "User registered successfully!"); 
        } catch (err) {
        toast.error(err.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <div className="flex justify-center items-center mt-32 bg-gray-100">
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md w-96"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

            <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-3 border p-2 rounded"
            />
            <input
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-3 border p-2 rounded"
            />
            <input
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-3 border p-2 rounded"
            />

            <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full mb-3 border p-2 rounded"
            >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            </select>

            <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded"
            >
            Register
            </button>
            <div className="flex justify-center gap-2 mt-4 text-sm">
            <p>Already a user? </p>
            <a href="/login" className="text-blue-500">Login</a>
            </div>
        </form>
        </div>
    );
}
