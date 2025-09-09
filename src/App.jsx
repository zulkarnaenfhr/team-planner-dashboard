import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./app//main/login/login";
import Dashboard from "./app/main/dashboard/dashboard";

function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   useEffect(() => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
   }, []);

   return (
      <BrowserRouter>
         <Routes>
            {/* Default route → check auth */}
            <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
