export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-12 bg-black/70 backdrop-blur-lg text-center"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Contáctame
        </h2>
        <p className="text-gray-300 mb-8 text-sm sm:text-base">
          ¿Tienes un proyecto o idea en mente? Hablemos y hagámoslo realidad.
        </p>
        <a
          href="mailto:2411080011@undc.edu.pe"
          className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg shadow-[0_0_10px_rgba(255,159,67,0.3)] transition-all duration-300"
        >
          Enviar correo
        </a>
      </div>
    </section>
  );
}
