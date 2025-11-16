import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      transition={{ duration: 0.8 }}
      className="bg-black/70 text-white py-10 px-6 relative z-20 "
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-orange-500/30 pt-6">

        {/* Enlaces de navegación */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="#hero"
            className="hover:text-orange-300 transition-colors duration-200 text-white no-underline"
          >
            Inicio
          </a>
          <a
            href="#skills"
            className="hover:text-orange-300 transition-colors duration-200 text-white no-underline"
          >
            Habilidades
          </a>
          <a
            href="#projects"
            className="hover:text-orange-300 transition-colors duration-200 text-white no-underline"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="hover:text-orange-300 transition-colors duration-200 text-white no-underline"
          >
            Contacto
          </a>
        </nav>

        {/* Iconos sociales */}
        <div className="flex gap-5 text-lg">
          <a
            href="https://github.com/2411080011-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arotinco-chumpitaz-jesus-miguel-341695332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:2411080011@undc.edu.pe"
            className="hover:text-orange-300 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center text-sm text-orange-200 mt-6 border-t border-orange-500/20 pt-4">
        © {new Date().getFullYear()} Jesús A. — Todos los derechos reservados.
      </div>
    </motion.footer>
  );
}
