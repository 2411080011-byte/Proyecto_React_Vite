import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center h-screen px-6 md:px-25 bg-black/10 relative overflow-hidden"
    >
      {/* Texto a la izquierda */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col justify-center items-center text-center md:text-left"
      >
        <div className="max-w-md md:max-w-lg">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white">
            Hola, soy <span className="text-orange-600">Jesús</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
            Estudiante del IV ciclo de la carrera de Ingeniería de Sistemas. Actualmente, me interesa mucho el mundo de la programación y la tecnología, pero sobre todo el área de Ciberseguridad, tanto de la información como de las redes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-2 bg-orange-700 hover:bg-orange-600 text-white rounded-lg transition-all duration-300 text-center"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-orange-600 hover:bg-orange-600 hover:text-white rounded-lg transition-all duration-300 text-center text-white"
            >
              Contacto
            </a>
          </div>
        </div>
      </motion.div>

      {/* Imagen a la derecha */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="imagen flex-1 flex justify-center items-center mt-8 md:mt-0 relative"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-full animate-pulse"></div>
          <img
            src="/Proyecto_React_Vite/mi_foto.avif"
            alt="Jesús"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full border-4 border-orange-600 shadow-[0_0_35px_rgba(249,115,22,0.4)] object-cover relative z-10"
          />
        </div>
      </motion.div>
    </section>
  );
}
