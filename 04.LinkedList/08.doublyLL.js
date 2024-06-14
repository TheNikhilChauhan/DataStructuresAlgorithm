function createNode(data) {
  return {
    data: data,
    next: null,
    prev: null,
  };
}

function addAtHead(head, data) {
  if (head === null) {
    return createNode(data);
  }
  let newNode = createNode(data);
  head.prev = newNode;
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
  newNode.prev = temp;
  newNode.next = null;
  return head;
}

function removeAtHead(head) {
  let nextNode = head.next;
  head.next = null;
  nextNode.prev = null;
  head = nextNode;

  return head;
}

function removeAtTail(head) {
  let temp = head;
  while (temp.next.next !== null) {
    temp = temp.next;
  }
  let lastNode = temp.next;
  temp.next = null;
  lastNode.prev = null;

  return head;
}

function display(head) {
  let temp = head;
  let result = "";
  while (temp !== null) {
    result = result + temp.data + " <- -> ";
    temp = temp.next;
  }
  result = result + "X";
  console.log(result);
}

let head = null;

head = addAtHead(head, 5);
head = addAtHead(head, 7);
head = addAtHead(head, 55);
head = addAtHead(head, 67);
head = addAtTail(head, 17);
display(head);
head = removeAtHead(head);
display(head);
head = removeAtTail(head);
display(head);
