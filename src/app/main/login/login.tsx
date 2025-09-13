import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import CustomButton from "@/app/base/module/Button/Custom-Button";
import { useTranslation } from "react-i18next";
import "./login.css";
import { Button } from "primereact/button";

export default function Login() {
   const { t, i18n } = useTranslation();
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();

      if (username === "asd" && password === "asd") {
         localStorage.setItem("auth", "true");
         window.location.href = "/dashboard"; // redirect
      } else {
         alert("Invalid credentials");
      }
   };

   return (
      <div className="flex justify-content-center align-items-center h-screen bg-gray-100">
         <Card title="Login" className="w-25rem shadow-2">
            <form onSubmit={handleLogin} className="flex flex-column gap-3">
               <div className="p-float-label">
                  <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full" />
                  <label htmlFor="username">Username</label>
               </div>

               <div className="p-float-label">
                  <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask feedback={false} className="w-full" />
                  <label htmlFor="password">Password</label>
               </div>

               <CustomButton label="Login" type="submit" className="w-full" />
            </form>
         </Card>
      </div>
   );
}
