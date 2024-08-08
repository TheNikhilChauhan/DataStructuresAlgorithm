// 83. Remove duplicates from sorted list

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
    const newNode = new Node(data);
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

  removeDuplicates() {
    let current = this.head;

    while (current !== null && current.next !== null) {
      if (current.data === current.next.data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
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
list.addList(1);
list.addList(2);
list.addList(2);
list.addList(2);
list.addList(3);

list.display();

list.removeDuplicates();
list.display();
