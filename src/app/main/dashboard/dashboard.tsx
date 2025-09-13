import Sidebar from "@/app/base/module/Sidebar/Sidebar";
import Navbar from "@/app/base/module/Navbar/Navbar";

export default function Dashboard() {
   return (
      <div className="flex">
         {/* Sidebar */}
         <Sidebar />

         {/* Main content */}
         <div className="flex-1 flex flex-col bg-gray-100 min-h-screen">
            <Navbar />

            <div className="p-6">
               <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard 🎉</h2>
               <div className="grid grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">Card 1</div>
                  <div className="bg-white p-6 rounded-lg shadow">Card 2</div>
                  <div className="bg-white p-6 rounded-lg shadow">Card 3</div>
               </div>
            </div>
         </div>
      </div>
   );
}
