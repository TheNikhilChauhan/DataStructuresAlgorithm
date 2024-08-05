// reverse list in K groups

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
    }
    this.length++;
  }

  reverseKGroup(head, k) {
    let count = 0;
    let current = head;

    // check nodes length
    while (current !== null && count < k) {
      current = current.next;
      count++;
    }

    if (count === k) {
      current = head;
      let prev = null;
      let next = null;
      let i = 0;

      //Reverse k nodes
      while (i < k && current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        i++;
      }

      //reverse next part and connect it to this part
      if (next !== null) {
        head.next = this.reverseKGroup(next, k);
      }

      //return the new head of reversed group
      return prev;
    } else if (count > 0) {
      // few k nodes
      current = head;
      let prev = null;
      let next = null;
      let i = 0;

      //reverse the remaining nodes
      while (i < count && current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        i++;
      }

      //return new head
      return prev;
    }

    //if no nodes are left to reverse then return head
    return head;
  }

  reverseKGroups(k) {
    this.head = this.reverseKGroup(this.head, k);
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
list.addList(6);

console.log("Original list");

list.display();

const k = 4;
list.reverseKGroups(k);

console.log(`List after reversing in groups of ${k}:`);
list.display();
