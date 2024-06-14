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

function removeTail(head) {
  let temp = head;
  while (temp.next.next !== null) {
    temp = temp.next;
  }
  temp.next = null;
  return head;
}

function removeAt(head, index) {
  if (head === null) {
    return null;
  }
  let temp = head;
  let count = 0;
  while (count < index - 1) {
    temp = temp.next;
    count++;
  }
  if (temp.next === null && count < index - 1) {
    return head; //index is greater than length of ll
  }
  if (temp.next === null && count === index - 1) {
    return removeTail(head); // tail node was the last one to be removed
  }

  let prevIndex = temp.next;
  temp.next = temp.next.next;
  prevIndex.next = null;
  return head;
}

let head = null;

head = addAtHead(head, 5);
head = addAtHead(head, 7);
head = addAtHead(head, 21);
head = addAtTail(head, 90);

display(head);

head = removeAt(head, 2);
display(head);
