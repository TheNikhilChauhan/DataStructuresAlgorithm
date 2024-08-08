class Stack {
  constructor() {
    this.items = [];
  }

  //add a new element onto the stack
  push(element) {
    this.items.push(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  //display the elements in the stack
  display() {
    let result = "";
    for (let i = 0; i < this.items.length; i++) {
      result = result + this.items[i] + " ";
    }
    console.log(result.trim());
  }
}

const stack = new Stack();

stack.push(2);
stack.push(5);
stack.push(6);
stack.push(1);
stack.push(4);

stack.display();
