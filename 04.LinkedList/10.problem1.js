//206. Reverse Linked List

function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

function addAtHead(head, data) {
  let newNode = createNode(data);

  newNode.next = head;
  head = newNode;

  return head;
}

function addAtTail(head, data) {
  let newNode = createNode(data);
  let temp = head;

  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = newNode;
  newNode.next = null;

  return head;
}

//data reverse
/* function reverseLL(head) {
  let values = [];
  let temp = head;
  while (temp !== null) {
    values.push(temp.data);
    temp = temp.next;
  }

  temp = head;
  while (temp !== null) {
    temp.data = values.pop();
    temp = temp.next;
  }

  return head;
} */

//pointer reverse
function reverseLL(head) {
  if (head === null) return null;
  let prev = null;
  let curr = head;
  let newAdjacent = curr.next;
  while (curr !== null) {
    curr.next = prev;
    prev = curr;
    curr = newAdjacent;
    if (curr !== null) {
      newAdjacent = curr.next;
    }
  }
  head = prev;
  return head;
}

function display(head) {
  let temp = head;
  let result = "";
  while (temp !== null) {
    result = result + temp.data + " -> ";
    temp = temp.next;
  }
  result = result + "null";
  console.log(result);
}

let head = null;

head = addAtHead(head, 5);
head = addAtHead(head, 7);
head = addAtHead(head, 2);
head = addAtHead(head, 12);
head = addAtHead(head, 76);
head = addAtTail(head, 90);
head = addAtTail(head, 43);

display(head);

head = reverseLL(head);
display(head);
