// doubly ended queue: where you can insert and delete element from both front and rear

class Deque {
  constructor(size) {
    (this.queue = new Array(size)),
      (this.front = -1),
      (this.rear = -1),
      (this.size = size);
  }

  isFull() {
    return this.front === (this.rear + 1) % this.size;
  }

  isEmpty() {
    return this.front === -1;
  }

  insertFront(element) {
    if (this.isFull()) {
      console.log("The queue is full");
      return;
    }
    // if queue is empty
    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.front === 0) {
      this.front = this.size - 1;
    } else {
      this.front = this.front - 1;
    }

    this.queue[this.front] = element;
  }

  deleteFront() {
    if (this.isEmpty()) {
      console.log("The queue is empty");
      return;
    }
    let element = this.queue[this.front];
    this.queue[this.front] = undefined;

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return element;
  }

  insertRear(element) {
    if (this.isFull()) {
      console.log("The queue is full");
      return;
    }
    // if queue is empty
    if (this.rear === -1) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.size;
    }

    this.queue[this.rear] = element;
  }

  deleteRear() {
    if (this.isEmpty()) {
      console.log("The queue is empty");
      return;
    }
    let element = this.queue[this.rear];
    this.queue[this.rear] = undefined;

    if (this.rear === this.front) {
      this.rear = -1;
      this.front = -1;
    } else if (this.rear === 0) {
      this.rear = this.size - 1;
    } else {
      this.rear = this.rear - 1;
    }

    return element;
  }

  peekFront() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    return this.queue[this.front];
  }

  peekRear() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    return this.queue[this.rear];
  }

  display() {
    console.log(this.queue);
  }
}

const queue = new Deque(5);

queue.insertFront(1);
queue.insertFront(2);
queue.insertFront(3);
queue.display();
console.log("Removed element from front ", queue.deleteFront());
queue.display();

queue.insertRear(99);
queue.insertRear(67);
queue.display();

console.log("Removed element from rear ", queue.deleteRear());

queue.display();

console.log("Peek front: ", queue.peekFront());
console.log("Peek rear: ", queue.peekRear());
