/*
    Problem: head and tail are global pointers to the first and last element, respectively, of a singly
    linked list of integers. Implement C functions for the following prototypes: 

    bool delete(Element * elem);
    bool insertAfter(Element *elem, int data);

    The argument to delete is the element to be deleted. The two arguments to
    insertAfter give the element after which the new element is to be inserted and
    the data for the new element. It should be possible to insert at the beginning of the
    list by calling insertAfter with NULL as the element argument. These functions
    should return a boolean indicating success.
    Your functions must keep the head and tail pointers current.

    delete:
    - Search for the node you want to delete - O(n)
    - 3 cases:
        - delete from the head
            - Want a reference, variable = "reference" to the node the head node is pointing to
            - Then dereference the head node from the second node by pointing it to null
            - reference then becomes the new head
        - delete somewhere in the middle
            - 1 -> 2 -> 3 -> 4
            - iterate through the list with a pointer, prev, to save the previous node
            - prev updates along the traversal, but if the node is found, prev does not update
            - prev.next = current.next
        - delete from the tail
            - 1 -> 2 -> 3 -> 4
            - same idea as deleting somewhere in the middle

    insertAfter:
    - 1 -> 2 -> 3 -> 4
        - 1 -> 2 -> 3 -> 5 -> 4
    - insertAfter(node3, 5)
    - Traverse along the list to find the node
    - Have a reference to the node's next node
    - Set current next node to new node
    - Set new node next node to the reference
*/

const deleteNode = (node) => {
    // Deleting from head
    if (node == this.head) {
        let ptr = this.head.next;
        this.head = ptr;
    } else { // 1 -> 2 -> 3 -> 4
        let prev = null;
        let current = this.head;
        while (current) {
            if (current == node) {
                prev.next = current.next;
                break;                
            }
            current = current.next;
            prev = current;
        }
        if (node == this.tail)
            this.tail = prev;
    }
}

const insertAfter = (node, data) => {
    let ptr = null;
    let current = this.head;
    let newNode = new Node(data);
    while (current) {
        if (current == node) {
            ptr = current.next;
            current.next = newNode;
            newNode.next = ptr;
            break;
        }
        current = current.next;
    }
}