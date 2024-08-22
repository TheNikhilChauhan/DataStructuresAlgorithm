// priority queue

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  //add to the queue
  enqueue(element, priority) {
    const queueElement = { element, priority };
    let added = false;

    //find correct position to insert

    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    //if the element doesn't have any priority then
    if (!added) {
      this.items.push(queueElement);
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }

  //remove
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    return this.items.shift(); //remove the element with the highest priority;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    return this.items[0];
  }

  display() {
    console.log(
      "Priority Queue: ",
      this.items
        .map((item) => `[${item.element}, ${item.priority}]`)
        .join(" -> ")
    );
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

priorityQueue.display();

console.log("Front element:", priorityQueue.peek());

console.log("Dequeued:", priorityQueue.dequeue());
priorityQueue.display();
