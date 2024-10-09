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

  // Method to add a node
  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode; // If tree is empty, the new node becomes the root
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (!node.left) {
      // Insert the node if left child is empty
      node.left = newNode;
    } else if (!node.right) {
      // Insert the node if right child is empty
      node.right = newNode;
    } else {
      // If both left and right children exist, we recursively insert in left subtree
      if (Math.random() > 0.5) {
        // Randomly choose to insert on either left or right to keep it a general binary tree
        this.insertNode(node.left, newNode);
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Method for Preorder Traversal
  preOrderTraversal(node) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
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

console.log("Pre-order Traversal:");
binaryTree.preOrderTraversal(binaryTree.root);
