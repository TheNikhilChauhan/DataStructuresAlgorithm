// 876: Middle of the linked list
//hare and rabbit

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

function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast.next === null) return slow;
  else return slow.next;
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

let head = null;

head = addAtHead(head, 5);
head = addAtHead(head, 15);
head = addAtHead(head, 25);
head = addAtHead(head, 85);
head = addAtTail(head, 89);
head = addAtTail(head, 97);
display(head);

head = middleNode(head);

display(head);
