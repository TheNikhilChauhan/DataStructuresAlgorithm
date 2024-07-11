// add at head and tail, remove at head and tail

class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addAtHead(data) {
    let newNode = new node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = newNode;
      current.next = this.head;
      this.head = current;
    }
  }

  addAtTail(data) {
    let newNode = new node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeAtHead() {
    let current = this.head;
    let next = current.next;
    current.next = null;
    this.head = next;
  }

  removeAtTail() {
    let current = this.head;

    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
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

list.addAtTail(4);
list.addAtTail(8);
list.addAtTail(65);

list.display();

list.addAtHead(88);
list.addAtHead(56);

list.display();

list.removeAtHead();
list.display();

list.removeAtTail();
list.display();
