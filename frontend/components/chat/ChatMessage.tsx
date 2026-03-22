"use client";

import { Message } from "@/types/chat";
import { User, Bot } from "lucide-react";

/**
 * Chat Message Bubble
 * 
 * Styled for both AI (Assistant) and User messages.
 * We use the brand colors: Purple for AI, Dark/Slate for User.
 * Icons are provided via Lucide.
 */

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === "assistant";

  return (
    <div 
      className={`flex w-full mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      <div className={`flex max-w-[85%] ${isAssistant ? "flex-row" : "flex-row-reverse"} gap-3 px-2`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${
          isAssistant ? "bg-purple-600 text-white" : "bg-slate-200 text-slate-600"
        }`}>
          {isAssistant ? <Bot size={18} /> : <User size={18} />}
        </div>

        {/* Bubble */}
        <div className={`relative px-4 py-3 rounded-[1.25rem] shadow-sm text-sm leading-relaxed ${
          isAssistant 
            ? "bg-white text-slate-800 rounded-tl-none border border-slate-100" 
            : "bg-purple-700 text-white rounded-tr-none shadow-purple-200"
        }`}>
          {message.content}
          
          <div className={`mt-1 text-[10px] font-medium opacity-50 ${isAssistant ? "text-slate-400" : "text-purple-200"}`}>
            {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
}
