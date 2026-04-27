import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: 'localhost',
    port: 8200,
    strictPort: true,
  },
  preview: {
    host: 'localhost',
    port: 8200,
    strictPort: true,
  },
});
