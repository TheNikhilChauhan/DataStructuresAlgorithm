// When reversing the queue, we use shift() to dequeue which will remove the first element but also shifts the element index.
// The problem here is the time complexity increases to O(n)
// If we want to achieve time complexity of O(1) then we need to implement a queue using either linked list or two stacks

// Using linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.rear) {
      this.rear.next = newNode;
    } else {
      this.front = newNode;
    }
    this.rear = newNode;
    this.size++;
  }

  isEmpty() {
    return this.size === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "The queue is empty";
    }
    const removedElement = this.front.data;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    this.size--;
    return removedElement;
  }

  peek() {
    if (this.isEmpty()) {
      return "The queue is empty";
    }
    return this.front.data;
  }

  display() {
    let current = this.front;
    let result = [];

    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(", "));
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.display();

console.log(`The front element in the queue is: ${queue.peek()}`);

queue.dequeue();

queue.display();

console.log(`The front element in the queue is: ${queue.peek()}`);
