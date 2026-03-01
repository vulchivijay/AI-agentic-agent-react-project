import { AgentState } from "../state";
import { Octokit } from "@octokit/rest";
import { execSync } from "child_process";

export async function raisePrNode(
  state: AgentState
): Promise<AgentState> {
  console.log("🚀 Running PR Agent...");

  if (!process.env.GITHUB_TOKEN) {
    console.log("⚠ Skipping PR — no GitHub token");
    return state;
  }

  const branch = `ai/generated-page-${Date.now()}`;

  execSync(`git checkout -b ${branch}`);
  execSync("git add .");
  execSync(`git commit -m "AI Generated Page"`);
  execSync(`git push origin ${branch}`);

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });

  const pr = await octokit.pulls.create({
    owner: "your-username",
    repo: "your-repo",
    title: "AI Generated Page",
    head: branch,
    base: "main",
    body: "Generated via Agentic Pipeline"
  });

  return {
    ...state,
    prUrl: pr.data.html_url
  };
}