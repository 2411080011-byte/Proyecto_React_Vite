export default function ImageBackground() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover brightness-50"
      style={{
        backgroundImage:
          "url('/imagen.jpg')",
      }}
    ></div>
  );
}
