class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  //method to view the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return `Stack is empty`;
    }
    return this.items[this.items.length - 1];
  }

  display() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

stack.push(6);
stack.push(3);
stack.push(9);
stack.push(43);
stack.push(1);

stack.display();

console.log(`Top element is: ${stack.peek()}`);
