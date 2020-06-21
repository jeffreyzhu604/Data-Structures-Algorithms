/**
 * Class to represent a node in a linked list.
 */
class Node {
    /**
     * Constructor function to create a node
     * @param {*} value - The value for the node
     */
    constructor(value) {
        this.node = {};
        this.node.value = value;
        this.node.next = null;
    }

    /**
     * Returns the value for a node
     * @return 
     */
    getValue() {
        return this.node.value;
    }

    /**
     * Returns the next node in the linked list
     * @return {Node} The next node
     */
    getNextNode() {
        return this.node.next;
    }

    /**
     * Updating the value of a node
     * @param {*} newValue - The new value for a node
     */
    setValue(newValue) {
        this.node.value = newValue;
    }

    /**
     * Updating the next node
     * @param
     */
    setNextNode(newNode) {
        this.node.next = newNode;
    }
}

module.exports = Node;