//24 leetcode: swap nodes in pairs

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addList(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
    this.length++;
  }

  swapPairs() {
    this.head = this.swapPairsRecursion(this.head);
  }

  swapPairsRecursion(head) {
    if (head === null || head.next === null) return head;

    let first = head;
    let second = head.next;

    //swap first two elements
    first.next = this.swapPairsRecursion(second.next);
    second.next = first;

    return second;
  }

  display() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result = result + current.data + " -> ";
      current = current.next;
    }
    result = result + "NULL";
    console.log(result);
  }
}

const list = new LinkedList();

list.addList(1);
list.addList(2);
list.addList(3);
list.addList(4);

console.log("Before swap: ");
list.display();

console.log("After swap: ");
list.swapPairs();
list.display();
