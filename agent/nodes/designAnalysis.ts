import { AgentState } from "../state";
import { queryLLM } from "../llm-router";
import fs from "fs";
import path from "path";

export async function designAnalysisNode(
  state: AgentState
): Promise<AgentState> {
  console.log("🔍 Running Design Analysis Agent...");

  const prompt = `
You are a Senior UI Architect.
Analyze this design image path: ${state.designImagePath}

Return structured JSON:
{
  pageName: "",
  layout: "",
  sections: [],
  bootstrapMapping: [],
  componentsRequired: [],
  responsiveRules: [],
  accessibilityRequirements: []
}
`;

  const result = await queryLLM(prompt);

  const outputPath = path.resolve("agent-output/design-analysis.json");
  fs.mkdirSync("agent-output", { recursive: true });
  fs.writeFileSync(outputPath, result);

  return {
    ...state,
    designAnalysis: result
  };
}