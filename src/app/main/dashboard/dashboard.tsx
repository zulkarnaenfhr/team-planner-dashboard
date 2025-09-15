// app/dashboard/page.tsx (if Next.js App Router)
// or Dashboard.tsx if plain React

"use client";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom"; // if using React Router
import CustomNavbar from "@/app/base/module/Navbar/Navbar";
import Customsidebar from "@/app/base/module/Sidebar/Sidebar";

export default function Dashboard() {
   const [visible, setVisible] = useState(false);
   const navigate = useNavigate();

   const items = [
      { label: "Home", icon: "pi pi-home", command: () => navigate("/dashboard/home") },
      { label: "Users", icon: "pi pi-users", command: () => navigate("/dashboard/users") },
      { label: "Settings", icon: "pi pi-cog", command: () => navigate("/dashboard/settings") },
   ];

   const handleLogout = () => {
      localStorage.removeItem("auth");
      localStorage.removeItem("id_member");
      navigate("/login");
   };

   return (
      <div className="h-screen flex flex-column">
         {/* Navbar */}
         <CustomNavbar onToggleSidebar={() => setVisible(true)} />

         {/* Sidebar */}
         <Customsidebar visible={visible} onHide={() => setVisible(false)} onLogout={handleLogout} items={items} />

         {/* Content area */}
         <div className="flex-1 p-4 overflow-auto bg-gray-50">
            <Outlet /> {/* React Router nested pages */}
         </div>
      </div>
   );
}
