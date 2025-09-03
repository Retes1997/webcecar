import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173, // opcional
  },
  build: {
    outDir: "dist", // carpeta de salida
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
