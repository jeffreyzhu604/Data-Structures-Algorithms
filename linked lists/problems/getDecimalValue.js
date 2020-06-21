/*
    Convert binary number in a linked list to integer

    Given head which is a reference node to a singly-linked list. The value of each node in the
    linked list is either 0 or 1. The linked list holds the binary representation of a number.

    Return the decimal value of the number in the linked list.

    Algorithm:
    - Solution 1:
        - Traverse along the linked list and get a count of how many nodes there are
        - Store each value of each node in an array 
        - [1, 0, 0, 1]
        - Iterate through the array and if the value == 1, then you take 2^(array.length - i - 1)
        - Time complexity: O(n), 2 loops
        - Space complexity: O(n)
        Can we improve?
            - Ignore the array
            - Traverse through the list once and count the number of nodes
            - Traverse the list again, but this time you evaluate the decimal number as follows:
                - count = 4, count2 = 1, if there is a value=1, then decimalNumber = 2^(count-count2) 
            - Time complexity: O(n), Space complexity: O(1)
*/
const SinglyLinkedList = require('../SinglyLinkedList.js');

/*
    Runtime: 84 ms
*/
const getDecimalValue = (head) => {
    let pointer = head;
    let count = 1, count2 = 1;
    let decimalValue = 0;
    if (!pointer.getNextNode())
        if (pointer.getValue() == 1)
            return 1;
        else return 0;
    while (pointer.getNextNode()) {
        count++;
        if (pointer.getNextNode())
            pointer = pointer.getNextNode();
    }
    pointer = head;
    while (pointer.getNextNode()) {
        if (pointer.getValue() == 1) {
            decimalValue = decimalValue + Math.pow(2, count - count2);
        }
        pointer = pointer.getNextNode();
        count2++;
    }
    if (pointer.getValue() == 1)
        decimalValue = decimalValue + Math.pow(2, count - count2);
    console.log(decimalValue);
}

/*
    Runtime: 68 ms

    Some improvements to clean up code:
    - in the while loop, I had:
        while (pointer.getNextNode())

        - This is forces me to check the value afterwards since I would be one node behind 
          while iterating through the linked list. If I check that the pointer is null, that
          means that the linked list has been fully traversed.
*/
const getDecimalValue2 = (head) => {
    let pointer = head;
    let count = 0;
    let decimalValue = 0;
    while (pointer) {
        count++;
        pointer = pointer.getNextNode();
    }
    pointer = head;
    while (pointer) {
        decimalValue += Math.pow(2, count-1) * pointer.getValue();
        pointer = pointer.getNextNode();
        count--;
    }
    console.log(decimalValue);
}

let ssl = new SinglyLinkedList();
// ssl.insertHead(1);
// ssl.insertHead(0);
// ssl.insertHead(0);
// ssl.insertHead(1); // 1 0 0 1 -> decimal value = 9
// ssl.insertHead(0);
// ssl.insertHead(0);
// ssl.insertHead(1); // 1 0 0 1 0 0 1 -> decimal value =73

ssl.insertHead(0);
ssl.insertHead(0);
ssl.insertHead(0);
ssl.insertHead(0);
ssl.insertHead(0);
ssl.insertHead(0);
ssl.insertHead(1);
ssl.insertHead(1);
ssl.insertHead(1);
ssl.insertHead(0);
ssl.insertHead(0);
ssl.insertHead(1);
ssl.insertHead(0);
ssl.insertHead(0);
ssl.insertHead(1);

getDecimalValue2(ssl.head); 