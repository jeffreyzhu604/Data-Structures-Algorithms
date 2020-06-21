/*
    Linked list is a data structure that consists of nodes which contains:
        - A value
        - A pointer to the next node
    Operations:
        - NOTE: We need a reference to the head and tail node
        - Insert a node (Beginning, somewhere in the middle and the end)
            - Time complexity:
                - Beginning: O(1)
                - Middle: O(n)
                - End: O(1)
        - Delete a node (Beginning, somewhere in the middle and the end)
            - Time complexity:
                - Beginning: O(1)
                - Middle: O(n)
                - End: O(1)
        - Display values for the linked list
            - Time complexity: O(n)
        - Search for a value in the linked list
            - Time complexity: O(n)
*/
const Node = require('./Node.js');

/**
 * Class to represent a linked list
 * NOTE: Positioning of the linked list starts at 1, i.e. if there is one node, the position is 1
 */
class SinglyLinkedList {
    /**
     * Constructor to create the head and tail of a linked list
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Inserting a node to the head of a linked list
     * @param {number} value - The number stored in the value property of a node
     */
    insertHead(value) {
        /*
            Considerations:
                - Does a node currently exist
        */
       let newNode = new Node(value);
       if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
       } else {
           /*
                Current linked list: [1 | null], New node: [2 | null]
                - The new node points to the head node
                - The head node updates to the new node
           */
          newNode.setNextNode(this.head);
          this.head = newNode;
       }
       this.length = this.length + 1;
    }

    /**
     * Inserting a node in the nth position
     * @param {number} value - The value for the next node
     * @param {number} n - The value for the position in the linked list for the node to be inserted 
     */
    insertNthPosition(value, n) {
        /*
            Strategy:
            - [1, node2] -> [2, node3] -> [3, node4] -> [4, null]
            - Suppose we want to insert node, [5, null], into the 2nd position
                - [1, node5] -> [5, node2] -> [2, node3] -> [3, node4] -> [4, null]
            Algorithm:
                - We traverse until n-1
                - The new node next node becomes the next node of the n-1 node
                - The next node of the n-1 node becomes the new node
            Edge cases:
                - If you only have a head node
                - If position doesn't exist
        */
        let newNode = new Node(value);
        let count = 1;
        if (n > this.length)
            console.log(`Invalid position as input`);
        else {
            let pointer = this.head
            while (pointer.getNextNode()) {
                if (count == n - 1) // n = 2
                    break;
                pointer = pointer.getNextNode();
                count++;
            }
            newNode.setNextNode(pointer.getNextNode());
            pointer.setNextNode(newNode);
        }
        this.length = this.length + 1;
    }

    /**
     * Inserting a node at the tail
     * @param {number} value - The value of the node to be inserted in the linked list
     */
    insertTail(value) {
        /*
            Algorithm:
            - Set the next node of the tail to be the new node
            - Update the tail to be the new node
        */
       let newNode = new Node(value);
       if (!this.head) {
           this.head = newNode;
           this.tail = newNode;
       } else {
            this.tail.setNextNode(newNode);
            this.tail = newNode;           
       }
       this.length = this.length + 1;
    }

    /**
     * Delete a node from the head of the linked list
     */
    deleteHead() {
        /*
            Algorithm:
            - The next node of the head to a temperary variable
            - The next node of the head is set to null
            - The temporary variable now becomes the head
        */
       if (this.length == 1) {
           this.head = null;
           this.tail = null;
       } else {
            let temp = this.head.getNextNode();
            this.head.setNextNode(null);
            this.head = temp;           
       }

       this.length = this.length - 1;
    }

    /**
     * Deleting a node from the nth position of a linked list
     * @param {number} n - The position to delete the node from the linked list
     */
    deleteNthPosition(n) {
        /*
            Edge case:
            - If we are removing at n-1
        */
        let pointer = this.head;
        let count = 1;
        if (n > this.length)
            console.log('Invalid position as input');
        else if (n <= 0) 
            console.log('Invalid position, input must be greater or equal to 1');
        else if (n == this.length)
            this.deleteTail();
        else if (n == 1)
            this.deleteHead();
        else {
            while (pointer.getNextNode()) {
                if (count == n - 1)
                    break;
                pointer = pointer.getNextNode();
                count++;
            }
            pointer.setNextNode(pointer.getNextNode().getNextNode());
            pointer.getNextNode().setNextNode(null);
            this.length = this.length - 1;
        }
    }

    /**
     * Deleting a node from the tail of a linked list
     */
    deleteTail() {
        if (this.length == 1) {
            this.tail = null;
            this.head = null;
        } else {
            let count = 1;
            let pointer = this.head;
            while (pointer.getNextNode()) {
                if (count == this.length - 1)
                    break;
                pointer = pointer.getNextNode();
                count++;
            }
            pointer.setNextNode(null);
            this.tail = pointer;            
        }

        this.length = this.length - 1;
    }

    /**
     * Searching for a value in the linked list
     * @param {number} value - The value from a node to be found in the linked list
     */
    searchValue(value) {
        let pointer = this.head;
        let foundValue;
        const recursiveSearch = (node) => {
            if (node.getValue() == value) {
                console.log(`Node with value: ${value}\nFound`);
                foundValue = true;               
            }
            if (node.getNextNode()) {
                recursiveSearch(node.getNextNode());
            }
        }
        recursiveSearch(pointer);
        if (!foundValue)
            console.log(`Node with value: ${value}\nNot found`);
    }

    /**
     * Displays the length of the linked list
     */
    getLength() {
        console.log(`length: ${this.length}`);
    }

    /**
     * Displays the values of each node in the linked list
     */
    display() {
        /*
            2 Methods of traversing the linked list
            - Recursively
                - Set a pointer to be the head node
                - Print the value
                - If pointer next node value is not null
                - Set the pointer to be the next node
            - Iteratively
                - If linked list only contains head
                - If linked list has a bunch of nodes
                    - Set a pointer to be the head node
                    - Print the value
                    - If the pointer next node is not null
                    - Set the pointer to be the next node
        */
        let pointer = this.head;
        const recursiveTraversal = (node) => {
            console.log(node.getValue());
            if (node.getNextNode()) {
                pointer = pointer.getNextNode();
                recursiveTraversal(pointer);
            }                
        }

        const iterativeTraversal = () => {
            let pointer = this.head;
            if (!pointer.getNextNode())
                console.log(pointer.getValue())
            else {
                while (pointer.getNextNode()) {
                    console.log(pointer.getValue());
                    pointer = pointer.getNextNode();
                } 
                console.log(pointer.getValue())
            }               
        }

        // recursiveTraversal(pointer);
        iterativeTraversal();
    }
}

module.exports = SinglyLinkedList;

// let sll = new SinglyLinkedList();
// sll.insertHead(2);
// sll.insertHead(1);
// sll.insertHead(3);
// sll.insertHead(5);
// sll.insertHead(4);
// sll.searchValue(5);
// sll.searchValue(6);
// sll.display(); // 4 5 3 1 2
// sll.getLength();

// let sll2 = new SinglyLinkedList();
// sll2.insertHead(4);
// sll2.insertHead(3);
// sll2.insertHead(2);
// sll2.insertHead(1);
// sll2.insertNthPosition(5,2);
// // sll2.insertNthPosition(6,10);
// // sll2.display(); // 1 5 2 3 4
// sll2.insertNthPosition(6, 4);
// // sll2.display() // 1 5 2 6 3 4
// sll2.insertTail(10);
// sll2.insertTail(11);
// // sll2.display(); // 1 5 2 6 3 4 10 11
// sll2.deleteHead()
// sll2.deleteHead();
// // sll2.display(); // 2 6 3 4 10 11
// sll2.deleteTail();
// sll2.deleteTail();
// // sll2.display(); // 2 6 3 4
// sll2.deleteNthPosition(3);
// // sll2.display(); // 2 4
// sll2.deleteNthPosition(2);