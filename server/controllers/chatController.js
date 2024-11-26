import { generateChatResponse } from "../services/groqService.js";

export async function handleChatRequest(req, res) {
  try {
    const { message } = req.body;
    const response = await generateChatResponse([{ role: "user", content: message }]);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
