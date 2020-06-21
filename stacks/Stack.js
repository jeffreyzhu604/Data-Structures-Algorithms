const SinglyLinkedList = require('../linked lists/SinglyLinkedList');
/**
 * Stack implementation with a singly linked list
 * @module Stack
 */
class Stack {
    /**
     * Constructor to create a stack
     */
    constructor() {
        this.stack = new SinglyLinkedList();
        console.log('creating stack');
    }

    /**
     * Inserts a node to the top of the stack
     * @param {number} value - The value for the node to be pushed onto the stack
     */
    push(value) {
        console.log(`Pushing ${value}`);
        this.stack.insertHead(value);
    }

    pop() {
        if (!this.stack.head)
            console.log(`Stack is empty`)
        else 
            console.log(`Popping ${this.stack.head.getValue()}`);
        return this.stack.deleteHead();
    }

    peak() {
        if (!this.stack.head)
            console.log(`Stack is empty`)
        else 
            console.log(`Peaking the top of the stack ${this.stack.head.getValue()}`)
        return this.stack.head;
    }

    size() {    
        console.log(`Stack size ${this.stack.length}`);
        return this.stack.length;
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.peak();
stack.size();

stack.pop();
stack.pop();
stack.pop();

stack.peak();
stack.size();