import { useState } from "react";
import { Home, Settings, LogOut, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
   const [isOpen, setIsOpen] = useState(true);

   return (
      <div className="flex">
         {/* Toggle button (hamburger) */}
         <button onClick={() => setIsOpen(!isOpen)} className="p-3 bg-gray-900 text-white md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
         </button>

         {/* Sidebar */}
         <AnimatePresence>
            {isOpen && (
               <motion.div initial={{ x: -250 }} animate={{ x: 0 }} exit={{ x: -250 }} transition={{ duration: 0.3 }} className="fixed top-0 left-0 w-64 bg-gray-900 text-white h-screen p-5 flex flex-col md:relative">
                  <h2 className="text-2xl font-bold mb-10">Team Planner</h2>
                  <nav className="flex flex-col gap-4 flex-1">
                     <Link to="/dashboard" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700">
                        <Home size={20} /> Dashboard
                     </Link>
                     <Link to="/settings" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700">
                        <Settings size={20} /> Settings
                     </Link>
                  </nav>
                  <button
                     onClick={() => {
                        localStorage.removeItem("auth");
                        window.location.href = "/login";
                     }}
                     className="flex items-center gap-3 p-2 rounded bg-red-600 hover:bg-red-700"
                  >
                     <LogOut size={20} /> Logout
                  </button>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
