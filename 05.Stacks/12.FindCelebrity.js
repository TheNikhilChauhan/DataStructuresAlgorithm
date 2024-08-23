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
      return null;
    }
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items[this.size() - 1];
  }

  display() {
    console.log(this.items.join(", "));
  }
}

function findCelebrity(n) {
  const stack = new Stack();

  //push all
  for (let i = 0; i < n; i++) {
    stack.push(i);
  }

  //remove non-celeb
  while (stack.size() > 1) {
    const a = stack.pop();
    const b = stack.pop();

    if (knows(a, b)) {
      stack.push(b);
    } else {
      stack.push(a);
    }
  }
  const candidate = stack.pop();

  //verify potential candidate
  for (let i = 0; i < n; i++) {
    if (i !== candidate && (knows(candidate, i) || !knows(i, candidate))) {
      return -1;
    }
  }
  return candidate;
}

function knows(a, b) {
  const matrix = [
    [false, true, true, false],
    [false, false, true, false],
    [false, false, false, false], // Celebrity: Person 2
    [false, true, true, false],
  ];
  return matrix[a][b];
}

// Test case
const n = 4;
const celebrity = findCelebrity(n);
if (celebrity === -1) {
  console.log("No celebrity found.");
} else {
  console.log(`Celebrity is person ${celebrity}`);
}
