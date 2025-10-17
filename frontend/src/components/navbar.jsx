import { Briefcase, User, LogOut } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const user = localStorage.getItem("user") ||  "user";

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out successfully!");
    window.location.href = "/";
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 text-white shadow-md">

      <div className="flex items-center gap-2">
        <Briefcase className="w-6 h-6 text-gray-500" />
        <h1 className="text-lg pl-2 text-gray-500 font-semibold tracking-wide">
          Employee Tracker System
        </h1>
      </div>

      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 px-3 py-2 rounded-lg transition"
        >
          <User className="w-5 h-5" />
          <span>{user}</span>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg w-32">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
            >
              <LogOut className="w-4 h-4 text-red-500" />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
