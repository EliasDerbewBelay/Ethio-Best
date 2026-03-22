"use client";

import { Send, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

/**
 * Chat Input Component
 * 
 * Handles multi-line text input with auto-resize. 
 * Prevents empty submissions and shows a loading state while AI is thinking.
 */

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Auto-resize textarea logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(scrollHeight, 120)}px`;
    }
  }, [input]);

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-4 bg-white border-t border-slate-100 flex items-end gap-2"
    >
      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={isLoading}
          className="w-full p-3 pr-10 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none disabled:opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={!input.trim() || isLoading}
        className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
          input.trim() && !isLoading 
            ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20 hover:scale-110 active:scale-95" 
            : "bg-slate-100 text-slate-400"
        }`}
      >
        {isLoading ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <Send size={18} />
        )}
      </button>
    </form>
  );
}
