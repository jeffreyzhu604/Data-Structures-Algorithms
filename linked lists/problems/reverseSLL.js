/*
    Reverse Linked List: 
    Runtime: 76ms

    Reverse a singly linked list

    Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
    Output: 5 -> 4 -> 3 -> 2 -> 1 -> null

    newList: 1 -> null
    oldList: 1 -> 2 -> 3 -> 4 -> 5 -> null

    temp = node.next
    temp.next = newList
    newList.head = temp

    Algorithm:
    - Have 2 references to the head node, one called "newList" and one called "oldList"
      and a temp to hold reference to the oldList as we deference the nodes that we are
      adding to the newList
    - Looping through the oldList
    - Time complexity: O(n), Space complexity: O(n)
    Can do either recursively or iteratively.
*/
const SinglyLinkedList = require('../SinglyLinkedList.js');
const Node = require('../Node.js');

const reverseSLL = (list) => {
    let temp;
    let newList = new Node(list.head.getValue());
    let oldList = list.head;
    while (oldList.getNextNode()) {
        temp = new Node(oldList.getNextNode().getValue());
        temp.setNextNode(newList);
        newList = temp;
        oldList = oldList.getNextNode();
    }
    while (newList.getNextNode()) {
        console.log(newList.getValue());
        newList = newList.getNextNode();
    }
    console.log(newList.getValue())
}

/*
    Improved iterative approach:
    Runtime: 60ms

    Algorithm:
    - Use 3 pointers:
        - One to reference the head of the list as you traverse
        - Two to reference the head of the two linked lists as you break the chain
    - Begins by traversing the list from the original head reference (pointer1)
    - Set a pointer to reference the second node (pointer2)
    - Since we have a reference from the second node onwards, we can break the link from the
      first node to the second
    - Set the first node to point to null (pointer3)
    - Now we can set pointer2 as the new head to continue traversing and pointer3 to be the
      new head of the list we're building
    - No extra memory was used
    - Only one loop was used

    Time Complexity: O(n)
    Space Complexity: O(1)
    
*/
const reverseSLL2 = (list) => {
    let pointer1 = list.head, pointer2 = null, pointer3 = null;
    while(pointer1) {
        pointer2 = pointer1.getNextNode();
        pointer1.setNextNode(pointer3);
        pointer3 = pointer1;
        pointer1 = pointer2;
    }
    while (pointer3) {
        console.log(pointer3.getValue());
        pointer3 = pointer3.getNextNode();
    }
};

/*

    Recursive solution:
    Runtime: 64ms

    Time Complexity: O(n)
    Space Complexity: O(1)

    Input: 1 -> 2 -> 3 -> 4 -> 5 -> null

    Call Stack:         
    5 -> pops
    4
    3
    2

    p = 5
    4 -> 5 -> null
    4 -> 5 ->
*/
const reverseSLL3 = function(list) {

    const recursiveHelper = (node) => {
        if (node === null || node.getNextNode() === null) return node;
        
        const p = recursiveHelper(node.getNextNode());
        
        node.getNextNode().getNextNode().setNextNode(node);
        node.setNextNode(null);
        
        return p;        
    }
    head = recursiveHelper(list.head);
    while (head) {
        console.log(head);
        head = head.getNextNode();
    }
};

let sll = new SinglyLinkedList();
sll.insertHead(5);
sll.insertHead(4);
sll.insertHead(3);
sll.insertHead(2);
sll.insertHead(1);
sll.display();
reverseSLL3(sll);



