import { PriorityQueue } from "../priorityQueue";

type Graph<T> = {
  [key: string]: [T, number][]; // [node, weight][]
};

function dijkstra(graph: Graph<number>, start: number, end: number) {
  const costs = {} as { [key: string]: number };
  const pq = new PriorityQueue<number>(false);
  pq.enqueue([start, 0]);

  while (!pq.isEmpty()) {
    const [node, curCost] = pq.dequeue()!;
    if (costs[node] === undefined) {
      costs[node] = curCost;
      for (const [nextNode, nextCost] of graph[node]) {
        const newCost = curCost + nextCost;
        if (costs[nextNode] === undefined || costs[nextNode] > newCost) {
          pq.enqueue([nextNode, newCost]);
        }
      }
    }
  }

  return costs[end];
}
