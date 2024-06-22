// bfs - queue 활용
import {TNode, Tree} from "./BinaryTree";
(() => {
  const tree = new Tree<string>();
  tree.root = new TNode('A');
  if(tree.root) {
    tree.root.left = new TNode('B')
    tree.root.right = new TNode('C');
    if(tree.root.left) {
      tree.root.left.left = new TNode('D');
      tree.root.left.right = new TNode<string>('E');
      if(tree.root.left.left) {
        tree.root.left.left.left = new TNode<string>('G');
        tree.root.left.left.right = new TNode<string>('H');
      }
    }
    if (tree.root.right) {
      tree.root.right.right = new TNode<string>('F');
    }
  }

  function bfs(tree: Tree<unknown>) {
    const visited = []; // 순회 순서
    const root = tree.root
    if (root === null) {
      return [];
    }
    const queue = [];
    queue.push(root);

    while (queue.length > 0) {
      const currentNode = queue.shift() as TNode<any>;
      visited.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right){
        queue.push(currentNode.right);
      }
    }
    return visited;
  }

  console.log(bfs(tree))

})()

