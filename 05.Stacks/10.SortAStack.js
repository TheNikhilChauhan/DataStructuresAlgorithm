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

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    }
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    }
    return this.items[this.size() - 1];
  }

  insertSorted(element) {
    if (this.isEmpty() || element > this.peek()) {
      this.items.push(element);
    } else {
      const topElement = this.items.pop();
      this.insertSorted(element);
      this.items.push(topElement);
    }
  }

  sort() {
    if (!this.isEmpty()) {
      const topElement = this.items.pop();

      this.sort();
      this.insertSorted(topElement);
    }
  }

  display() {
    console.log(this.items.join(", "));
  }
}

const stack = new Stack();

stack.push(4);
stack.push(8);
stack.push(23);
stack.push(7);
stack.push(13);
stack.display();
stack.pop();
stack.display();
console.log(`top of the stack is: ${stack.peek()}`);

stack.sort();
stack.display();
