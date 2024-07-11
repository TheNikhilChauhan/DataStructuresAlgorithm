class node {
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
    let newNode = new node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      this.length++;
    }
  }

  //insert a new node at specific index
  insertAt(data, index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of Range");
    }

    const newNode = new node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      //traverse
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.length++;
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

list.addList(5);
list.addList(23);
list.addList(64);
list.addList(43);

list.display();

list.insertAt(99, 2);
list.display();
