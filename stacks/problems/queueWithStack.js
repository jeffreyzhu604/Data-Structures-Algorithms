const Stack = require('../Stack');

/*
    Stack is First in, Last out

    Queue is First in, First out

    Example: We have a queue, with 1 being the first to be removed.

    Algorithm:
    - We need to use 2 stacks
    - When we add elements to the queue, we just push normally 
    - When we remove elements from the queue, we need to to pop off 
      stack1 and push into stack2, until stack.size == 1, then we pop off 
      from stack1, and push everything from stack2 to stack1
    - When we want to view the front of the queue, we do the same procedure
      as removing except, we don't pop when stack.size == 1

    Time complexity: O(n)
    Space complexity: O(n)
*/

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    push(value) {
        this.stack1.push(value);
    }

    pop() {
        while (this.stack1.size() > 1) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.pop();
        while (this.stack2.size() > 0) {
            this.stack1.push(this.stack2.pop())
        }
    }

    peak () {
        let front;
        while (this.stack1.size() > 1) {
            this.stack2.push(this.stack1.pop());
        }
        front = this.stack1.peak();
        while (this.stack2.size() > 0) {
            this.stack1.push(this.stack2.pop());
        }
        return front;
    }

    size() {
        return this.stack1.size();
    }
}

let queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);

queue.peak();
queue.size();

queue.pop();
queue.pop(); 

queue.peak(); // 3
queue.size();

queue.push(4);
queue.push(5); // 3 4 5 
queue.pop(); 

queue.peak();  // 4
queue.size(); // 2