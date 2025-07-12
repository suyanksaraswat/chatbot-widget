import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "ChatbotWidget",
      fileName: "chatbot-widget",
      formats: ["iife"], // For <script>
    },
    rollupOptions: {
      // DO NOT mark react/react-dom as external
      // This includes everything in the bundle
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
