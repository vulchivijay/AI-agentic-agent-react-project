import axios from "axios";

export async function queryOllama(prompt: string) {
  const response = await axios.post("http://localhost:11434/api/generate", {
    model: "llava", // supports image
    prompt,
    stream: false
  });

  return response.data.response;
}