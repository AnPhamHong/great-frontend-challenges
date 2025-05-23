import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/global.scss";
import App from "@/App.tsx";
import ToastProvider from "@/components/UI/toast/Toast.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>
);
