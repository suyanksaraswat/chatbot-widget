import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
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
      formats: ["iife"], // embeddable <script>
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      external: ["react", "react-dom"], // avoid bundling React
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
