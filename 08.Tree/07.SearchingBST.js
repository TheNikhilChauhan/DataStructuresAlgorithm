//Searching in a Binary Search Tree

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

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) return;

    if (node.value > value) {
      return this.searchNode(node.left, value);
    } else if (node.value < value) {
      return this.searchNode(node.right, value);
    } else {
      return node.value;
    }
  }
}

const bst = new BinaryTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(12);
bst.insert(20);

let result = bst.search(12);
if (result) {
  console.log(`Node found with value: ${result}`);
} else {
  console.log("Node not found.");
}
