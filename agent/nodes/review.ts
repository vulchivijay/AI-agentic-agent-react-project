import { AgentState } from "../state";
import { queryLLM } from "../llm-router";

export async function reviewNode(
  state: AgentState
): Promise<AgentState> {
  console.log("🔎 Running Code Review Agent...");

  const prompt = `
Review this React TypeScript code:

${state.generatedCode}

Check:
- Type safety
- Bootstrap usage
- Clean code
- Accessibility
- Follows copilot-instructions.md

Return JSON:
{
  issues: [],
  suggestions: [],
  refactoredCode: ""
}
`;

  const review = await queryLLM(prompt);

  return {
    ...state,
    reviewReport: review
  };
}