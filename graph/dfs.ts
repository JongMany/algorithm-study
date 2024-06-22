(()=>{
  // 인접 리스트를 활용
  const graph = {
    'A': ['B', 'D', 'E'],
    'B': ['A', 'C', 'D'],
    'C': ['B'],
    'D': ["A", "B"],
    'E': ['A']
  };

  interface Graph {
    [key: string]: string[]
  }

  function dfs(graph: Graph, currentVertex: string, visited: string[]=[]) {
    visited.push(currentVertex);
    const link = graph[currentVertex];
    for (const vertex of link) {
      if(!visited.includes(vertex)) {
        visited = dfs(graph, vertex, visited);
      }
    }
    return visited;
  }
  console.log(dfs(graph, 'A'))

  function solution() {
    const copied: Graph = graph;
    const visited: string[] = [];

    function dfs(currentVertex: string) {
      visited.push(currentVertex);
      const link = copied[currentVertex];
      for (const vertex of link) {
        if (!visited.includes(vertex)) {
          dfs(vertex)
        }
      }
    }
    dfs('A');
  }
  solution()
})();