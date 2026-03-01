import { StateGraph } from "./core/graph";
import { AgentState } from "./state";
import {
  designAnalysisNode,
  codingNode,
  unitTestNode,
  systemTestNode,
  reviewNode,
  designTestNode,
  raisePrNode
} from "./nodes";

const graph = new StateGraph<AgentState>();

graph.addNode("design", designAnalysisNode);
graph.addNode("coding", codingNode);
graph.addNode("unit", unitTestNode);
graph.addNode("system", systemTestNode);
graph.addNode("review", reviewNode);
graph.addNode("designTest", designTestNode);
graph.addNode("pr", raisePrNode);

graph.setEntryPoint("design");

graph.addEdge("design", "coding");
graph.addEdge("coding", "unit");
graph.addEdge("coding", "system");
graph.addEdge("unit", "review");
graph.addEdge("system", "review");
graph.addEdge("review", "designTest");
graph.addEdge("designTest", "pr");

export const agentGraph = graph;