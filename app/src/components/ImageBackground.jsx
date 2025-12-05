export default function ImageBackground() {
  return (
    <div
      className="
        fixed top-0 left-0 w-full h-screen 
        bg-cover bg-center bg-no-repeat 
        brightness-50 contrast-115
        fondo_pagina
      "
      style={{
        backgroundImage: "url('/Proyecto_React_Vite/imagen.avif')",
      }}
    ></div>
  );
}
