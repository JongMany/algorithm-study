// https://github.com/ndb796/priorityqueuejs/blob/master/index.js
// https://github.com/datastructures-js/priority-queue/blob/master/src/priorityQueue.js
type Comparator = (p1: number, p2: number) => number;
interface IPriorityQueue<T> {
  isEmpty(): boolean;
  peek(): [T, number] | null;
  dequeue(): [T, number] | null;
  enqueue(value: [T, number]): void;
  size(): number;
  // comparator: Comparator;
}

export class PriorityQueue<T> implements IPriorityQueue<T> {
  private comparator: Comparator;
  private elements: [T, number][];

  static maxComparator(priority1: number, priority2: number): number {
    if (typeof priority1 === "number" && typeof priority2 === "number") {
      return priority1 - priority2;
    } else {
      const priority1Str = `${priority1}`;
      const priority2Str = `${priority2}`;
      if (priority1Str === priority2Str) {
        return 0;
      }
      return priority1Str < priority2Str ? -1 : 1;
    }
  }

  static minComparator(priority1: number, priority2: number): number {
    if (typeof priority1 === "number" && typeof priority2 === "number") {
      return priority2 - priority1;
    } else {
      const priority1Str = `${priority1}`;
      const priority2Str = `${priority2}`;
      if (priority1Str === priority2Str) {
        return 0;
      }
      return priority1Str < priority2Str ? 1 : -1;
    }
  }
  constructor(isMax: boolean = true) {
    this.comparator = isMax
      ? PriorityQueue.maxComparator
      : PriorityQueue.minComparator;
    this.elements = [];
  }

  size(): number {
    return this.elements.length;
  }
  isEmpty(): boolean {
    return this.size() === 0;
  }

  forEach(callback: (value: T) => void): void {
    this.elements.forEach(([value]) => callback(value));
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements[0];
  }

  dequeue(): [T, number] | null {
    const size = this.size();
    if (size === 0) {
      return null;
    }
    if (size === 1) {
      return this.elements.pop() || null;
    }
    const first = this.elements[0];
    const last = this.elements.pop()!;

    // 마지막 리프노드를 루트로 올림
    this.elements[0] = last;

    // heapify down
    let current = 0;
    while (current < size) {
      const left = 2 * current + 1;
      const right = 2 * current + 2;
      let largest = current;

      if (left < size && this.compare(left, largest) < 0) {
        largest = left;
      }
      if (right < size && this.compare(right, largest) < 0) {
        largest = right;
      }
      if (largest === current) {
        break;
      }
      this.swap(current, largest);
      current = largest;
    }

    return first;
  }

  enqueue(value: [T, number]) {
    const size = this.elements.push(value);
    let current = size - 1;

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      if (this.compare(current, parent) <= 0) {
        break;
      }
      this.swap(current, parent);
      current = parent;
    }

    return size;
  }
  private compare(pos1: number, pos2: number) {
    return this.comparator(this.elements[pos1][1], this.elements[pos2][1]);
  }

  private swap(pos1: number, pos2: number) {
    const temp = this.elements[pos1];
    this.elements[pos1] = this.elements[pos2];
    this.elements[pos2] = temp;
  }

  getElements() {
    return this.elements;
  }
}

const pq = new PriorityQueue(false);
pq.enqueue(["a", 1]);
pq.enqueue(["b", 2]);
pq.enqueue(["c", 4]);
pq.enqueue(["d", 5]);
pq.enqueue(["e", 3]);
pq.enqueue(["i", 9]);
pq.enqueue(["e", 7]);
pq.enqueue(["f", 6]);
pq.enqueue(["g", 0]);
pq.enqueue(["h", 8]);

console.log(pq.getElements());
