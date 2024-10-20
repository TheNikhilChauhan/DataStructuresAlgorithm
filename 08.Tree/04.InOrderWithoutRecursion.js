// In-order traversal without recursion using stacks

class TreeNode {
  constructor(data) {
    this.right = null;
    this.left = null;
    this.data = data;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(root) {
    let stack = [];
    let currentNode = root;

    while (stack.length > 0 || currentNode !== null) {
      while (currentNode !== null) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }

      currentNode = stack.pop();
      console.log(currentNode.data);

      currentNode = currentNode.right;
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(6);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(8);
binaryTree.insert(12);
binaryTree.insert(20);

console.log("In-order Traversal (LNR):");
binaryTree.inOrderTraversal(binaryTree.root);
