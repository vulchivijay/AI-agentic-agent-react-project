import { AgentState } from "../state";

export async function designTestNode(
  state: AgentState
): Promise<AgentState> {
  console.log("🖼 Running Design Test Agent...");

  // Placeholder — you can integrate pixelmatch here
  const diffScore = 0;

  return {
    ...state,
    designDiffScore: diffScore
  };
}