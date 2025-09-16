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

import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useChangeRoute } from "@/app/base/helper/hooks/globalHooks";

type MenuItem = Required<MenuProps>["items"][number];

const TempLayout: React.FC<Props> = ({ children }) => {
   const [collapsed, setCollapsed] = useState(false);
   const { changeRoute } = useChangeRoute();
   const [current, setCurrent] = useState("mail");

   const onClick: MenuProps["onClick"] = (e) => {
      console.log("click ", e);
      setCurrent(e.key);
   };

   const handleLogout = () => {
      localStorage.removeItem("auth");
      localStorage.removeItem("id_member");
      changeRoute("/login");
   };

   const items: MenuItem[] = [
      {
         key: "Dashboard",
         label: <div onClick={() => changeRoute("/dashboard")}>Dashboard</div>,
      },
      {
         label: "Settings",
         key: "SubMenu",
         children: [
            { key: "Member", label: <div onClick={() => changeRoute("/dashboard/settings/member")}>Member</div> },
            { key: "Project", label: <div onClick={() => changeRoute("/dashboard/settings/project")}>Project</div> },
         ],
      },
   ];

   return (
      <Layout style={layoutStyle}>
         <Header className="header-component">
            {/* <Button type="primary" onClick={() => setCollapsed(!collapsed)}>
                  {collapsed ? "Expand" : "Collapse"}
               </Button> */}
            {/* <span>Header</span> */}
            <p className="text-20px-bold">CC Extended Dashboard Planner</p>
         </Header>
         <Layout>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={250}>
               <Menu onClick={onClick} defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline" items={items} />
               <button onClick={handleLogout}>logout</button>
            </Sider>
            <Content style={contentStyle}>{children}</Content>
         </Layout>
      </Layout>
   );
};

export default TempLayout;
