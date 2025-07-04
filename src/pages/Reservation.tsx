import { useNavigate } from "react-router-dom";
import { useReservation } from "../hooks/useReservation";
import Button from "../components/Button";
import Select from "../components/Select";

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

  const { people, day, time, notes, setReservation } = useReservation();

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReservation({ [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Guardar datos y redirigir
    navigate("/confirmar");
  };

  return (
    <section className="min-h-screen h-screen flex flex-col bg-gray-200 text-black px-6 py-4 sm:px-8 sm:py-6 gap-6">
      <h2 className="text-2xl font-bold text-center mb-6 font-playfair">Reservar mesa</h2>

      <form className="flex flex-col justify-between flex-1 shadow-lg p-6 sm:p-10" onSubmit={handleSubmit}>
        {/* Cantidad de personas */}
        <hr />
        <div>
          <Select
            label="Cantidad de personas"
            name="people"
            value={people}
            onChange={handleChange}
            className="font-playfair"
            required
          >
            <option value="">Seleccionar</option>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1 === 1 ? "1 persona" : `${i + 1} personas`}
              </option>
            ))}
          </Select>
        </div>
        <hr />
        {/* Día de la semana */}
        <div>
          <Select
            label="Día"
            name="day"
            value={day}
            onChange={handleChange}
            className="font-playfair"
            required
          >
            <option value="">Seleccionar</option>
            <option value="miércoles">Miércoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
            <option value="sábado">Sábado</option>
          </Select>
        </div>
        <hr />
        {/* Horario */}
        <div>
          <Select
            label="Horario"
            name="time"
            value={time}
            onChange={handleChange}
            className="font-playfair"
            required
          >
            <option value="">Seleccionar hora</option>
            {generateTimeOptions().map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Select>
        </div>
        <hr />
        {/* Observaciones */}
        <div>
          <label htmlFor="notes" className="block mb-2 text-sm">
            Observaciones
          </label>
          <textarea
            name="notes"
            value={notes}
            onChange={handleChange}
            className="w-full p-3 rounded text-black resize-none"
            rows={4}
            placeholder="Aclaraciones, alergias, etc."
          />
        </div>
        <hr />
        <div className="flex justify-center">
          <Button type="submit" className="w-full max-w-xs py-3 font-semibold">
            Confirmar
          </Button>
        </div>
      </form>
    </section>
  );
}

// Este componente es la página de reservas.
// Muestra un formulario para que el usuario pueda seleccionar la fecha, hora y número de personas para su reserva.
