import { AgentState } from "../state";
import { queryLLM } from "../llm-router";
import fs from "fs";
import path from "path";

export async function codingNode(
  state: AgentState
): Promise<AgentState> {
  console.log("💻 Running Coding Agent...");

  const prompt = `
Generate a React + Vite + TypeScript page.

Requirements:
${state.designAnalysis}

Constraints:
- Use Bootstrap 5
- Use components from src/components
- Strict TypeScript
- No inline styles
- Functional components only
`;

  const code = await queryLLM(prompt);

  const pageName = "GeneratedPage.tsx";
  const pagePath = path.resolve(`src/pages/${pageName}`);

  fs.mkdirSync("src/pages", { recursive: true });
  fs.writeFileSync(pagePath, code);

  return {
    ...state,
    generatedCode: code
  };
}