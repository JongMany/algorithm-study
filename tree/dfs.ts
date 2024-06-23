// Recursion Version

import { TNode, Tree } from "./BinaryTree";

function dfs() {
  //
}

(() => {
  // Tree Generation
  const tree = new Tree<string>();
  tree.root = new TNode("A");
  if (tree.root) {
    tree.root.left = new TNode("B");
    tree.root.right = new TNode("C");
    if (tree.root.left) {
      tree.root.left.left = new TNode("D");
      tree.root.left.right = new TNode<string>("E");
      if (tree.root.left.left) {
        tree.root.left.left.left = new TNode<string>("G");
        tree.root.left.left.right = new TNode<string>("H");
      }
    }
    if (tree.root.right) {
      tree.root.right.right = new TNode<string>("F");
    }
  }

  // Recursion Version - Use SubTree
  // PreOrder는 방문 순서가 부모 -> 왼쪽 -> 오른쪽 순임
  // InOrder는 방문 순서가 왼쪽 -> 부모 -> 오른쪽 순임
  // PostOrder는 방문순서가 왼쪽 -> 오른쪽 -> 부모 순임
  function dfs_solution(
    tree: Tree<unknown>,
    option: "in" | "pre" | "post" = "pre"
  ) {
    const visited: unknown[] = [];
    function preOrderDFS(currentNode: TNode<unknown> | null) {
      if (currentNode === null) {
        return;
      }

      visited.push(currentNode.value);
      preOrderDFS(currentNode.left);
      preOrderDFS(currentNode.right);
    }

    function inOrderDFS(currentNode: TNode<unknown> | null) {
      if (currentNode === null) {
        return;
      }

      inOrderDFS(currentNode.left);
      visited.push(currentNode.value);
      inOrderDFS(currentNode.right);
    }

    function postOrderDFS(currentNode: TNode<unknown> | null) {
      if (currentNode === null) {
        return;
      }

      postOrderDFS(currentNode.left);
      postOrderDFS(currentNode.right);
      visited.push(currentNode.value);
    }

    switch (option) {
      case "in":
        inOrderDFS(tree.root);
        break;
      case "pre":
        preOrderDFS(tree.root);
        break;
      case "post":
        postOrderDFS(tree.root);
        break;
      default:
        break;
    }
    return visited;
  }

  // console.log(dfs_solution(tree, "pre"))
  console.log(dfs_solution(tree, "in"));
  // console.log(dfs_solution(tree, "post"))
})();
