"use client";

import { useEffect, useRef } from "react";
import { Message } from "@/types/chat";
import ChatMessage from "./ChatMessage";

/**
 * Chat Message Window
 * 
 * Manages the scrolling message list and the typing indicator.
 * Auto-scrolls to the bottom whenever a new message arrives.
 */

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
}

export default function ChatWindow({ messages, isLoading }: ChatWindowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic happens every time the messages array changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div 
      ref={scrollRef}
      className="flex-1 overflow-y-auto p-4 scroll-smooth scrollbar-thin scrollbar-thumb-slate-200"
    >
      {/* Welcome Message if no chat yet */}
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full opacity-60 text-center px-8">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-3xl flex items-center justify-center mb-4">
             <span className="text-2xl">👋</span>
          </div>
          <p className="text-slate-900 font-bold mb-1">How can I help you today?</p>
          <p className="text-slate-500 text-xs">Ask me anything about Ethio Best properties or Addis Ababa real estate.</p>
        </div>
      )}

      {/* Render Message List */}
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}

      {/* Typing Indicator */}
      {isLoading && (
        <div className="flex items-center gap-2 mb-4 animate-in fade-in duration-500">
           <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0">
             <span className="text-[10px] animate-pulse">●●●</span>
           </div>
           <div className="bg-slate-100 px-4 py-2 rounded-2xl rounded-tl-none">
              <span className="text-slate-400 text-xs font-medium">Assistant is thinking...</span>
           </div>
        </div>
      )}
    </div>
  );
}
