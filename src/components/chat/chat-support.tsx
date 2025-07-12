"use client";

import { useEffect, useRef, useState } from "react";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "./chat-bubble";
import { ChatInput } from "./chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "./expandable-chat";
import { ChatMessageList } from "./chat-message-list";
import { Button } from "../ui/button";
import { Dot, Send } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeDisplayBlock from "./code-display-block";
import { ProductGrid } from "./product-grid";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const messagesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const addDummyResponse = () => {
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "This is a dummy AI response. 🤖 Ask me anything!",
        },
      ]);
      setIsGenerating(false);
    }, 1000); // simulate delay
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    setIsGenerating(true);
    addDummyResponse();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (isGenerating || !input.trim()) return;
      onSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <ExpandableChat size="md" position="bottom-right">
      <ExpandableChatHeader className="bg-muted/60 flex-col justify-center">
        <div className="flex items-center justify-between gap-1">
          <h1 className="text-xl font-semibold">Frido AI</h1>
          <div className="flex items-center">
            <Dot className="text-green-600" />
            <p className="text-xs">Online</p>
          </div>
        </div>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ChatMessageList className="bg-muted/25" ref={messagesRef}>
          {/* Initial message */}
          <ChatBubble variant="received">
            <ChatBubbleAvatar src="" fallback="🤖" />
            <ChatBubbleMessage>
              Hello! I'm the AI assistant. How can I help you today?
            </ChatBubbleMessage>
          </ChatBubble>

          {/* Chat history */}
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              variant={message.role === "user" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                src=""
                fallback={message.role === "user" ? "👨🏽" : "🤖"}
              />
              <ChatBubbleMessage
                variant={message.role === "user" ? "sent" : "received"}
              >
                {message.content.split("```").map((part, idx) =>
                  idx % 2 === 0 ? (
                    <Markdown key={idx} remarkPlugins={[remarkGfm]}>
                      {part}
                    </Markdown>
                  ) : (
                    <pre className="pt-2" key={idx}>
                      <CodeDisplayBlock code={part} />
                    </pre>
                  )
                )}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}

          <ProductGrid />

          {/* Loading state */}
          {isGenerating && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar src="" fallback="🤖" />
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter className="bg-muted/25">
        <form ref={formRef} className="flex relative gap-2" onSubmit={onSubmit}>
          <ChatInput
            value={input}
            onChange={handleInputChange}
            onKeyDown={onKeyDown}
            className="min-h-12 bg-background shadow-none"
          />
          <Button
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
            type="submit"
            size="icon"
            disabled={isGenerating || !input.trim()}
          >
            <Send className="size-4" />
          </Button>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}
