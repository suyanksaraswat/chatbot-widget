(function () {
  // Inject CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://chatbot-widget-rose.vercel.app/chatbot-widget.css";
  document.head.appendChild(link);

  // Inject JS
  const script = document.createElement("script");
  script.src = "https://chatbot-widget-rose.vercel.app/chatbot-widget.iife.js";
  script.async = true;
  document.body.appendChild(script);
})();
