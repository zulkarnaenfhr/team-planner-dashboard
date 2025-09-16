"use client";
import React, { ReactNode, useState } from "react";
import { Layout, Button } from "antd";

const { Header, Sider, Content } = Layout;

const layoutStyle: React.CSSProperties = {
   minHeight: "100vh",
};

const siderStyle: React.CSSProperties = {
   backgroundColor: "f9fafb",
   padding: "16px",
   marginTop: "20px",
};

const headerStyle: React.CSSProperties = {
   backgroundColor: "#ffffff",
   color: "white",
   textAlign: "center",
   padding: "0 16px",
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
};

const contentStyle: React.CSSProperties = {
   padding: "24px",
   minHeight: "calc(100vh - 134px)", // header + footer tinggi
   backgroundColor: "#f9fafb",
};

type Props = {
   children: ReactNode;
};
import { Outlet, useNavigate } from "react-router-dom";

const TempLayout: React.FC<Props> = ({ children }) => {
   const [collapsed, setCollapsed] = useState(false);
   const navigate = useNavigate();
   const handleLogout = () => {
      localStorage.removeItem("auth");
      localStorage.removeItem("id_member");
      navigate("/login");
   };

   return (
      <Layout style={layoutStyle}>
         <Header className="header-component">
            {/* <Button type="primary" onClick={() => setCollapsed(!collapsed)}>
                  {collapsed ? "Expand" : "Collapse"}
               </Button> */}
            <span>Header</span>
         </Header>
         <Layout>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={250}>
               Sidebarasdasd
               <div className="mt-auto p-3 hover:bg-red-600 cursor-pointer flex items-center gap-2" onClick={handleLogout}>
                  <i className="pi pi-sign-out"></i>
                  <span>Logout</span>
               </div>
               <h1>masuk</h1>
            </Sider>
            <Content style={contentStyle}>{children}</Content>
         </Layout>
      </Layout>
   );
};

export default TempLayout;
