import { Bell, User } from "lucide-react";

export default function Navbar() {
   return (
      <div className="flex justify-between items-center bg-white shadow px-6 py-4">
         <h1 className="text-xl font-semibold">Dashboard</h1>
         <div className="flex items-center gap-6">
            <button className="relative">
               <Bell size={22} className="text-gray-600" />
               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>
            <div className="flex items-center gap-2">
               <User size={22} className="text-gray-600" />
               <span className="text-gray-700 font-medium">Fahri</span>
            </div>
         </div>
      </div>
   );
}
