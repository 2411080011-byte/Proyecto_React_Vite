export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black/70 text-center">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Contáctame</h2>
      <p className="text-gray-300 mb-8 py-3">
        ¿Tienes un proyecto o idea en mente? Hablemos.
      </p>
      <a
        href="mailto:2411080011@undc.edu.pe"
        className="px-8 py-3 bg-orange-700 hover:bg-orange-600 text-white rounded-lg transition"
      >
        Enviar correo
      </a>
    </section>
  );
}
