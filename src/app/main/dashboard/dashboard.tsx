import React from "react";
import TempLayout from "@/app/base/module/TempLayout/TempLayout";
import { Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
   return (
      <TempLayout>
         <h1>Dashboard Page</h1>
         <Outlet /> {/* <- child routes like settings/member will render here */}
      </TempLayout>
   );
};

export default Dashboard;
