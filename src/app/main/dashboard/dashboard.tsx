// app/dashboard/page.tsx (if Next.js App Router)
// or Dashboard.tsx if plain React

"use client";
import { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Outlet, useNavigate } from "react-router-dom"; // if using React Router

export default function Dashboard() {
   const [visible, setVisible] = useState(false);
   const navigate = useNavigate();

   const items = [
      { label: "Home", icon: "pi pi-home", command: () => navigate("/dashboard/home") },
      { label: "Users", icon: "pi pi-users", command: () => navigate("/dashboard/users") },
      { label: "Settings", icon: "pi pi-cog", command: () => navigate("/dashboard/settings") },
   ];

   const handleLogout = () => {
      localStorage.removeItem("auth"); // clear auth
      navigate("/login"); // redirect
   };

   return (
      <div className="h-screen flex flex-column">
         {/* Navbar */}
         <Menubar model={[]} start={<Button icon="pi pi-bars" onClick={() => setVisible(true)} />} end={<span className="font-bold pr-3">Admin Dashboard</span>} />

         {/* Sidebar */}
         <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <h2 className="mb-3">Menu</h2>
            <ul className="list-none p-0 m-0">
               {items.map((item, i) => (
                  <li key={i} className="mb-2">
                     <Button label={item.label} icon={item.icon} className="w-full justify-start" onClick={item.command} />
                  </li>
               ))}
            </ul>

            <button onClick={handleLogout} className="flex items-center gap-3 p-2 rounded bg-red-600 hover:bg-red-700">
               Logout
            </button>
         </Sidebar>

         {/* Content area */}
         <div className="flex-1 p-4 overflow-auto bg-gray-50">
            <Outlet /> {/* React Router nested pages */}
         </div>
      </div>
   );
}
