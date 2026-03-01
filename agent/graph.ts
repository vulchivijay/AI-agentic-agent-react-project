import { StateGraph } from "langgraph";
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

const workflow = new StateGraph<AgentState>();

workflow.addNode("designAnalysis", designAnalysisNode);
workflow.addNode("coding", codingNode);
workflow.addNode("unitTest", unitTestNode);
workflow.addNode("systemTest", systemTestNode);
workflow.addNode("designTest", designTestNode);
workflow.addNode("review", reviewNode);
workflow.addNode("raisePR", raisePrNode);

workflow.setEntryPoint("designAnalysis");

workflow.addEdge("designAnalysis", "coding");

workflow.addEdge("coding", "unitTest");
workflow.addEdge("coding", "systemTest");

workflow.addEdge("unitTest", "review");
workflow.addEdge("systemTest", "review");

workflow.addEdge("review", "designTest");
workflow.addEdge("designTest", "raisePR");

export const agentGraph = workflow.compile();