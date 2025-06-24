import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col p-6 gap-6">
      <div className="h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Foto del bar"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="flex-1 bg-stone-500 text-white rounded-2xl px-6 py-8 ">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Nirvana Bar 🍷</h1>
          <p className="text-gray-300">Santiago del Estero 2686</p>

          <Link
            to="/reservar"
            className="block bg-gray-900 text-white py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
          >
            Hacer una reserva
          </Link>
        </div>
      </div>
    </section>
  );
}
// Este componente es la página de inicio de la aplicación.
// Muestra una imagen del bar, un título y una breve descripción.
