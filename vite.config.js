import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // if not, add this inside defineConfig()
  plugins: [react()],
})
