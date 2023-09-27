import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  alias: {
    "@": resolve(__dirname, "src"),
  },
  plugins: [vueJsx()],
  build: {
    rollupOptions: {
      external: [
        "react", // ignore react stuff
        "react-dom",
      ],
    },
  },
  optimizeDeps: {
    include: ["@apollo/client/core", "@apollo/client/link/error"],
  },
});