// Reverse the queue

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
      return "The queue is empty";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "The queue is empty";
    }
    return this.items[0];
  }

  reverseQueue() {
    if (this.isEmpty()) {
      return "The queue is empty";
    }

    // using built-in method reverse()
    // return this.items.reverse();

    //reversing without using the built-in method

    let stack = [];

    while (!this.isEmpty()) {
      stack.push(this.dequeue());
    }

    while (stack.length > 0) {
      this.items.push(stack.pop());
    }
    // console.log(this.items);
    return this.items;
  }
  size() {
    return this.items.length;
  }

  display() {
    // console.log(this.items.join(", "));
    return this.items;
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

queue.reverseQueue();

queue.dequeue();
queue.dequeue();

console.log(queue.display());

console.log("Front element in queue is: ", queue.front());

console.log(queue.size());
