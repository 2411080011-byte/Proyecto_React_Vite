import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression' // ← nuevo

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression() // ← agrega esta línea
  ],
  base: '/Proyecto_React_Vite/' // Muy importante para GitHub Pages
})
