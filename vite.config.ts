import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {},
  build: {
    outDir: "dist", // Ensure this is correct
  },
});
