class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
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
    if (node.value > newNode.value) {
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

  postOrderTraversal(root) {
    let stack1 = [];
    let stack2 = [];
    stack1.push(root);

    while (stack1.length > 0) {
      let currentNode = stack1.pop();
      stack2.push(currentNode);

      if (currentNode.left !== null) {
        stack1.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        stack1.push(currentNode.right);
      }
    }

    while (stack2.length > 0) {
      let currentNode = stack2.pop();
      console.log(currentNode.value);
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

console.log("Post-order Traversal :");
binaryTree.postOrderTraversal(binaryTree.root);
