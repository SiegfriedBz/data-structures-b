class QNode {
  data: number | null = null;
  next: QNode | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

class Queue {
  front: QNode | null = null;
  back: QNode | null = null;
  size: number = 0;

  // time 0(1) - no traversal
  enqueue(data: number) {
    const newNode = new QNode(data);

    if (!this.front) {
      // this.size === 0
      this.front = newNode;
      this.back = this.front;
    } else {
      (this.back as QNode).next = newNode;
      this.back = newNode;
    }

    this.size++;
  }

  // time 0(1) - no traversal
  dequeue() {
    if (!this.front) return; // this.size === 0

    const poppedData = this.front.data;

    if (!this.front?.next) {
      this.front = null;
      this.back = null;
    } else {
      const newFront = this.front.next;
      this.front = newFront;
    }

    this.size--;

    return poppedData;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
