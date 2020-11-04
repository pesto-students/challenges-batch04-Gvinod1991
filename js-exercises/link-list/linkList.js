import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    if (this.head === null) {
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

  // delete(value) {
  //   // code here
  // }

  traverse() {
    let current = this.head;
    let traversedData = '';
    while (current !== null) {
      traversedData += current.value;
      current = current.next;
    }
    return traversedData;
  }

  // contains(value) {
  //   // code here
  // }

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
