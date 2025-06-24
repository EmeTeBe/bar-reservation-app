import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Confirm from "../pages/Confirm";
import Reservation from "../pages/Reservation";

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservar" element={<Reservation />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
  );
}
// Este componente define las rutas de la aplicación.
// Utiliza React Router para manejar la navegación entre las páginas de inicio, reservas y confirmación.
