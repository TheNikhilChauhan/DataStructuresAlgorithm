//206. Data reversal using data recursive
// We are not reversing the pointers here but
// we are going to reverse the data itself.

function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

function addAtHead(data) {
  let newNode = createNode(data);

  newNode.next = head;
  head = newNode;

  return head;
}

let start = null;
function f(current) {
  if (current === null) return false;
  let result = f(current.next);
  if (result === false) {
    let n = start.data;
    start.data = current.data;
    current.data = n;
    let response = start === current || start.next === current;
    start = start.next;
    return response;
  } else {
    return result;
  }
}

function reverseList(head) {
  if (head === null) return null;
  start = head;
  f(head);
  return head;
}

function display(head) {
  let temp = head;
  let result = "";

  while (temp !== null) {
    result = result + temp.data + " -> ";
    temp = temp.next;
  }
  result = result + "NULL";
  console.log(result);
}

let head = null;

head = addAtHead(5);
head = addAtHead(4);
head = addAtHead(7);
head = addAtHead(2);

display(head);
reverseList(head);

display(head);
