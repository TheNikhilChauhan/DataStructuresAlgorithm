// Creating stack using linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(element) {
    const newNode = new Node(element);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  isEmpty() {
    return this.top === null;
  }

  pop() {
    if (this.isEmpty()) {
      return `Stack is empty`;
    }
    const poppedElement = this.top;
    this.top = this.top.next;
    this.length--;
    return poppedElement;
  }

  peek() {
    if (this.isEmpty()) {
      return `Stack is empty`;
    }
    return this.top.data;
  }

  display() {
    let current = this.top;
    let result = "";

    while (current !== null) {
      result = result + current.data + " -> ";
      current = current.next;
    }
    console.log("TOP -> " + result + "NULL");
  }
}

const stack = new Stack();

stack.push(7);
stack.push(9);
stack.push(4);
stack.push(5);
stack.push(3);

stack.display();

stack.pop();
stack.display();

console.log(`Top element is: ${stack.peek()}`);
