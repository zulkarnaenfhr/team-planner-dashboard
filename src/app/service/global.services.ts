import { useNavigate } from "react-router-dom";

export function useChangeRoute() {
   const navigate = useNavigate();

   function changeRoute(path: string) {
      navigate(path);
   }

   return { changeRoute };
}
