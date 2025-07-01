import { useNavigate } from "react-router-dom";
import { useReservation } from "../hooks/useReservation";

export default function Confirm() {
  const navigate = useNavigate();
  // Obtenemos los datos de la reserva del contexto
  const { people, day, time, notes } = useReservation();

  if (!people) {
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

  return (
    <div className="min-h-screen h-screen flex flex-col bg-gray-200 text-black px-6 py-4 sm:px-8 sm:py-6 gap-6">
      <h1 className="text-2xl font-bold text-center font-playfair">
        Confirmá tu reserva
      </h1>
      <section className="flex-1 flex flex-col justify-between rounded-lg shadow-lg p-6 sm:p-8">
        <div className="p-4 rounded text-2xl flex flex-col gap-8">
          <p className="font-playfair">
            <strong>Personas:</strong> {people}
          </p>
          <hr />
          <p className="font-playfair">
            <strong>Día:</strong> {day}
          </p>
          <hr />
          <p className="font-playfair">
            <strong>Horario:</strong> {time}
          </p>
          <hr />
          <p className="font-playfair">
            <strong>Notas:</strong> {notes || "Ninguna"}
          </p>
          <hr />
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            className="bg-black text-white px-6 py-2 rounded-full"
            onClick={() => alert("Reserva confirmada (simulado)")}
          >
            Confirmar
          </button>

          <button
            className="bg-gray-400 text-white px-6 py-2 rounded-full"
            onClick={() => navigate("/reservar")}
          >
            Editar
          </button>
        </div>
      </section>
    </div>
  );
}

// Este componente es la página de confirmación de reserva.
// Muestra un formulario para que el usuario pueda ingresar su nombre y teléfono,
// así como un resumen de la reserva.
