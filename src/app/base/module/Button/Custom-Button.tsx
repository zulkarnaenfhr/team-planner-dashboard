import { Button } from "primereact/button";
import "./Custom-Button.css";

interface CustomButtonProps {
   label: string;
   icon?: string; // PrimeIcons class, e.g., "pi pi-check"
   type?: "button" | "submit" | "reset";
   className?: string;
   onClick?: () => void; // 👈 allow onClick
}

export default function CustomButton(props: CustomButtonProps) {
   return <Button {...props} />;
}
