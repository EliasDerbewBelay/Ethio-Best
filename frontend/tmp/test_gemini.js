const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../.env.local") });

async function listModels() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("API Key missing");
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    // Actually, listing models requires a specific client or the general SDK
    // But we can just try 'gemini-1.5-flash' vs 'gemini-1.5-flash-latest'
    console.log("Checking gemini-1.5-flash...");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Hi");
    console.log("Success with gemini-1.5-flash!");
  } catch (err) {
    console.error("Failed with gemini-1.5-flash:", err.message);
    
    try {
      console.log("Checking gemini-pro...");
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent("Hi");
      console.log("Success with gemini-pro!");
    } catch (err2) {
      console.error("Failed with gemini-pro:", err2.message);
    }
  }
}

listModels();
