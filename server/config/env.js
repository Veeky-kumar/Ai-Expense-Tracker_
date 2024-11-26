import dotenv from "dotenv";

dotenv.config();

export const env = {
  groqApiKey: process.env.GROQ_API_KEY,
};
