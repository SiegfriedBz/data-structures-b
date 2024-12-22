class SNode {
  data: number | null = null;
  next: SNode | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

// [top...] - time O(1)
class Stack {
  #head: SNode | null = null;
  #size: number = 0;

  // time O(1) - no traversal
  push(data: number) {
    const newNode = new SNode(data);
    newNode.next = this.#head;
    this.#head = newNode;
    this.#size++;
  }

  // time O(1) - no traversal
  pop() {
    if (!this.#head) return;

    const popped = this.#head.data;
    const newHead = this.#head.next;
    this.#head = newHead;
    this.#size--;

    return popped;
  }

  peek() {
    return this.#head?.data;
  }

  get size() {
    return this.#size;
  }
}
