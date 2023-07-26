// represents an individual node in the linked list
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// represents the entire linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.size++;
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.size++;
  }

  // returns the total number of nodes in the list
  getSize() {
    return this.size;
  }

  // returns the first node in the list
  getHead() {
    return this.head;
  }

  // returns the last node in the list
  getTail() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  // returns the node at the given index
  at(index) {
    if (!this.head) {
      return;
    } else if (index >= this.size || index < 0) {
      return "Invalid index";
    } else {
      let current = this.head;
      let counter = 0;
      while (counter !== index) {
        current = current.nextNode;
        counter++;
      }
      return current;
    }
  }

  // removes the last element from the list
  pop() {
    let current = this.head;
    let previous;
    if (!current.nextNode) {
      this.head = null;
    } else {
      while (current.nextNode) {
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = null;
    }
    this.size--;
  }

  // returns true if the passed value is in the list and otherwise returns false
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  // reurns the index of the node containing value, or null if not found
  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  // represents your LinkedList as a string in the format below:
  // ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let nodes = [];
    let current = this.head;
    while (current) {
      nodes.push(current);
      current = current.nextNode;
    }
    let result = nodes.map((node) => `( ${node.value} ) -> `);
    result.push("null");
    return result.join("");
  }

  // inserts a new node with the provided value at the given index
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    const newNode = new Node(value);
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous;
      let counter = 0;
      while (counter !== index) {
        previous = current;
        current = current.nextNode;
        counter++;
      }
      newNode.nextNode = current;
      previous.nextNode = newNode;
    }
    this.size++;
  }

  // removes the node at the given index
  removeAt(index) {
    if (index < 0 || index > this.size) {
      return "Invalid index";
    }
    let current = this.head;
    let previous;
    let counter = 0;
    if (index === 0) {
      this.head = current.nextNode;
    } else {
      while (counter < index) {
        previous = current;
        current = current.nextNode;
        counter++;
      }
      previous.nextNode = current.nextNode;
    }
    this.size--;
  }
}

// test to make sure the methods work correctly
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(5);
list.prepend(7);

console.log(list.toString());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.contains(20));
console.log(list.find(10));
console.log(list.at(2));
console.log(list.getSize());

list.pop();
console.log(list.toString());
console.log(list.getSize());

list.insertAt(7, 1);
console.log(list.toString());
console.log(list.getSize());

list.removeAt(1);
console.log(list.toString());
console.log(list.getSize());
