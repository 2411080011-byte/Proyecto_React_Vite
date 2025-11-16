import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center h-screen px-15"
    >
      {/* Texto a la izquierda */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col justify-center items-center text-center"
      >
        <div className="max-w-md">
          <h2 className="text-5xl font-extrabold mb-4 text-white">
            Hola, soy <span className="text-orange-600 ">Jesús</span>
          </h2>
          <p className="text-gray-300 mb-8">
            estudiante del IV ciclo de la carrera de Ingeniería de Sistemas.
            Actualmente, me interesa mucho el mundo de la programación y la tecnología, pero sobre todo el área de Ciberseguridad, tanto de la información como de las redes.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-2 bg-orange-700 hover:bg-orange-600 text-white
 rounded-lg transition"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border hover:bg-orange-600 hover:text-white rounded-lg transition text-white"
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
        className="flex-1 flex justify-center items-center mt-10 md:mt-0 imagen-derecha"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-full animate-pulse"></div>
          <img
            src="/Proyecto_React_Vite/mi_foto.avif"
            alt="Jesús"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-orange-600 shadow-[0_0_35px_rgba(249,115,22,0.4)]
object-cover relative z-10"
          />
        </div>
      </motion.div>
    </section>
  );
}
