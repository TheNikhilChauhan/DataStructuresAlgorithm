class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
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

  postOrderTraversal(node) {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
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
