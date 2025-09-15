"use client";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

interface SidebarMenuProps {
   visible: boolean;
   onHide: () => void;
   onLogout: () => void;
   items: { label: string; icon: string; command: () => void }[];
}

export default function Customsidebar({ visible, onHide, onLogout, items }: SidebarMenuProps) {
   return (
      <Sidebar visible={visible} onHide={onHide}>
         <h2 className="mb-3">Menu</h2>
         <ul className="list-none p-0 m-0">
            {items.map((item, i) => (
               <li key={i} className="mb-2">
                  <Button label={item.label} icon={item.icon} className="w-full justify-start" onClick={item.command} />
               </li>
            ))}
         </ul>

         <Button onClick={onLogout} className="flex items-center gap-3 p-2 rounded bg-red-600 hover:bg-red-700 text-white mt-4 w-full">
            Logout
         </Button>
      </Sidebar>
   );
}
