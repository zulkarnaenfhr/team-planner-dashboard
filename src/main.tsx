import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "primereact/resources/themes/lara-light-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core styles
import "primeicons/primeicons.css"; // Icons
import "./index.css"; // Your custom styles
import "./i18n"; // ✅ import i18n config
import "primeflex/primeflex.css";
import { Provider } from "react-redux";
import { store } from "./app/store/store";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </StrictMode>
);
