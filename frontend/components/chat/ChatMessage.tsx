"use client";

import Image from "next/image";
import { Message } from "@/types/chat";
import { User, Construction } from "lucide-react";
import BrandLogo from "@/public/Logos/ella-man-logo.png";
import ContactMethods from "./ContactMethods";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === "assistant";
  const isDevelopment = message.variant === "development";

  return (
    <div
      className={`flex w-full mb-2.5 ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`flex max-w-[94%] ${
          isAssistant ? "flex-row" : "flex-row-reverse"
        } gap-1.5`}
      >
        <div
          className={`flex-shrink-0 flex items-center justify-center overflow-hidden ${
            isAssistant
              ? "h-6 w-6 rounded-md bg-white border border-purple-100"
              : "h-6 w-6 rounded-full bg-purple-800 text-white"
          }`}
        >
          {isAssistant ? (
            <Image
              src={BrandLogo}
              alt="Ella Man"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
          ) : (
            <User size={12} />
          )}
        </div>

        <div
          className={`text-xs leading-relaxed ${
            isAssistant
              ? "rounded-xl rounded-tl-sm bg-white border border-purple-100 text-slate-700 shadow-sm"
              : "rounded-xl rounded-tr-sm bg-purple-800 text-white px-3 py-2"
          } ${isDevelopment ? "p-0 overflow-hidden min-w-0" : "px-3 py-2"}`}
        >
          {isDevelopment ? (
            <div>
              <div className="flex items-center gap-1.5 bg-amber-50 border-b border-amber-100 px-2.5 py-1.5">
                <Construction size={12} className="text-amber-600 shrink-0" />
                <p className="text-[9px] font-bold uppercase tracking-wider text-amber-700">
                  Under Development
                </p>
              </div>
              <div className="px-2.5 py-2 space-y-2">
                <p className="text-[11px] text-slate-600 leading-snug">
                  {message.content}
                </p>
                <ContactMethods variant="compact" />
              </div>
            </div>
          ) : (
            <p>{message.content}</p>
          )}
        </div>
      </div>
    </div>
  );
}
