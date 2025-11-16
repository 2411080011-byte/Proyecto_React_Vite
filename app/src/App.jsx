import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import VideoBackground from "./components/VideoBackground";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-gray-100 font-sans overflow-hidden">
      <VideoBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
