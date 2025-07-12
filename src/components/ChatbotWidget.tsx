import { useState } from "react";
import { Button } from "./ui/button";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-xl p-4 mb-2">
          <div className="text-lg font-semibold mb-2">Chatbot</div>
          <div className="text-sm text-gray-500">Coming soon...</div>
        </div>
      )}
      <Button
        className="rounded-full h-12 w-12 p-0 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </Button>
    </div>
  );
}
