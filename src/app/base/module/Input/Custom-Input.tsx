import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";

import React from "react";
import "./Custom-Input.css";

type CustomInputProps = {
   id: string;
   label: string;
   type?: "text" | "password";
   value: string;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   className?: string;
};

export default function CustomInput({ id, label, type = "text", value, onChange, className }: CustomInputProps) {
   return (
      <div className="custom-input-container">
         <label className="custom-input-label text-16px-bold" htmlFor={id}>
            {label}
         </label>
         {type === "password" ? (
            <Password
               pt={{
                  iconField: {
                     root: {
                        style: { width: "100%", height: "50px" },
                     },
                  },
                  input: {
                     style: { width: "100%", height: "50px" },
                  },
                  root: {
                     style: { width: "100%", height: "50px" },
                  },
               }}
               id={id}
               value={value}
               onChange={onChange}
               toggleMask
               feedback={false}
               className={`${className || ""}`}
            />
         ) : (
            <InputText value={value} onChange={onChange} className={`custom-input text-14px-bold ${className || ""}`} />
         )}
      </div>
   );
}
