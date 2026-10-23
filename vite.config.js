import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

const fromSrc = (dir) => fileURLToPath(new URL(`./src/${dir}`, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Keep the bare imports (components/..., contexts/..., assets/...) that
    // jsconfig.json's baseUrl allowed under Create React App.
    alias: {
      assets: fromSrc('assets'),
      components: fromSrc('components'),
      contexts: fromSrc('contexts')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Same output folder as Create React App, so existing deploy settings keep working.
    outDir: 'build'
  }
});
