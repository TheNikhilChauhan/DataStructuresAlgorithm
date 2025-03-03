/* 
2.You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

// import { readline } from "readline";
const readline = require("readline");
class LinkedList {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createLinkedList(arr) {
  let head = new LinkedList(0);
  let current = head;
  for (let num of arr) {
    current.next = new LinkedList(num);
    current = current.next;
  }

  return head.next;
}

function printLinkedList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

function addTwoNumbers(l1, l2) {
  let head = new LinkedList(0);
  let current = head;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    let sum = carry;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    let newNode = new LinkedList(sum % 10);

    current.next = newNode;
    current = newNode;
  }
  return head.next;
}

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question(
  "Enter first number as reversed list (comma separated): ",
  (num1) => {
    r1.question(
      "Enter second number as reversed list (comma separated): ",
      (num2) => {
        let arr1 = num1.split(",").map(Number);
        let arr2 = num2.split(",").map(Number);

        let l1 = createLinkedList(arr1);
        let l2 = createLinkedList(arr2);

        let result = addTwoNumbers(l1, l2);

        console.log("Result: ");
        printLinkedList(result);

        r1.close();
      }
    );
  }
);
