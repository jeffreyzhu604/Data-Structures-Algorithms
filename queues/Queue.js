const SinglyLinkedList = require('../linked lists/SinglyLinkedList');
/**
 * Queue implementation with a singly linked list
 * @module Queue
 */
class Queue {
    /**
     * Constructor to create a stack
     */
    constructor() {
        this.queue = new SinglyLinkedList();
    }

    /**
     * Inserts a node to the top of the queue
     * @param {number} value - The value for the node to be pushed onto the queue
     */
    push(value) {
        console.log(`Pushing ${value}`);
        this.queue.insertTail(value);
    }

    pop() {
        if (!this.queue.head)
            console.log(`Queue is empty`)
        else {
            console.log(`Popping ${this.queue.head.getValue()}`);
            return this.queue.deleteHead();            
        }
 
    }

    peak() {
        if (!this.queue.head)
            console.log(`Queue is empty`)
        else {
            console.log(`Peaking the top of the queue ${this.queue.head.getValue()}`)
            return this.queue.head.getValue();            
        }

    }

    size() {    
        console.log(`Queue size ${this.queue.length}`);
        return this.queue.length;
    }
}

module.exports = Queue;

// let queue = new Queue();

// queue.push(1);
// queue.push(2);
// queue.push(3);

// queue.peak();
// queue.size();

// queue.pop();
// queue.pop();
// queue.pop();

// queue.peak();
// queue.size();