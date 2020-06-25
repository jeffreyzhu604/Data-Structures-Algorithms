const SinglyLinkedList = require('../SinglyLinkedList');
/*
    Find the n'th node from the end of a given linked list.

    I/P: 1 -> 2 -> 8 -> 3 -> 7 -> 0 -> 4
                              ^              ^
    O/P: 3rd Element from the end is: 7

    1 2 3 4 5
          ^   ^

    Algorithm:
    - Have two pointers that point to the head
    - Have one pointer traverse along the linked list n times
        - EX: Node w/ value = 3
    - Traverse along the list with the two pointers
        - One at head and one starting at node with value = 3
    - Once the node with the head start reaches the end of the linked list (null)
      the node that started at head would be the nth node
*/
const findNth = (head, n) => {
    if (!head) return null;
    let res = head, ptr = head;
    while (n > 0) {
        ptr = ptr.getNextNode();
        n--;
    }
    while (res && ptr) {
        res = res.getNextNode();
        ptr = ptr.getNextNode();
    }
    console.log(res.getValue());
}

let sll = new SinglyLinkedList();
sll.insertTail(1);
sll.insertTail(2);
sll.insertTail(8);
sll.insertTail(3);
sll.insertTail(7);
sll.insertTail(0);
sll.insertTail(4);
findNth(sll.head, 3);
findNth(sll.head, 5);