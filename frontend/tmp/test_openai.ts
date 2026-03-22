import OpenAI from "openai";
import * as dotenv from "dotenv";
import * as path from "path";

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

async function testOpenAI() {
  const apiKey = process.env.OPENAI_API_KEY;
  console.log("Testing API Key:", apiKey?.substring(0, 10) + "...");

  if (!apiKey) {
    console.error("Error: OPENAI_API_KEY is not defined in .env.local");
    return;
  }

  const openai = new OpenAI({ apiKey });

  try {
    console.log("Attempting a simple chat completion with gpt-3.5-turbo...");
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello, this is a test." }],
      max_tokens: 5,
    });

    console.log("Success! Response:", response.choices[0].message.content);
  } catch (error: any) {
    console.error("OpenAI API Error:");
    console.error("Status:", error.status);
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Type:", error.type);
  }
}

testOpenAI();
