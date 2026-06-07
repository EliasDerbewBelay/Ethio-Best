"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Message } from "@/types/chat";
import { BRAND_SHORT_NAME } from "@/constants/brand";
import BrandLogo from "@/public/Logos/ella-man-logo.png";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import ChatButton from "./ChatButton";

const DEVELOPMENT_REPLY =
  "Our AI assistant is under development. Please reach our team using the contacts below — we're ready to help.";

export default function ChatContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = useCallback(async (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 700));

    const assistantMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: DEVELOPMENT_REPLY,
      createdAt: new Date(),
      variant: "development",
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  }, []);

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-black/25 sm:bg-transparent pointer-events-auto sm:pointer-events-none"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.aside
              role="dialog"
              aria-label="Ella Man Assistant"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ type: "spring", damping: 30, stiffness: 380 }}
              className="chat-panel fixed z-[9999] flex flex-col overflow-hidden rounded-2xl border border-purple-200/70 bg-white shadow-[0_8px_40px_rgba(88,28,135,0.18)]"
              style={{
                bottom:
                  "max(calc(var(--bottom-nav-height) + 4.25rem), calc(1rem + var(--safe-bottom)))",
                right: "max(0.75rem, var(--safe-right))",
              }}
            >
              {/* Compact header */}
              <div className="relative shrink-0 bg-gradient-to-r from-purple-950 to-purple-800 px-3 py-2.5">
                <div className="relative flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white shadow ring-1 ring-yellow-400/50">
                    <Image
                      src={BrandLogo}
                      alt={BRAND_SHORT_NAME}
                      width={28}
                      height={28}
                      className="h-6 w-6 object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-bold text-white leading-tight">
                      {BRAND_SHORT_NAME} Assistant
                    </h3>
                    <p className="text-[10px] text-purple-200/90">
                      Coming soon · Team available now
                    </p>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/90 transition-colors hover:bg-white/20"
                    aria-label="Close chat"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              <ChatWindow messages={messages} isLoading={isLoading} />
              <ChatInput onSend={handleSend} isLoading={isLoading} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
