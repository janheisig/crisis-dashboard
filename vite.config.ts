import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// A relative base makes the build work on any GitHub Pages path
// (https://<user>.github.io/<repo>/) without hard-coding the repository name.
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          pdf: ['jspdf', 'jspdf-autotable'],
          geo: ['d3-geo', 'd3-zoom', 'd3-selection', 'd3-transition', 'topojson-client'],
        },
      },
    },
  },
});
