export async function queryLLM(prompt: string) {
  const provider = process.env.LLM_PROVIDER;

  switch (provider) {
    case "ollama":
      return queryOllama(prompt);

    case "github":
      return queryGitHubModel(prompt);

    default:
      throw new Error("Unsupported LLM provider");
  }
}