

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
// 큐를 활용함
  function bfs(graph: Graph, startVertex: string) {
    const visited = [startVertex]; // 방문 순서 기록
    // const visited = new Set(startVertex);
    const queue = [startVertex];

    while (queue.length > 0) {
      const currentVertex = queue.shift()!;
      const link = graph[currentVertex];
      for (const vertex of link) {
        if(!visited.includes(vertex)) {
          visited.push(vertex);
          queue.push(vertex);
        }
      }
    }
    return visited;
  }

  bfs(graph, 'A');
})();