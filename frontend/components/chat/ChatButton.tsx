"use client";

import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Floating Chat Button
 * 
 * Renders in the bottom-right corner.
 * Shows a message bubble when closed and an X when open.
 * Uses Framer Motion for a spring-y animation.
 */

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatButton({ isOpen, onClick }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-2xl shadow-purple-600/30 transition-all hover:scale-110 active:scale-90 border-2 border-white/20"
    >
      <AnimatePresence mode="wait">
        <motion.div
           key={isOpen ? "close" : "open"}
           initial={{ opacity: 0, rotate: -90 }}
           animate={{ opacity: 1, rotate: 0 }}
           exit={{ opacity: 0, rotate: 90 }}
           transition={{ duration: 0.2 }}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </motion.div>
      </AnimatePresence>
      
      {!isOpen && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white animate-pulse" />
      )}
    </button>
  );
}
