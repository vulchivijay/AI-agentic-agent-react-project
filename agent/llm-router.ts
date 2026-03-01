import axios from "axios";

export async function queryLLM(prompt: string) {
  console.log("Using provider:", process.env.LLM_PROVIDER);

  if (process.env.LLM_PROVIDER !== "ollama") {
    throw new Error("LLM_PROVIDER must be 'ollama'");
  }

  try {
    const res = await axios.post("http://localhost:11434/api/generate", {
      model: process.env.OLLAMA_MODEL || "llava:latest",
      prompt,
      stream: false
    });

    console.log("Ollama response received");
    return res.data.response;

  } catch (err: any) {
    console.error("Ollama request failed:");
    console.error(err.response?.data || err.message);
    throw err;
  }
}