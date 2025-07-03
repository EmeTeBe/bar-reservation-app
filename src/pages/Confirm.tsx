import { useNavigate } from "react-router-dom";
import { useReservation } from "../hooks/useReservation";
import { useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Confirm() {
  const navigate = useNavigate();
  // Obtenemos los datos de la reserva del contexto
  const { people, day, time, notes, name, phone, setReservation } =
    useReservation();

  useEffect(() => {
    // Si no hay datos de reserva, redirigimos al usuario a la página de reserva
    if (!people || !day || !time) {
      navigate("/reservar");
    }
  }, [people, day, time, navigate]);

  // Manejador de cambios para los inputs del formulario
  // Actualiza el estado de la reserva con los datos ingresados por el usuario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReservation({ [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación simple para asegurarnos de que el nombre y teléfono estén completos
    if (!name || !phone) {
      alert("Por favor, completa tu nombre y teléfono.");
      return;
    }
    // simular la confirmación de la reserva
    console.log("Reserva confirmada:", {
      people,
      day,
      time,
      notes,
      name,
      phone,
    });
    alert("Reserva confirmada (simulado)");
  };

  return (
    <div className="min-h-screen h-screen flex flex-col bg-gray-200 text-black px-6 py-4 sm:px-8 sm:py-6 gap-6">
      <h1 className="text-2xl font-bold text-center font-playfair">
        Confirmá tu reserva
      </h1>
      <section className="flex-1 flex flex-col justify-between rounded-lg shadow-lg p-6 sm:p-8">
        <div className="p-4 rounded text-2xl flex flex-col gap-4">
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
          <Input
            label="Nombre"
            value={name}
            name="name"
            onChange={handleChange}
            placeholder="Tu nombre"
            type="text"
            required
          />
          <Input
            label="Teléfono"
            value={phone}
            name="phone"
            onChange={handleChange}
            placeholder="Tu teléfono"
            type="number"
            required
          />

          <div className="flex justify-center gap-4 mt-6">
            <Button className="px-6 py-2" type="submit">
              Confirmar
            </Button>

            <Button
              className="bg-gray-400 px-6 py-2"
              onClick={() => navigate("/reservar")}
            >
              Editar
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}

// Este componente es la página de confirmación de reserva.
// Muestra un formulario para que el usuario pueda ingresar su nombre y teléfono,
// así como un resumen de la reserva.
