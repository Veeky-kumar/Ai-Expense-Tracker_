import { generateChatResponse } from "../services/groqService.js";
export async function handleChatRequest(req, res) {
    try {
      const { message } = req.body;  
      // Ensure you send an array of messages to the API
      const response = await generateChatResponse([{ role: "user", content: message }]);
  
      res.json({ success: true, data: response });
    } catch (error) {
      console.error("Error in chat request:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  }
  