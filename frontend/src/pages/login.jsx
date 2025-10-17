import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const res = await axios.post(
            "http://localhost:5000/api/auth/login",
            credentials
        );
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user.name);
        window.location.href = "/"; 
        toast.success("Login successful!");
        } catch (err) {
        toast.error(err.response?.data?.message || "Invalid credentials!");
        }
    };

    return (
        <div className="flex justify-center items-center mt-32 bg-gray-100">
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md w-96"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

            <input
            name="email"
            placeholder="Email"
            type="email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full mb-3 border p-2 rounded"
            />
            <input
            name="password"
            placeholder="Password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full mb-3 border p-2 rounded"
            />

            <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded"
            >
            Login
            </button>
            <div className="flex justify-center gap-2 mt-4 text-sm">
            <p>New user? </p>
            <a href="/register" className="text-blue-500">Register</a>
            </div>
        </form>
        </div>
    );
}
