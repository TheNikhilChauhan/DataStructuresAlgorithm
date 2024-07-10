// creating ll in a modern way

// creating LL with class

class createNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;

    this.length = 1;
  }

  push(data) {
    let newNode = new createNode(data);
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

  pop() {
    let temp = this.head;

    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
    return this.head;
  }

  //print the list
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

const myLinkedlist = new LinkedList();
myLinkedlist.push(9);
myLinkedlist.push(39);
myLinkedlist.push(63);
myLinkedlist.push(26);
myLinkedlist.display();

myLinkedlist.pop();

myLinkedlist.display();
