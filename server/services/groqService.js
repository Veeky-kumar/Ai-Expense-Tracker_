import Groq from "groq-sdk";
import { env } from "../config/env.js";

const groq = new Groq({ apiKey: env.groqApiKey });

export async function generateChatResponse(messages, model = "llama3-8b-8192") {
  try {
    const completion = await groq.chat.completions.create({
      messages,
      model,
    });
    return completion.choices[0].message.content;
  } catch (error) {
    throw new Error(`Groq API Error: ${error.message}`);
  }
}
