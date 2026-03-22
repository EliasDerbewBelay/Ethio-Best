import { GoogleGenerativeAI } from "@google/generative-ai";
import { PROPERTIES } from "@/constants/property";

/**
 * Gemini AI Real Estate Assistant
 * 
 * We use the Google Generative AI SDK with gemini-1.5-flash for 
 * fast and accurate property assistance.
 */

// Initialize the Gemini client
// Note: We are using process.env.OPENAI_API_KEY as requested by the user 
// because their Gemini key is stored in that variable.
const genAI = new GoogleGenerativeAI(process.env.OPENAI_API_KEY || "");

const SYSTEM_PROMPT = `
You are the official AI assistant for "Ethio Best" REAL ESTATE, a premier property platform in Addis Ababa, Ethiopia.
Your goal is to help users find their dream homes, apartments, or commercial spaces.

### OUR LISTINGS:
Here are the current properties available in our system:
${PROPERTIES.map(p => `- ${p.title} in ${p.location}. ${p.beds} beds, ${p.baths} baths, ${p.sqft} sqft. Price: ${p.price} ETB/${p.priceType}. Description: ${p.description}`).join("\n")}

### YOUR BEHAVIOR:
1. Professional & Welcoming: Always be polite and helpful.
2. Local Expert: You know Addis Ababa neighborhoods (Bole, Kazanchis, Old Airport, etc.) well.
3. Proactive: If a user asks for a 3-bedroom house, suggest specific listings from the list above.
4. Call to Action: Encourage users to "Visit Virtually" or "Contact Agent" if they like a property.
5. Accurate: Only provide information based on the listing data provided. If you don't know something, offer to connect them with a human agent (+251 911 123 456).

### STYLE:
- Use a friendly but professional tone.
- Keep responses concise but informative.
- Use bullet points for property lists.
- Mention prices in ETB.
`;

export async function getGeminiResponse(messages: { role: string; content: string }[]) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-pro",
      systemInstruction: SYSTEM_PROMPT 
    });

    // Gemini expects 'user' and 'model' roles. We need to map 'assistant' to 'model'.
    const history = messages.slice(0, -1).map(m => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }]
    }));

    const lastMessage = messages[messages.length - 1];
    
    // Start chat with history
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(lastMessage.content);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    throw new Error(error.message || "Failed to get response from Gemini");
  }
}
