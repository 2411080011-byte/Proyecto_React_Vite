import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      transition={{ duration: 0.8 }}
      className="relative z-20 overflow-hidden py-12 px-6 text-white"
    >
      {/* Fondo con gradiente animado y blur */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-900 via-black/70 to-orange-700/40 pointer-events-none animate-pulse-slow blur-3xl"></div>

      {/* Partículas futuristas sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-orange-500/40"
            animate={{
              x: [0, 100 - Math.random() * 200, 0],
              y: [0, 50 - Math.random() * 100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "mirror",
              delay: Math.random() * 5,
            }}
            style={{
              top: Math.random() * window.innerHeight,
              left: Math.random() * window.innerWidth,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-orange-500/30 pt-6 z-10">
        {/* Enlaces de navegación */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
          {["#hero", "#skills", "#projects", "#contact"].map((link, idx) => {
            const names = ["Inicio", "Habilidades", "Proyectos", "Contacto"];
            return (
              <a
                key={idx}
                href={link}
                className="relative font-medium text-white no-underline hover:text-orange-400 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {names[idx]}
              </a>
            );
          })}
        </nav>

        {/* Iconos sociales con glow animado */}
        <div className="flex gap-6 text-2xl">
          {[{
            icon: <FaGithub />,
            link: "https://github.com/2411080011-byte"
          },{
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/arotinco-chumpitaz-jesus-miguel-341695332"
          },{
            icon: <FaEnvelope />,
            link: "mailto:2411080011@undc.edu.pe"
          }].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.3,
                textShadow: "0 0 15px #ff9f43, 0 0 25px #ff6b00, 0 0 35px #ff4500"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-white transition-all duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center text-sm sm:text-base text-orange-300 mt-8 border-t border-orange-500/20 pt-4 z-10 relative">
        © {new Date().getFullYear()} Jesús A. — Todos los derechos reservados.
      </div>
    </motion.footer>
  );
}
