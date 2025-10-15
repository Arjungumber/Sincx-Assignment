import './App.css';

import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-3xl font-bold mb-6 text-center">
        Employee Task Tracker
      </header>
      <Home />
    </div>
  );
}

export default App;

