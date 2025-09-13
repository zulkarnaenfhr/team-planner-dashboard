import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import CustomButton from "@/app/base/module/Button/Custom-Button";
import { useTranslation } from "react-i18next";
import "./login.css";
import { Button } from "primereact/button";
import CustomInput from "@/app/base/module/Input/Custom-Input";

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
      <div className="center-container fixed-container bg-gray-100">
         <div>
            <p className="text-40px-normal">{t("message.welcome")}</p>

            <div className="card-container center-container">
               <Card title={t("page.loginpage.formtitle")} className="login-form-container">
                  <form onSubmit={handleLogin} className="flex flex-column gap-3">
                     <CustomInput id="username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

                     <CustomInput id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                     <CustomButton label="Login" type="submit" className="w-full" />
                  </form>
               </Card>
            </div>
         </div>
      </div>
   );
}
