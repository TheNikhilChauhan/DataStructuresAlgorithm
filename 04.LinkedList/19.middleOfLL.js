// 876. Middle of the linked list

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

  middle() {
    let current = this.head;

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(`The middle element is ${slow.data}`);
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
list.addList(5);

list.display();

list.middle();
