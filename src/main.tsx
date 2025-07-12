import React from "react";
import ReactDOM from "react-dom/client";
import ChatbotWidget from "./components/ChatbotWidget";

// Inject Tailwind CDN dynamically
function loadTailwindCDN(callback: () => void) {
  // If already injected, just call back
  if (
    window.tailwind !== undefined ||
    document.querySelector('script[src*="cdn.tailwindcss.com"]')
  ) {
    callback();
    return;
  }

  const script = document.createElement("script");
  script.src = "https://cdn.tailwindcss.com";
  script.onload = () => callback();
  document.head.appendChild(script);
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
