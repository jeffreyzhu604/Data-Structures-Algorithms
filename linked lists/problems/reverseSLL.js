/*
    Reverse Linked List: 

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

    Recursive solution:

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
var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    
    const p = reverseList(head.next);
    
    head.next.next = head;
    head.next = null;
    
    return p;
};

let sll = new SinglyLinkedList();
sll.insertHead(5);
sll.insertHead(4);
sll.insertHead(3);
sll.insertHead(2);
sll.insertHead(1);
reverseSLL(sll);



