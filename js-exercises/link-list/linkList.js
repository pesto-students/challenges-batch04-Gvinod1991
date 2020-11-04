import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    if (!this.head) {
      this.head = new LinkListNode(value);
    } else {
      this.head = new LinkListNode(value, this.head);
    }
  }

  append(value) {
    // code here
    if (this.head === null) {
      this.head = new LinkListNode(value);
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new LinkListNode(value);
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      return;
    }
    let prevNode = null;
    let currentNode = this.head;
    while (currentNode && currentNode.value !== value) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode) {
      prevNode.next = currentNode.next;
    }
  }

  traverse() {
    let current = this.head;
    let traversedData = '';
    while (current !== null) {
      traversedData += current.value;
      current = current.next;
    }
    return traversedData;
  }

  contains(value) {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    if (current) {
      return true;
    }
    return false;
  }

  length() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count += 1;
      current = current.next;
    }
    return count;
  }
}
