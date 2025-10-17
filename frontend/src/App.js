import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import ProtectedRoute from "./components/protectedRoute";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Navbar/>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
