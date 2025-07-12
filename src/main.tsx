import React from "react";
import ReactDOM from "react-dom/client";
import ChatbotWidget from "./components/ChatbotWidget";
import "@/styles/globals.css";

// Inject Tailwind CDN dynamically
function loadTailwindCDN(callback: () => void) {
  // const script = document.createElement("script");
  // script.src = "https://cdn.tailwindcss.com";
  // script.onload = () => callback();
  // document.head.appendChild(script);
  callback();
}

// Inject the widget container if it doesn't exist
const containerId = "chatbot-widget-root";

function injectWidget() {
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    document.body.appendChild(container);
  }

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ChatbotWidget />
    </React.StrictMode>
  );
}

// 🧠 Load Tailwind, then render the widget
loadTailwindCDN(injectWidget);
