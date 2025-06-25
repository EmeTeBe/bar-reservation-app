import { useLocation, useNavigate } from "react-router-dom";

export default function Confirm() {
  const location = useLocation();
  const navigate = useNavigate();

  const formData = location.state;

  if (!formData) {
    // Si entran directamente a /confirm sin pasar por /reservation
    return (
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold">No hay datos de reserva</h1>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/reservar")}
        >
          Volver a reservar
        </button>
      </div>
    );
  }

  const { people, day, time, notes } = formData;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Confirmá tu reserva</h1>

      <div className="border p-4 rounded">
        <p>
          <strong>Personas:</strong> {people}
        </p>
        <p>
          <strong>Día:</strong> {day}
        </p>
        <p>
          <strong>Horario:</strong> {time}
        </p>
        <p>
          <strong>Notas:</strong> {notes || "Ninguna"}
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          className="bg-green-600 text-white px-6 py-2 rounded"
          onClick={() => alert("Reserva confirmada (simulado)")}
        >
          Confirmar
        </button>

        <button
          className="bg-gray-400 text-white px-6 py-2 rounded"
          onClick={() => navigate("/reservar")}
        >
          Editar
        </button>
      </div>
    </div>
  );
}

// Este componente es la página de confirmación de reserva.
// Muestra un formulario para que el usuario pueda ingresar su nombre y teléfono,
// así como un resumen de la reserva.
