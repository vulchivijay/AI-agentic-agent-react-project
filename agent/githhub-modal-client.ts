export async function queryGitHubModel(prompt: string) {
  const response = await fetch("https://models.inference.ai.azure.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }]
    })
  });

  return response.json();
}