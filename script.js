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

    append(value)  {
        // adds a new node containing value to the end of the list
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

    prepend(value) {
        // adds a new node containing value to the start of the list
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.size++;
    }

    getSize() {
        // returns the total number of nodes in the list
        return `The current size of the list is ${this.size}`;
    }

    getHead() {
        // returns the first node in the list
        let current = this.head;
        return `The head of the list is ${current.value}`;
    }

    getTail() {
        // returns the last node in the list
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return `The tail of the list is ${current.value}`;
    }

    at(index) {
        // returns the node at the given index
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                return `The value of the node at index ${index} is ${current.value}`;
            }
            current = current.nextNode;
            count++;
        }
        // if user enters an index thats outside the range of the list, return null
        return null;
    }

    pop() {
        // removes the last element from the list
        if (!this.head) {
            return;
        }

        if (!this.head.nextNode) {
            this.head = null;
            this.size--;
            return;
        }

        let previous = this.head;
        let tail = this.head.nextNode;

        while (tail.nextNode) {
            previous = tail;
            tail = tail.nextNode;
        }

        previous.nextNode = null;
        this.size--;
    }

    contains(value) {
        // returns true if the passed value is in the list and otherwise returns false
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return `The list contains the value ${value}`;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        // reurns the index of the node containing value, or null if not found
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return `The value ${value} is at index ${index}`;
            }
            current = current.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        // represents your LinkedList objects as strings, so you can print 
        // them out and preview them in the console. The format should be:
        // ( value ) -> ( value ) -> ( value ) -> null
        let current = this.head;
        let str = '';
        while (current) {
            str += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        str += 'null';
        return str;
    }

    insertAt(value, index) {
        // inserts a new node with the provided value at the given index
        if (index < 0 || index > this.size) {
            return;
        }

        const newNode = new Node(value);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.nextNode = current;
            this.head = newNode;
        } else {
            let count = 0;
            while (count < index) {
                previous = current;
                current = current.nextNode;
                count++;
            }
            newNode.nextNode = current;
            previous.nextNode = newNode;
        }
        this.size++;
    }

    removeAt(index) {
        // removes the node at the given index
        if (index < 0 || index >= this.size) {
            return;
        }

        let current = this.head;
        let previous;

        if (index === 0) {
            this.head = current.nextNode;
        } else {
            let count = 0;
            while (count < index) {
                previous = current;
                current = current.nextNode;
                count++;
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
console.log(list.at(2))
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

