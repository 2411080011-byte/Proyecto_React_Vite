import { motion } from "framer-motion";

const skills = [
  { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg", level: 20 },
  { name: "TailwindCSS", img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", level: 40 },
  { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", level: 85 },
  { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", level: 85 },
  { name: "JavaScript", img: "/Proyecto_React_Vite/logo_js.avif", level: 40 },
  { name: "Android Studio", img: "/Proyecto_React_Vite/android_estudio.avif", level: 40 },
  { name: "Git", img: "https://w7.pngwing.com/pngs/171/622/png-transparent-git-thumbnail.png", level: 50 },
  { name: "Java", img: "/Proyecto_React_Vite/logo_java.avif", level: 75 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-black/10 backdrop-blur-sm relative overflow-hidden px-4"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 md:mb-16 text-gradient bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
        Habilidades
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 90, damping: 12 }}
            className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-black/40 border border-orange-400/30 shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_30px_rgba(255,140,0,0.6)] transition-all duration-400 ease-out relative overflow-hidden w-full"
          >
            <div className="w-20 sm:w-24 h-20 sm:h-24 mb-3 relative">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,140,0,0.7)]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-400/20 to-orange-600/20 opacity-0 pointer-events-none" />
            </div>

            <p className="text-gray-200 font-semibold text-sm sm:text-base mt-1">{skill.name}</p>

            {/* Barra de porcentaje naranja */}
            <div className="w-full bg-black/20 h-2 rounded-full mt-2 overflow-hidden relative">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }}
              />
              <div className="absolute top-0 left-0 h-2 w-full rounded-full bg-orange-400/30 blur-xl opacity-50 pointer-events-none" />
            </div>
            <p className="text-gray-200 text-xs sm:text-sm mt-1">{skill.level}%</p>
          </motion.div>
        ))}
      </div>

      {/* Partículas futuristas naranjas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400/50"
            animate={{
              x: [0, 200, -200, 0],
              y: [0, -50, 50, 0],
              opacity: [0.2, 0.8, 0.2, 0.2],
            }}
            transition={{
              duration: 12 + Math.random() * 5,
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
    </section>
  );
}
