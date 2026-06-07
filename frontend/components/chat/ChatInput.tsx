"use client";

import { Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

const SUGGESTIONS = ["Property in Bole", "Schedule viewing"];

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

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(scrollHeight, 72)}px`;
    }
  }, [input]);

  return (
    <div className="shrink-0 border-t border-purple-100 bg-white px-3 py-2 space-y-1.5">
      <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
        {SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            disabled={isLoading}
            onClick={() => onSend(suggestion)}
            className="shrink-0 rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-[10px] font-medium text-purple-800 transition-all hover:bg-yellow-50 hover:border-yellow-300 disabled:opacity-50 active:scale-95"
          >
            {suggestion}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-end gap-1.5">
        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={isLoading}
          className="flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          aria-label="Send message"
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all ${
            input.trim() && !isLoading
              ? "bg-yellow-400 text-purple-950 hover:bg-yellow-300 active:scale-95"
              : "bg-slate-100 text-slate-400"
          }`}
        >
          <Send size={14} />
        </button>
      </form>
    </div>
  );
}
