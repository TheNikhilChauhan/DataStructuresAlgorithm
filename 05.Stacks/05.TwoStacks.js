// two stacks

class TwoStacks {
  constructor(size) {
    this.size = size;
    this.items = new Array(size).fill(null);
    this.top1 = 0;
    this.top2 = size - 1;
  }

  //pushing element to stack 1
  push1(element) {
    if (this.top1 < this.top2) {
      this.items[this.top1] = element;
      this.top1++;
    } else {
      console.log(`Stack overflow: cannot push ${element} stack 1 `);
    }
  }

  //push element to stack 2
  push2(element) {
    if (this.top1 < this.top2) {
      this.items[this.top2] = element;
      this.top2--;
    } else {
      console.log(`Stack overflow: cannot push ${element} stack 1 `);
    }
  }

  //pop an element from the first stack
  pop1() {
    if (this.top1 >= 0) {
      this.top1--;
      const element = this.items[this.top1];
      this.items[this.top1] = null;
      return element;
    } else {
      console.log("Stack underflow: Cannot pop from stack 1");
    }
  }

  pop2() {
    if (this.pop2 < this.size) {
      this.top2++;
      const element = this.items[this.top2];
      this.items[this.top2] = null;
      return element;
    } else {
      console.log("Stack underflow: Cannot pop from stack 2");
    }
  }

  display() {
    console.log("Array:", this.items);
    console.log("Top1:", this.top1, "Top2:", this.top2);
  }
}

const twoStacks = new TwoStacks(10);

twoStacks.push1(1);
twoStacks.push1(2);
twoStacks.push1(3);

twoStacks.push2(9);
twoStacks.push2(8);
twoStacks.push2(7);

twoStacks.display();

// Pop elements from the first stack
console.log("Popped from Stack 1:", twoStacks.pop1());

// Pop elements from the second stack
console.log("Popped from Stack 2:", twoStacks.pop2());

twoStacks.display();
