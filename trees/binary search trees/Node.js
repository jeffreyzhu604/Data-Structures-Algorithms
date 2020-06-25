/**
 * Class represents a node for a binary search tree
 * @module Node 
 */
class Node {
    /**
     * Constructor to create a node
     * @param {number} value - The value for the node for a binary search tree
     */
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    /**
     * Returns the node value
     */
    getValue() {
        return this.value;
    }

    /**
     * Returns the left node
     */
    getLeftNode() {
        return this.left;
    }

    /**
     * Returns the right node
     */
    getRightNode() {
        return this.right;
    }

    /**
     * Updates the value for the node
     * @param {number} newValue - The new value for the node
     */
    setValue(newValue) {
        this.value = newValue;
    }

    /**
     * Updates the left pointer to a new node
     * @param {Node} newNode - The new left node for the node
     */
    setLeftNode(newNode) {
        this.left = newNode;
    }

    /**
     * Updates the right pointer to a new node
     * @param {Node} newNode - The new right node for the node
     */
    setRightNode(newNode) {
        this.right = newNode;
    }
}

module.exports = Node;