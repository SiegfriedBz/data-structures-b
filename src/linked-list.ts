class LNode {
  data: number | null = null;
  next: LNode | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

class LinkedList {
  head: LNode | null = null;
  size: number = 0;

  addNode(data: number) {
    const newNode = new LNode(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.#addNode(this.head, newNode);
    }

    this.size++;
  }

  insertAt(idx: number, data: number) {
    if (idx < 0 || idx > this.size) {
      console.log("Out of bounds");
      return;
    } else {
      const newNode = new LNode(data);

      if (idx === 0) {
        const prevHead = this.head;
        this.head = newNode;
        newNode.next = prevHead;
      } else {
        let current: LNode | null = this.head;
        for (let i = 0; i < idx - 1; i++) {
          if (current?.next) {
            current = current.next;
          } else {
            break;
          }
        }

        if (current) {
          const prevNext = current.next;
          current.next = newNode;
          newNode.next = prevNext;
        }
      }

      this.size++;
    }
  }

  #addNode(current: LNode, newNode: LNode) {
    if (!current.next) {
      current.next = newNode;
    } else {
      this.#addNode(current.next, newNode);
    }
  }
}
