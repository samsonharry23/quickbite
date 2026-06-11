import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// base "/quickbite/" only for the production build (GitHub Pages project site).
// Local dev stays at "/" so the app loads at http://localhost:5173/
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/quickbite/" : "/",
  plugins: [react(), eslint()],
}));
