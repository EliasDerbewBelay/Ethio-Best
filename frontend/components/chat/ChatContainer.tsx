"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Message } from "@/types/chat";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import ChatButton from "./ChatButton";

/**
 * Chat Container (Stateful Component)
 * 
 * Manages the message history and interaction with the /api/chat endpoint.
 */

export default function ChatContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = useCallback(async (content: string) => {
    // 1. Add User Message to UI
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // 2. Call our Next.js API route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: [...messages, userMessage].map(({ role, content }) => ({ role, content })) 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error || "Failed to get response from server";
        
        setMessages((prev) => [...prev, {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `⚠️ Error: ${errorMessage}. Please check your API key or model access.`,
          createdAt: new Date(),
        }]);
        setIsLoading(false);
        return;
      }

      const data = await response.json();

      // 3. Add AI Response and stop loading
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.content,
        createdAt: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, {
        id: crypto.randomUUID(),
        role: "assistant",
        content: `❌ Connection Error: ${error.message || "Something went wrong"}.`,
        createdAt: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-[9999] w-[calc(100vw-3rem)] sm:w-[420px] h-[600px] max-h-[calc(100vh-10rem)] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-slate-100 ring-4 ring-black/5"
          >
            {/* Header */}
            <div className="bg-purple-700 p-6 flex items-center gap-4">
               <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-purple-200">
                  <span className="text-xl">🤖</span>
               </div>
               <div className="flex-1">
                  <h3 className="text-white font-black uppercase tracking-widest text-sm leading-tight">Ethio Best AI</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-purple-100/60 text-[10px] font-bold uppercase tracking-widest">Active Assistant</span>
                  </div>
               </div>
            </div>

            {/* Content & Input */}
            <ChatWindow messages={messages} isLoading={isLoading} />
            <ChatInput onSend={handleSend} isLoading={isLoading} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
