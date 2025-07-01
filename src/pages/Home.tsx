import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen h-screen flex flex-col p-4 gap-4 sm:p-6 sm:gap-6 overflow-hidden">
      <section className="h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Foto del bar"
          className="w-full h-full object-cover rounded-2xl"
        />
      </section>

      <section className="h-[40vh] overflow-y-auto bg-stone-500 text-white rounded-2xl px-2 py-4 sm:px-4 sm:py-6 flex flex-col justify-between">
        <div className="font-playfair text-4xl sm:text-5xl mb-2 text-black leading-8 tracking-tight sm:leading-10">
          <h1 className="">Nirvana Bar</h1>
          <p className="">Snack bar Nirvana
             Disfruta de una experiencia única en nuestro bar.
          </p>
        </div>
        <hr className="my-4" />
        <div className="flex flex-1">
          <div className="flex w-1/2 text-black">
            <p>
              Santiago del Estero 2686
            </p>
          </div>
          <div className="w-1/2 flex justify-end items-end">
            <Link
              to="/reservar"
              className="w-fit block bg-black text-white px-4 text-sm sm:py-4 rounded-full text-center"
            >
              Hacer una reserva
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
// Este componente es la página de inicio de la aplicación.
// Muestra una imagen del bar, un título y una breve descripción.
