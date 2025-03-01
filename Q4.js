class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    // Add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
  
    // Add a directed edge from v to w
    addEdge(v, w) {
      if (!this.adjList.has(v)) {
        this.addVertex(v);
      }
      if (!this.adjList.has(w)) {
        this.addVertex(w);
      }
      this.adjList.get(v).push(w);
    }
  
    // Utility function for DFS traversal
    topologicalSortUtil(vertex, visited, stack) {
      visited.add(vertex);
  
      // Recur for all vertices adjacent to this vertex
      for (const neighbor of this.adjList.get(vertex)) {
        if (!visited.has(neighbor)) {
          this.topologicalSortUtil(neighbor, visited, stack);
        }
      }
  
      // Push current vertex to stack which stores the result
      stack.push(vertex);
    }
  
    // The function to do Topological Sort
    topologicalSort() {
      const stack = [];
      const visited = new Set();
  
      // Call the recursive helper function to store Topological Sort
      // starting from all vertices one by one
      for (const vertex of this.adjList.keys()) {
        if (!visited.has(vertex)) {
          this.topologicalSortUtil(vertex, visited, stack);
        }
      }
  
      // Print contents of the stack in reverse order
      while (stack.length) {
        console.log(stack.pop());
      }
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addEdge('A', 'C');
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'D');
  graph.addEdge('D', 'E');
  graph.addEdge('E', 'F');
  graph.addEdge('B', 'G');
  
  console.log("Topological Sorting of the graph:");
  graph.topologicalSort();
  