function createNode(value) {
  return {
    data: value,
    next: null,
  };
}

function display(head) {
  let temp = head;
  let result = "";
  while (temp !== null) {
    result = result + temp.data + " -> ";
    temp = temp.next;
  }
  result = result + "X";
  console.log(result);
}

function addAtHead(head, data) {
  let newNode = createNode(data);
  newNode.next = head;
  head = newNode;
  return head;
}

function addAtTail(head, data) {
  if (head === null) {
    return addAtHead(head, data);
  }
  let temp = head;
  let newNode = createNode(data);
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = newNode;
  newNode.next = null;

  return head;
}

function addAt(head, index, data) {
  if (head === null) {
    return addAtHead(head, data);
  }
  let temp = head;
  let count = 0;
  while (count < index - 1) {
    temp = temp.next;
    count++;
  }
  let prevNode = temp.next;
  let newNode = createNode(data);
  temp.next = newNode;
  newNode.next = prevNode;

  return head;
}

let head = null;

head = addAtHead(head, 5);
head = addAtHead(head, 7);
head = addAtHead(head, 21);
head = addAtTail(head, 90);

display(head);

head = addAt(head, 2, 45);
display(head);
