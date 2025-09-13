import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./app/main/login/login";
import Dashboard from "./app/main/dashboard/dashboard";
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
            <Route path="/login" element={<Login />} />
            <Route
               path="/dashboard"
               element={
                  <PrivateRoute>
                     <Dashboard />
                  </PrivateRoute>
               }
            />
            <Route path="*" element={<Navigate to="/login" />} />
         </Routes>
      </BrowserRouter>
   );
}
