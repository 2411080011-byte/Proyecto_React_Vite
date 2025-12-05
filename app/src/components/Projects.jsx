import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Dashboard",
    img: "/Proyecto_React_Vite/dashboard.png",
    desc: "Diseño elegante y moderno para gestionar vendedores y clientes",
  },
  {
    title: "Portafolio 1.0",
    img: "/Proyecto_React_Vite/porta.png",
    desc: "Diseño de primer portafolio a base de HTML, CSS y JS",
  },
  {
    title: "Juego 'El Ahorcado'",
    img: "https://tse4.mm.bing.net/th/id/OIP.BuK9-m1AxQ9u6eUvBm0_7QHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Un juego muy divertido para fortalecer las habilidades cognitivas",
  },
  {
    title: "Sistema de registros de alumnos",
    img: "https://tse4.mm.bing.net/th/id/OIP.Oocs8QbzTk9geGloYGwIpwHaEA?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Visualización interactiva y filtros dinámicos",
  },
  {
    title: "App a escala para almacenar contactos",
    img: "/Proyecto_React_Vite/contacto.avif",
    desc: "Diseño elegante y moderno, con animaciones suaves.",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  // Animaciones de slide horizontal
  const variants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  return (
    <section id="projects" className="py-20 relative overflow-visible px-4 bg-black/10">
      {/* Título */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gradient bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
        Proyectos
      </h2>

      {/* Carrusel */}
      <div className="relative max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="rounded-3xl overflow-hidden border border-orange-400/30 shadow-[0_0_25px_rgba(255,159,67,0.2)] hover:shadow-[0_0_50px_rgba(255,159,67,0.5)] transition-shadow duration-500 bg-black/70 backdrop-blur-lg"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={projects[current].img}
                alt={projects[current].title}
                className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/10 to-orange-600/10 pointer-events-none" />
            </div>

            <div className="p-6 bg-black/30 rounded-b-3xl backdrop-blur-md">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white drop-shadow-lg">
                {projects[current].title}
              </h3>
              <p className="text-gray-200 sm:text-sm">{projects[current].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 p-8 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 shadow-[0_0_20px_rgba(255,159,67,0.5)] flex items-center justify-center"
          aria-label="Anterior proyecto"
        >
          <i className="fas fa-chevron-left text-white text-3xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 p-8 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 shadow-[0_0_20px_rgba(255,159,67,0.5)] flex items-center justify-center"
          aria-label="Siguiente proyecto"
        >
          <i className="fas fa-chevron-right text-white text-3xl" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-5">
          {projects.map((_, idx) => (
            <motion.div
              key={idx}
              className="w-3 h-3 rounded-full bg-orange-400/30"
              animate={{
                scale: current === idx ? 1.5 : 1,
                backgroundColor:
                  current === idx ? "rgba(255,159,67,0.7)" : "rgba(255,159,67,0.3)",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
