"use client";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

interface NavbarProps {
   onToggleSidebar: () => void;
}

export default function CustomNavbar({ onToggleSidebar }: NavbarProps) {
   return <Menubar model={[]} start={<Button icon="pi pi-bars" onClick={onToggleSidebar} />} end={<span className="font-bold pr-3">Admin Dashboard</span>} />;
}
