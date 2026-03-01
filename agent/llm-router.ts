import axios from "axios";

export async function queryLLM(prompt: string) {
  const provider = process.env.LLM_PROVIDER;

  if (provider === "ollama") {
    const res = await axios.post("http://localhost:11434/api/generate", {
      model: process.env.OLLAMA_MODEL,
      prompt,
      stream: false
    });
    return res.data.response;
  }

  throw new Error("Unsupported provider");
}