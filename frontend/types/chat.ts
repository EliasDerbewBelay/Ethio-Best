/**
 * AI Chatbot Type Definitions
 * 
 * Strict typing for message flow and component state.
 */

export type ChatRole = "system" | "user" | "assistant";

export interface Message {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  isOpen: boolean;
}
