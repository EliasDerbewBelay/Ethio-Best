/**
 * AI Chatbot Type Definitions
 * 
 * Strict typing for message flow and component state.
 */

export type ChatRole = "system" | "user" | "assistant";

export type MessageVariant = "default" | "development";

export interface Message {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: Date;
  variant?: MessageVariant;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  isOpen: boolean;
}
