import { motion } from "framer-motion";

const skills = [
  { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "TailwindCSS", img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
  { name: "Css", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
  { name: "Html", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { name: "Java Script", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "Android Studio", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/1200px-Android_Studio_icon_%282023%29.svg.png" },
  { name: "Git", img: "https://w7.pngwing.com/pngs/171/622/png-transparent-git-thumbnail.png" },
  { name: "Java", img: "https://tse4.mm.bing.net/th/id/OIP.Z-0qyUe5388oNSEwmjBAUAHaHa?cb=ucfimg2ucfimg=1&w=480&h=480&rs=1&pid=ImgDetMain&o=7&rm=3" },
];


export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/60 backdrop-blur-md">
      <h2 className="text-3xl font-bold text-center mb-12 text-teal-400 py-14">
        Habilidades
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-25 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-center"
          >
            <img src={skill.img} alt={skill.name} className="w-20 h-20 mb-3" />
            <p className="text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
