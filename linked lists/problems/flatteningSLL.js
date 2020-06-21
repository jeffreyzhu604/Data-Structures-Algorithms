/*
    Given a linked list where every node represents a linked list and contains two pointers of its type:
    1) Pointer to the next node in the main list (we call it 'right' pointer in below code)
    2) Pointer to a linked list where this node is head (we call it 'down' pointer in below code).

    All linked lists are sorted

    Ex:
    5 -> 10 -> 19 -> 28
    |     |     |     |
    V     V     V     V
    7     20    22    35
    |           |     |
    V           V     V
    8           50    40
    |                 |
    V                 V
    30                45

    Output: 
    5 -> 7 -> 8 -> 10 -> 19 -> 20 -> 22 -> 28 -> 30 -> 35 -> 40 -> 45 -> 50


*/
const SinglyLinkedList = require('../SinglyLinkedList.js');

const flatteningSSL = (list) => {

}

let ssl = new SinglyLinkedList();
