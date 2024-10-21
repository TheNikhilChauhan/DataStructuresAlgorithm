// deletion in BST

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

  deleteNode(node, value) {
    if (node === null) return node;

    if (node.value > value) {
      //check left subtree
      node.left = this.deleteNode(node.left, value);
    } else if (node.value < value) {
      //check right subtree
      node.right = this.deleteNode(node.right, value);
    } else {
      //found the value

      //1. Node has no child
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      //2. Node has one child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      //3. Node has 2 children
      let minValue = this.findMinValue(node.right);
      node.value = minValue.value;
      node.right = this.deleteNode(node.right, minValue.value);
    }
    return node;
  }

  findMinValue(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  inOrderTraversal(root) {
    if (root !== null) {
      this.inOrderTraversal(root.left);
      console.log(root.value);
      this.inOrderTraversal(root.right);
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

// In-order Traversal before deletion
console.log("In-order Traversal before deletion:");
binaryTree.inOrderTraversal(binaryTree.root);

// Delete node
binaryTree.root = binaryTree.deleteNode(binaryTree.root, 12);

// In-order Traversal after deletion
console.log("In-order Traversal after deletion:");
binaryTree.inOrderTraversal(binaryTree.root);
