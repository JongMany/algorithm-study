// 차수: 각 노드가 갖는 자식의 수. 모든 노드의 차수가 n개 이하인 트리를 n진 트리 라고 함

// 완전 이진 트리

interface INode<T> {
  value: T;
  left: INode<T> | null;
  right: INode<T> | null;
}

export class TNode<T> implements INode<T> {
  value: T;
  left: TNode<T> | null;
  right: TNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class Tree<T> {
  root: TNode<T> | null;

  constructor() {
    this.root = null;
  }
}

const tree = new Tree<number>();
tree.root = new TNode(1);
if(tree.root) {
  tree.root.left = new TNode(2)
  tree.root.right = new TNode(3);
  if(tree.root.left) {
    tree.root.left.left = new TNode(4);
    tree.root.left.right = new TNode<number>(5);
  }
  if (tree.root.right) {
    tree.root.right.left = new TNode<number>(6);
  }
}
