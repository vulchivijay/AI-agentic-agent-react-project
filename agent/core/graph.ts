export type NodeFunction<T> = (state: T) => Promise<T>;

export class StateGraph<T> {
  private nodes: Record<string, NodeFunction<T>> = {};
  private edges: Record<string, string[]> = {};
  private entryPoint!: string;

  addNode(name: string, fn: NodeFunction<T>) {
    this.nodes[name] = fn;
  }

  addEdge(from: string, to: string) {
    if (!this.edges[from]) {
      this.edges[from] = [];
    }
    this.edges[from].push(to);
  }

  setEntryPoint(name: string) {
    this.entryPoint = name;
  }

  async invoke(initialState: T): Promise<T> {
    let state = initialState;
    const visited = new Set<string>();

    const execute = async (nodeName: string) => {
      if (visited.has(nodeName)) return;
      visited.add(nodeName);

      const node = this.nodes[nodeName];
      if (!node) throw new Error(`Node ${nodeName} not found`);

      console.log(`Running node: ${nodeName}`);
      state = await node(state);

      const nextNodes = this.edges[nodeName] || [];
      for (const next of nextNodes) {
        await execute(next);
      }
    };

    await execute(this.entryPoint);

    return state;
  }
}