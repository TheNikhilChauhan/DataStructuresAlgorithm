// 141. Linked list cycle detection

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
    let current = this.head;

    if (current === null) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
    this.length++;
  }

  createCycle(position) {
    if (position >= this.length || position < 0) return;

    let current = this.head;
    let cycleNode = null;

    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    cycleNode = current;

    while (current.next !== this.head) {
      current = current.next;
    }
    current.next = cycleNode;
  }

  hasCycle() {
    if (this.head === null || this.head.next === null) return false;

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (fast === slow) {
        console.log("It is cyclic linked list");
        return true;
      }
    }
    console.log("It is not a cyclic linked list");
    return false;
  }

  display(limit = 10) {
    let current = this.head;
    let result = "";
    let count = 0;

    while (current !== null && count < limit) {
      result = result + current.data + " -> ";
      current = current.next;
      count++;

      if (current === this.head) break;
    }
    result = result + (count === limit ? "..." : "NULL");
    console.log(result);
  }
}

const list = new LinkedList();

list.addList(1);
list.addList(2);
list.addList(3);
list.addList(4);

list.createCycle(1);

list.display();

list.hasCycle();
