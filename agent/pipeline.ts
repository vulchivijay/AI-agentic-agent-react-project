import { queryOllama } from "./ollama-client";
import { designAnalysisPrompt } from "./prompts/design-analysis.prompt";
import { codingPrompt } from "./prompts/coding.prompt";

async function runPipeline() {
  const analysis = await queryOllama(
    designAnalysisPrompt("/mnt/data/boostrap-product.png")
  );

  const pageCode = await queryOllama(
    codingPrompt(analysis)
  );

  console.log(pageCode);
}

runPipeline();