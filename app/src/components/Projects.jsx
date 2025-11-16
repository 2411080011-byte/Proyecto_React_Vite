import { motion } from "framer-motion";

const projects = [
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
  return (
    <section id="projects" className="py-25">
      <h2 className="text-3xl font-bold text-center mb-12 text-teal-400 py-10">
        Proyectos
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-black/50 rounded-xl overflow-hidden shadow-lg border border-gray-700"
          >
            <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
