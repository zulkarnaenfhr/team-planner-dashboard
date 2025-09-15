"use client";
import Lottie from "react-lottie";
import animationData from "../../../../../public/gif/Loading.json"; // ✅ no `* as`
import "./FullPageLoader.css";

export default function FullPageLoader() {
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
   };

   return (
      <div className="loading-overlay">
         <div>
            <Lottie options={defaultOptions} height={300} width={300} />
         </div>
      </div>
   );
}
