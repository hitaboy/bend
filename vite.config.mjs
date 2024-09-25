import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const production = !process.env.ROLLUP_WATCH;

export default defineConfig({
  plugins: [svelte({
    // Enable hydratable
    compilerOptions: {
      // dev: !production,
      // hydratable: true, // <-- Add this option
    }
  })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles.scss";`, // Automatically imports the SCSS file in each component
      },
    },
  },
  build: {
    outDir: './dist',  // Output directory for production build
    rollupOptions: {
      input: './src/main.js',  // Your main entry point
      output: {
        entryFileNames: '[name].js',  // No hash for JS
        chunkFileNames: '[name].js',  // No hash for chunks
        assetFileNames: '[name][extname]',  // No hash for CSS and other assets
      }
    },
  },
});
