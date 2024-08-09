// reverse a string

class Stack {
  constructor() {
    this.items = [];
  }

  //push elements onto the stack
  push(element) {
    this.items.push(element);
  }

  // stack is empty or not
  isEmpty() {
    return this.items.length === 0;
  }

  //pop the element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  reverseString(str) {
    const stack = new Stack();

    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }

    let reverseStr = "";

    while (!stack.isEmpty()) {
      reverseStr = reverseStr + stack.pop();
    }

    return reverseStr;
  }
}

const reverseString = new Stack();

console.log(reverseString.reverseString("Nikhil"));
