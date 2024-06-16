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
function reverseList(head) {}

//pointer reverse

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
