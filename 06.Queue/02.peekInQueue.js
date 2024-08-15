class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(data) {
    this.items.push(data);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty!!";
    }
    this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty!!";
    }
    return this.items[0];
  }

  display() {
    console.log(this.items.join(", "));
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.display();

console.log("Front element in queue is: ", queue.front());

queue.dequeue();
queue.display();
console.log("Front element in queue is: ", queue.front());
