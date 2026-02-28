// agentLoader.ts
// Utility for reading agent definitions from the agents folder

export async function readAgentDefinition(filename: string): Promise<string> {
  const agentsDir = path.resolve(__dirname, filename.startsWith('agent-') ? filename : `agent-${filename}`);
  try {
    const filePath = path.join(agentsDir);
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch (err) {
    return `Agent definition not found: ${filename}`;
  }
}
