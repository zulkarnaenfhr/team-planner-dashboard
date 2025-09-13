import { Home, Settings, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
   const navigate = useNavigate();

   const handleLogout = () => {
      localStorage.removeItem("auth"); // clear auth
      navigate("/login"); // redirect
   };

   return (
      <div className="w-64 bg-gray-900 text-white h-screen p-5 flex flex-col">
         <h2 className="text-2xl font-bold mb-10">Team Planner</h2>

         {/* ✅ Navigation */}
         <nav className="flex flex-col gap-4 flex-1">
            <Link to="/dashboard/home" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700">
               <Home size={20} /> Home
            </Link>
            <Link to="/dashboard/settings" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700">
               <Settings size={20} /> Settings
            </Link>
         </nav>

         {/* ✅ Logout Button */}
         <button onClick={handleLogout} className="flex items-center gap-3 p-2 rounded bg-red-600 hover:bg-red-700">
            <LogOut size={20} /> Logout
         </button>
      </div>
   );
}
