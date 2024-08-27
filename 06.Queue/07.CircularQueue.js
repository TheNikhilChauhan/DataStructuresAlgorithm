// Circular queue

class CircularQueue {
  constructor(s) {
    (this.queue = new Array(s)),
      (this.front = -1),
      (this.rear = -1),
      (this.size = s);
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  isEmpty() {
    return this.front === -1;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("The queue is full.");
      return;
    }
    //if queue is empty
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = element;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("The queue is empty");
      return;
    }

    let element = this.queue[this.front];
    //when rear === front at the end
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return element;
  }

  display() {
    console.log(this.queue);
  }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(4);
circularQueue.enqueue(5);

circularQueue.display();

console.log(circularQueue.dequeue());

circularQueue.enqueue(6);
circularQueue.display();
