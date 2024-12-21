// Binary Search Tree w/ breadthTraversal

class CNode {
  data: number;
  left: CNode | null = null;
  right: CNode | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

class Bst {
  root: CNode | null = null;

  insert(data: number) {
    const newNode = new CNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.#addChild(this.root, newNode);
    }
  }

  #addChild(current: CNode, newNode: CNode) {
    if (newNode.data <= current.data) {
      if (!current.left) {
        current.left = newNode;
      } else {
        this.#addChild(current.left, newNode);
      }
    } else {
      if (!current.right) {
        current.right = newNode;
      } else {
        this.#addChild(current.right, newNode);
      }
    }
  }

  breadthTraversal() {
    if (this.root === null) return;

    const queue: CNode[] = [this.root];
    const result: number[] = [];

    while (queue.length > 0) {
      const current = queue.shift() as CNode;
      result.push(current.data);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    console.log(result.join(" "));
  }
}
