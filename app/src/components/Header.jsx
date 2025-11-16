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
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="header fixed top-0 left-0 w-full z-30 bg-black/30 backdrop-blur-xl border-b border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-8 nav-header">
        {/* Logo elegante */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-wide text-white"
        > 
          <span className="text-orange-600 text-3xl">Jesús Miguel </span><span className="text-4xl">Arotinco Chumpitaz</span>
        </motion.h1>

        {/* Navegación con botones */}
        <nav className="flex gap-4">
          {links.map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              onClick={() => setActive(href.substring(1))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 text-white no-underline py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                active === href.substring(1)
                  ? "border-orange-700 bg-orange-700 hover:bg-orange-600 text-white"
                  : "border-gray-700 text-gray-300"
              }`}
            >
              {label}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
