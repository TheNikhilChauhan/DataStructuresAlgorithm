//pointer reverse
/* if (head === null) return null;
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
return head; */
