import { NextResponse } from "next/server";
import { getGeminiResponse } from "@/lib/ai/gemini";

/**
 * Chat API Route (Gemini Version)
 * 
 * Handles POST requests from the frontend chatbot.
 * Integrated with Google Gemini for high-speed assistance.
 */

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.GOOGLE_GEMINI_API_KEY) {
      console.error("CRITICAL: Gemini API Key is missing (check OPENAI_API_KEY env)");
      return NextResponse.json(
        { error: "Gemini API Key is missing. Please check your .env.local file." },
        { status: 500 }
      );
    }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request: messages must be an array" },
        { status: 400 }
      );
    }

    const aiResponse = await getGeminiResponse(messages);

    return NextResponse.json({ role: "assistant", content: aiResponse });
  } catch (error: any) {
    console.error("Chat API Route Error Details:");
    console.error("Status:", error?.status);
    console.error("Message:", error?.message);
    console.error("Full Error:", error);
    
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: error?.status || 500 }
    );
  }
}
