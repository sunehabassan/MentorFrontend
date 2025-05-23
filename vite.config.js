import { defineConfig } from 'vite'
// import { reactRouter } from "@react-router/dev/vite";
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  // reactRouter(),
  ],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    allowedHosts: ['trendify-frontend-22gf.onrender.com']

  }
})
