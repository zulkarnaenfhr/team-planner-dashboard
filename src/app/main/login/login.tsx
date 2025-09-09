import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleLogin = (e) => {
      e.preventDefault();
      // cek dummy credential
      if (email === "admin@mail.com" && password === "simalakama") {
         localStorage.setItem("auth", "true"); // simpan credential
         navigate("/dashboard");
      } else {
         alert("Invalid credentials");
      }
   };

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded mb-4" />

            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded mb-6" />

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
               Sign In
            </button>
         </form>
      </div>
   );
}
