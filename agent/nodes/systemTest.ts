import { AgentState } from "../state";
import { queryLLM } from "../llm-router";
import fs from "fs";
import path from "path";

export async function systemTestNode(
  state: AgentState
): Promise<AgentState> {
  console.log("🌐 Running System Test Agent...");

  const prompt = `
Write Playwright end-to-end tests for this page:

${state.generatedCode}

Include:
- Page load
- Navigation
- Button clicks
- Form interactions
`;

  const systemTests = await queryLLM(prompt);

  const testPath = path.resolve("e2e/generated.spec.ts");

  fs.mkdirSync("e2e", { recursive: true });
  fs.writeFileSync(testPath, systemTests);

  return {
    ...state,
    systemTests
  };
}