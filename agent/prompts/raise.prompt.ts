import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

export async function raisePR(branch: string) {
  await octokit.pulls.create({
    owner: "your-username",
    repo: "your-repo",
    title: "Auto Generated Page",
    head: branch,
    base: "main",
    body: "Generated via Agentic Pipeline"
  });
}