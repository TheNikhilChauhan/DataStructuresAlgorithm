// reverse a stack using recursion

class Stacks {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    }
    return this.items[this.items.length - 1];
  }

  insertAtBottom(element) {
    if (this.isEmpty()) {
      return this.items.push(element);
    }
    const topElement = this.items.pop();
    this.insertAtBottom(element);
    this.items.push(topElement);
  }

  reverseStack() {
    if (!this.isEmpty()) {
      const topElement = this.items.pop();
      this.reverseStack();
      this.insertAtBottom(topElement);
    }
  }

  display() {
    console.log(this.items.join(", "));
  }
}

const stack = new Stacks();

stack.push(4);
stack.push(8);
stack.push(23);
stack.push(7);
stack.push(13);
stack.display();
stack.pop();
stack.display();
console.log(`top of the stack is: ${stack.peek()}`);

stack.reverseStack();
console.log("Reversed Stack: ");
stack.display();
