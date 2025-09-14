import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./app/main/login/login";
import Dashboard from "./app/main/dashboard/dashboard";
import Home from "@/app/main/dashboard/home/home";
import Settings from "@/app/main/dashboard/settings/settings";
import type { ReactNode } from "react";

type PrivateRouteProps = {
   children: ReactNode;
};

function PrivateRoute({ children }: PrivateRouteProps) {
   const isAuth = localStorage.getItem("auth") === "true";
   return isAuth ? children : <Navigate to="/login" />;
}

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            {/* Public */}
            <Route path="/login" element={<Login />} />

            {/* Protected Dashboard */}
            <Route
               path="/dashboard"
               element={
                  <PrivateRoute>
                     <Dashboard />
                  </PrivateRoute>
               }
            >
               {/* ✅ Default redirect to /home */}
               <Route index element={<Navigate to="home" replace />} />

               <Route path="home" element={<Home />} />
               {/* <Route path="users" element={<Users />} /> */}
               <Route path="settings" element={<Settings />} />
            </Route>

            {/* Catch-all → redirect */}
            <Route path="*" element={<Navigate to="/login" />} />
         </Routes>
      </BrowserRouter>
   );
}
