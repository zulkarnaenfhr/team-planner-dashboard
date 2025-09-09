import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      // 👉 Replace this with real authentication API
      if (email === "admin@test.com" && password === "1234") {
         localStorage.setItem("token", "my-secret-token");

         // ✅ redirect to dashboard
         navigate("/dashboard");
      } else {
         alert("Invalid credentials!");
      }
   };

   return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
         <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
               <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
               <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
               <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Sign In
               </button>
            </form>
         </div>
      </div>
   );
}
