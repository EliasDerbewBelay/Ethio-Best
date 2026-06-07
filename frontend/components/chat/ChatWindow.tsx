"use client";

import { useEffect, useRef } from "react";
import { Message } from "@/types/chat";
import { Sparkles } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ContactMethods from "./ContactMethods";

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
}

export default function ChatWindow({ messages, isLoading }: ChatWindowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 min-h-0 overflow-y-auto scroll-smooth scrollbar-hide bg-slate-50/80"
    >
      {/* Compact welcome strip */}
      <div className="px-3 py-2.5 border-b border-purple-100/80 bg-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-700">
            <Sparkles size={9} />
            Under Development
          </span>
        </div>
        <p className="text-[11px] leading-snug text-slate-500 mb-2">
          AI assistant launching soon. Contact us directly in the meantime:
        </p>
        <ContactMethods variant="inline" />
      </div>

      {/* Messages */}
      <div className="px-3 py-2">
        {messages.length === 0 && !isLoading && (
          <p className="text-center text-[11px] text-slate-400 py-3">
            Send a message to get contact options
          </p>
        )}

        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 mb-2 animate-in fade-in duration-200">
            <div className="h-6 w-6 rounded-md bg-purple-100 animate-pulse" />
            <div className="rounded-xl rounded-tl-sm border border-purple-100 bg-white px-3 py-2">
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-purple-400 animate-bounce" />
                <span className="h-1 w-1 rounded-full bg-purple-400 animate-bounce [animation-delay:120ms]" />
                <span className="h-1 w-1 rounded-full bg-purple-400 animate-bounce [animation-delay:240ms]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
