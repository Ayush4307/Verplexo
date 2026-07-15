import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        // Manual chunk splitting — keeps the initial bundle lean by separating
        // large vendor libraries into their own cacheable files.
        manualChunks: {
          'vendor-react':   ['react', 'react-dom'],
          'vendor-router':  ['react-router-dom'],
          'vendor-motion':  ['framer-motion'],
          'vendor-helmet':  ['react-helmet-async'],
          'vendor-lucide':  ['lucide-react'],
        },
      },
    },
  },
})
