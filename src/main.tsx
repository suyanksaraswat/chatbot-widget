import React from "react";
import ReactDOM from "react-dom/client";
import ChatbotWidget from "./components/ChatbotWidget";

import "@/styles/globals.css";

const containerId = "chatbot-widget-root";

function mountWidget() {
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    document.body.appendChild(container);
  }

  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <ChatbotWidget />
    </React.StrictMode>
  );
}

mountWidget();
