const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

async function testGemini() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Hello, test message");
    console.log("Success:", result.response.text());
  } catch (error) {
    console.error("Status Code:", error.status);
    console.error("Error Message:", error.message);
    console.error("Full Error:", error);
  }
}

testGemini();
