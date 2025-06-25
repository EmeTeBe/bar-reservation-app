import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const generateTimeOptions = () => {
  const startHour = 20;
  const endHour = 23;
  const options = [];

  for (let hour = startHour; hour <= endHour; hour++) {
    for (const minute of [0, 30]) {
      if (hour === endHour && minute > 0) break;

      const hh = hour.toString().padStart(2, "0");
      const mm = minute.toString().padStart(2, "0");
      options.push(`${hh}:${mm}`);
    }
  }

  return options;
};

export default function Reservation() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    people: "",
    day: "",
    time: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Guardar datos y redirigir
    navigate("/confirmar", { state: formData });
  };

  return (
    <section className="min-h-screen bg-gray-200 text-black px-6 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Reservar mesa</h2>

      <form className="space-y-6 mt-32" onSubmit={handleSubmit}>
        {/* Cantidad de personas */}
        <div>
          <label htmlFor="people" className="block mb-2 text-sm">Cantidad de personas</label>
          <select
            name="people"
            value={formData.people}
            onChange={handleChange}
            className="p-3 rounded text-black text-3xl"
            required
          >
            <option value="">Seleccionar</option>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1 === 1 ? "1 persona" : `${i + 1} personas`}
              </option>
            ))}
          </select>
        </div>

        {/* Día de la semana */}
        <div>
          <label htmlFor="day" className="block mb-2 text-sm">Día</label>
          <select
            name="day"
            value={formData.day}
            onChange={handleChange}
            className="p-3 rounded text-black text-3xl"
            required
          >
            <option value="">Seleccionar</option>
            <option value="miércoles">Miércoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
            <option value="sábado">Sábado</option>
          </select>
        </div>

        {/* Horario */}
        <div>
          <label htmlFor="time" className="block mb-2 text-sm">Horario</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="p-3 rounded text-black text-3xl"
            required
          >
            <option value="">Seleccione un horario</option>
            {generateTimeOptions().map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* Observaciones */}
        <div>
          <label htmlFor="notes" className="block mb-2 text-sm">Observaciones</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-3 rounded text-black resize-none"
            rows={4}
            placeholder="Aclaraciones, alergias, etc."
          />
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-xs py-5 font-semibold"
          >
            Confirmar
          </Button>
        </div>
      </form>
    </section>
  );
}

// Este componente es la página de reservas.
// Muestra un formulario para que el usuario pueda seleccionar la fecha, hora y número de personas para su reserva.
