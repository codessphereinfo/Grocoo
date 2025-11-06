import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',          // client folder root
  build: {
    outDir: 'dist',   // build folder
    emptyOutDir: true
  }
})
