import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ReservationProvider } from "./context/ReservationProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReservationProvider>
      <App />
    </ReservationProvider>
  </StrictMode>
);
