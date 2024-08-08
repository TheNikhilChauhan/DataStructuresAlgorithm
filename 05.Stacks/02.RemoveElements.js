// Remove elements from top
class Stack {
  constructor() {
    this.items = [];
  }

  //adding the element to a stack
  push(element) {
    this.items.push(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return `Stack is empty`;
    }
    return this.items.pop();
  }

  display() {
    let result = "";
    for (let i = 0; i < this.items.length; i++) {
      result = result + this.items[i] + " ";
    }
    console.log(result.toString());
  }
}

const stack = new Stack();

stack.push(2);
stack.push(5);
stack.push(8);
stack.push(34);
stack.push(1);

stack.display();

stack.pop();
stack.display();

stack.pop();
stack.display();
