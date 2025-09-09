export default function Dashboard() {
   const handleLogout = () => {
      localStorage.removeItem("token");
      window.location.href = "/login"; // force redirect
   };

   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
         <h1 className="text-3xl font-bold mb-4">Welcome to Dashboard 🎉</h1>
         <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Logout
         </button>
      </div>
   );
}
