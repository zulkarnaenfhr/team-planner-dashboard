import { useState } from "react";
import { Card } from "primereact/card";
import CustomButton from "@/app/base/module/Button/Custom-Button";
import { useTranslation } from "react-i18next";
import "./login.css";
import CustomInput from "@/app/base/module/Input/Custom-Input";
import { loginWithAxios } from "@/app/service/login/login.services";

import { useDispatch } from "react-redux";
import { setLoading } from "@/app/store/slice/loaderSlice";

export default function Login() {
   const dispatch = useDispatch();

   const { t, i18n } = useTranslation();
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(setLoading(true));

      const result = await loginWithAxios(username, password);

      if (result.status == "success") {
         localStorage.setItem("auth", "true"); // clear auth
         localStorage.setItem("id_member", "result.data.id_member");

         window.location.href = "/dashboard"; // redirect
         dispatch(setLoading(false));
      } else {
         alert("gagal");
         dispatch(setLoading(false));
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
