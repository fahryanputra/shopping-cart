import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "/src/tests/setup.js",
  },
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
      styles: "/src/styles",
      hooks: "/src/hooks",
      utilities: "/src/utilities",
      tests: "/src/tests",
    },
  },
});
