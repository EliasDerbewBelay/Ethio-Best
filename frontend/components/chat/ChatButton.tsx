"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/public/Logos/ella-man-logo.png";

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatButton({ isOpen, onClick }: ChatButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={isOpen ? "Close assistant" : "Open assistant"}
      aria-expanded={isOpen}
      whileTap={{ scale: 0.94 }}
      className={`fixed z-[9999] flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-800 text-white shadow-lg shadow-purple-900/25 border-2 border-yellow-400/25 transition-shadow hover:shadow-xl ${
        isOpen ? "h-11 w-11" : "h-12 w-12 sm:h-auto sm:w-auto sm:py-1 sm:pl-1 sm:pr-3 sm:gap-1.5"
      }`}
      style={{
        bottom:
          "max(calc(var(--bottom-nav-height) + 0.75rem), calc(0.75rem + var(--safe-bottom)))",
        right: "max(0.75rem, var(--safe-right))",
      }}
    >
      <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white overflow-hidden shrink-0">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.12 }}
              className="text-purple-900"
            >
              <X size={20} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.12 }}
            >
              <Image
                src={BrandLogo}
                alt="Ella Man Real Estate"
                width={32}
                height={32}
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isOpen && (
        <span className="hidden sm:block text-xs font-semibold pr-0.5">
          Help
        </span>
      )}

      {!isOpen && (
        <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-yellow-400 border-2 border-white" />
      )}
    </motion.button>
  );
}
