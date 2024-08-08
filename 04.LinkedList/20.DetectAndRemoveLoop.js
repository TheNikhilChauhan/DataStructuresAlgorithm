// Detect and remove loop

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

  addCircularList(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;

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

  detectRemove() {
    if (this.head === null || this.head.next === null) return false;

    let slow = this.head;
    let fast = this.head;
    let loopExists = false;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (fast === slow) {
        loopExists = true;
        break;
      }
    }

    //find the start of the loop
    if (loopExists) {
      slow = this.head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }

      //find last node in the loop
      let loopStart = slow;
      while (fast.next !== loopStart) {
        fast = fast.next;
      }
      fast.next = null;
      console.log("This is a circular linked list");
      return true;
    }
    console.log("This is not a circular linked list");
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

list.addCircularList(1);
list.addCircularList(2);
list.addCircularList(3);
list.addCircularList(4);
list.addCircularList(5);
list.addCircularList(6);

list.display();

list.createCycle(2);
list.display();

list.detectRemove();

list.display();
