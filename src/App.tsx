import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./app/main/login/login";
import Dashboard from "./app/main/dashboard/dashboard";
import type { ReactNode } from "react";
import FullPageLoader from "./app/base/module/FullPageLoader/FullPageLoader";
import { useSelector } from "react-redux";
import { RootState } from "./app/store/store";
import Members from "./app/main/dashboard/settings/members";
import Project from "./app/main/dashboard/settings/project";

type PrivateRouteProps = {
   children: ReactNode;
};

function PrivateRoute({ children }: PrivateRouteProps) {
   const isAuth = localStorage.getItem("auth") === "true";
   return isAuth ? children : <Navigate to="/login" />;
}

export default function App() {
   const isLoading = useSelector((state: RootState) => state.loader.isLoading);

   return (
      <>
         {isLoading && <FullPageLoader />}

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
                  <Route path="settings/member" element={<Members />} />
                  <Route path="settings/project" element={<Project />} />
               </Route>

               {/* Catch-all → redirect */}
               <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}
