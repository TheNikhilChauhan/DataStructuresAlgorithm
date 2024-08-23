// insert the element at the bottom in a stack

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

  size() {
    return this.items.length;
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
    return this.items[this.size() - 1];
  }

  //first approach
  /* insertAtBottom(element) {
    let stack2 = [];
    while (!this.isEmpty()) {
      stack2.push(this.items.pop());
    }
    this.items.push(element);

    while (stack2.length) {
      this.items.push(stack2.pop());
    }
  } */

  //recursive apporach
  insertAtBottom(element) {
    if (this.isEmpty()) {
      this.items.push(element);
      return;
    }

    const topElement = this.items.pop();

    //recursive call
    this.insertAtBottom(element);

    this.items.push(topElement);
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

stack.insertAtBottom(100);
stack.display();

console.log(`Top element is: ${stack.peek()}`);
