import{
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Hardcoded API key (not recommended for production)
const apiKey = "AIzaSyDE9NugM2-OKoz19hlLKOjCKoGKcM9vVhA";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const response=result.response;

    console.log(response.text()); // Adjust based on the library's response structure
    return response.text();
  } catch (error) {
    console.error("Error during API call:", error);
  }
}

export default run;
