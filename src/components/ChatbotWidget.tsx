// import { useState } from "react";
import ChatSupport from "./chat/chat-support";

export default function ChatbotWidget() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="fixed bottom-4 right-4 z-[9999]">
    //   {isOpen && (
    //     <div className="bg-white w-80 h-96 rounded-xl shadow-lg p-4 mb-2 border">
    //       <h2 className="font-semibold text-lg mb-2">Chatbot</h2>
    //       <p className="text-sm text-gray-500">Chat UI goes here...</p>
    //     </div>
    //   )}
    //   <button
    //     onClick={() => setIsOpen(!isOpen)}
    //     className="rounded-full bg-blue-600 text-white p-3 shadow-md hover:bg-blue-700 transition"
    //   >
    //     💬
    //   </button>
    // </div>

    <ChatSupport />
  );
}
