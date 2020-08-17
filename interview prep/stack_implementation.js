/*
    Problem: Discuss the stack data structure. Implement a stack in C using either a linked list or dynamic
    array, and justify your decision. Design the interface to your stack to be complete, consistent and 
    easy to use.

    Stack:
    - LILO
    - Use linked list if memory is an issue

    Operation:
    - push
    - pop
    - peek
    - size
*/
class Stack {
    constructor() {
        this.stack = [];
        this.maxSize = 0;
    }

    setMaxStackSize(value) {
        this.maxSize = value;
    }

    push(data) {
        this.stack.push(data);
    } 

    pop() {
        if (this.stack.length == 0) {
            console.log('Stack is empty')
            return null;            
        }
        return this.stack.pop();
    }

    peek() {
        if (this.stack.length == 0) {
            console.log('Stack is empty');
            return null;
        }
        return this.stack[this.stack.length-1];
    }

    size() {
        return this.stack.length
    }
}