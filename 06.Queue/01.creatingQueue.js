class Queue {
  constructor() {
    this.items = [];
  }

  //adding an element at the end of the queue
  enqueue(data) {
    this.items.push(data);
  }

  //is the queue empty
  isEmpty() {
    return this.items.length === 0;
  }

  //removing an element at the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    return this.items.shift();
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

queue.dequeue();
queue.display();
