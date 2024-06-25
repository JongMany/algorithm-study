// https://github.com/ndb796/priorityqueuejs/blob/master/index.js
// https://github.com/datastructures-js/priority-queue/blob/master/src/priorityQueue.js
type Comparator<T> = (a: T, b: T) => number;
interface IPriorityQueue<T> {
  isEmpty(): boolean;
  peek(): [T, number] | null;
  dequeue(): [T, number] | null;
  enqueue(value: [T, number]): void;
  size(): number;
  comparator: Comparator<T>;
}

class Priority<T> implements IPriorityQueue<T> {
  private comparator: Comparator<T>;
  private elements: [T, number][];

  static defaultComparator<T>(a: T, b: T): number {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      const aStr = `${a}`;
      const bStr = `${b}`;
      if (aStr === bStr) {
        return 0;
      }
      return aStr < bStr ? -1 : 1;
    }
  }
  constructor(comparator: Comparator<T> = Priority.defaultComparator) {
    this.comparator = comparator;
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
      let next = current;

      if (left < size && this.compare(left, next) < 0) {
        next = left;
      }
      if (right < size && this.compare(right, next) < 0) {
        next = right;
      }
      if (next === current) {
        break;
      }
      this.swap(current, next);
      current = next;
    }

    return first;
  }

  private compare(pos1: number, pos2: number) {
    return this.comparator(this.elements[pos1][0], this.elements[pos2][0]);
  }

  private swap(pos1: number, pos2: number) {
    const temp = this.elements[pos1];
    this.elements[pos1] = this.elements[pos2];
    this.elements[pos2] = temp;
  }
}
