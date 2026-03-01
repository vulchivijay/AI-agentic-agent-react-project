import { agentGraph } from "./graph";

async function run() {
  const result = await agentGraph.invoke({
    designImagePath: "./../public/data/bootstrap-product.png",
    errors: []
  });

  console.log("Pipeline completed:");
  console.log(result);
}

run();