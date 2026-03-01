import { AgentState } from "../state";
import { queryLLM } from "../llm-router";
import fs from "fs";
import path from "path";

export async function unitTestNode(
  state: AgentState
): Promise<AgentState> {
  console.log("🧪 Running Unit Test Agent...");

  const prompt = `
Write Jest + React Testing Library tests for:

${state.generatedCode}

Requirements:
- Render test
- Props test
- Interaction test
- Coverage > 80%
`;

  const tests = await queryLLM(prompt);

  const testPath = path.resolve("src/tests/GeneratedPage.test.tsx");

  fs.mkdirSync("src/tests", { recursive: true });
  fs.writeFileSync(testPath, tests);

  return {
    ...state,
    unitTests: tests
  };
}