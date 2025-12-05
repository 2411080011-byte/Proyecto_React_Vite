import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("hero");

  const links = [
    { href: "#hero", label: "Inicio" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-orange-500/20 header"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8 gap-2 md:gap-0">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white text-center md:text-left">
          <span className="text-orange-500">Jesús Miguel</span>{" "}
          <span className="text-white text-sm sm:text-base md:text-2xl">Arotinco Chumpitaz</span>
        </h1>

        <nav className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4 mt-2 md:mt-0 w-full md:w-auto">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActive(href.substring(1))}
              className={`px-3 py-2 rounded-full text-sm sm:text-base md:text-base font-medium transition-colors duration-300 border ${
                active === href.substring(1)
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-black/20 text-gray-300 border-orange-400/30 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}

          {/* Botón extra que lleva a otro enlace externo */}
          <a
            href="https://arotincoparcial.kesug.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-full text-sm sm:text-base md:text-base font-medium transition-colors duration-300 border bg-black/20 text-gray-300 border-orange-400/30 hover:bg-orange-500 hover:text-white"
          >
            Dashboard
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
