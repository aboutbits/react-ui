/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/vitest.ts',
  },
})
