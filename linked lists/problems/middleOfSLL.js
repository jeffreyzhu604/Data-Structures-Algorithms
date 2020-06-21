/*
    Find the middle of a given linked list.

    Given a singly linked list, find the middle of the linked list. For example, if the given linked list
    is 1 -> 2 -> 3 -> 4 -> 5, then the output should be 3.

    If there are even nodes, then there would be two middle nodes, we need to print the second middle element.
    For example, if the given linked list is 1 -> 2 -> 3 -> 4 -> 5 -> 6, then the output should be 4.
*/
const SinglyLinkedList = require('../SinglyLinkedList.js');
/*
    Algorithm:
    - Loop through the linked list with a counter
    - Find the number of nodes
    - Loop through again and stop when you reach the middle
    - Time complexity: O(n), Space complexity: O(1)
*/
const findMiddle1 = (list) => {  
    let count = 0;
    let count2 = 0;
    let pointer = list.head;
    while (pointer.getNextNode()) {
        count++;
        pointer = pointer.getNextNode();
    }
    count = count + 1;
    pointer = list.head;
    if (count % 2 == 0) {
        count = count / 2 + 1;
        while (pointer.getNextNode()) {
            count2++;
            if (count2 == count)
                console.log(pointer.getValue());
            pointer = pointer.getNextNode();                            
        }
    } else {
        count = Math.ceil(count / 2);
        while (pointer.getNextNode()) {
            count2++;
            if (count2 == count)
                console.log(pointer.getValue());
            pointer = pointer.getNextNode();                
        }
    }
}

/*
    Algorithm:
    - Use two pointers
    - One pointer moves one node at a time and the one moves two nodes at a time
    - When the "fast" pointer moves to the end, the "slow" pointer will be in the middle
    - Since we have only one loop, this algorithm is twice as fast as the above
*/
const findMiddle2 = (list) => {
    let slow = list.head;
    let fast = list.head;
    while (slow.getNextNode() && fast.getNextNode()) {
        slow = slow.getNextNode();
        fast = fast.getNextNode().getNextNode();
        if (!fast)
            break;
    }
    console.log(slow.getValue());
}

let ssl1 = new SinglyLinkedList();
ssl1.insertHead(1);
ssl1.insertHead(2);
ssl1.insertNthPosition(3, 2); 
ssl1.insertTail(4);
findMiddle1(ssl1); // 1
findMiddle2(ssl1);
// ssl1.display(); // 2 1 -> 2 3 1 -> 2 3 1 4
ssl1.insertNthPosition(5, 3) // 2 3 1 4 -> 2 3 5 1 4
findMiddle1(ssl1); // 5
findMiddle2(ssl1);