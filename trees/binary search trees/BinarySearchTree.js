const Node = require('./Node');
/*
    Operations:
    - Add a node
        - If root == null, new node becomes the head
        - If root != null:
            - If new node value > head value
                - If right == null, then right = new node
                - Check if there exists a node, do a recursive call with current node
            - If new node value < head value
                - If left == null, then left = new node
                - Check if there exists a node, do a recursive call with current node
    - Delete a node
        - There are 3 cases for deleting a node
        - Case 1: Deleting a leaf node
            - node.left == null AND node.right == null
            - The parent of the node is set to null
        - Case 2: Deleting a node with one child
            - node.left == null OR node.right == null
            - The parent of the node becomes either the left or right child of the node
        - Case 3: Deleting a node with two children
            - When deleting node, you replace that current node with either:
                - the maximum of the left subtree
                    - So that every node under it will be less than this node and
                      less than the right subtree
                OR
                - the minimum of the right subtree
                    - So that every node under it will be greater than this node and
                      greater than the left subtree
    - Search for a node
        - DFS
        - BFS
    - Traverse the tree
        - Inorder
        - Preorder
        - Postorder
        - Level order
        - Iteratively --> Stack
*/
/**
 * Class represents a binary search tree
 * @module BinarySearchTree
 */
class BinarySearchTree {
    /**
     * Constructor to create a binary search tree
     */
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        const recursive = (node) => {
            if (newNode.getValue() > node.getValue()) {
                if (!node.right) {
                    node.right = newNode;
                }
                else {
                    recursive(node.right);
                }
            } else if (newNode.getValue() < node.getValue()) {
                if (!node.left) {
                    node.left = newNode;
                }
                else {
                    recursive(node.left);
                }
            }   
        }            
        if (!this.root) {
            this.root = newNode;
            return this.root;
        } else {
            recursive(this.root);
        }        
    }

    delete(value) {
        const recursive = (currentNode) => {
            if (!currentNode) 
                return null;
            else if (value > currentNode.getValue()) {
                currentNode.right = recursive(currentNode.right);
                return currentNode;                
            } else if (value < currentNode.getValue()) {
                currentNode.left = recursive(currentNode.left);
                return currentNode;                
            } else {
                // Case 1: Deleting a leaf node
                if (!currentNode.left && !currentNode.right)
                    return null;
                // Case 2: Deleting a node with one child
                if (!currentNode.left && currentNode.right) {
                    return currentNode.right;
                } else if (!currentNode.right && currentNode.left) {
                    return currentNode.left;
                }
                // Case 3: Deleting a node with two children
                if (currentNode.left && currentNode.right) {
                    let temp = currentNode.right;
                    currentNode = this.findMaxNode(currentNode.left);
                    currentNode.right = temp;
                    return currentNode;
                }
            }
        }
        recursive(this.root);
    }

    findMaxNode(node) {
        if (node.right)
            return this.findMaxNode(node.right);
        return node;
    }

    inorder() {
        let res = '';
        const recursive = (node) => {
            if (node.left) {
                recursive(node.left);
            }
            res = res + `${node.getValue()} `
            if (node.right) {
                recursive(node.right);
            }
        }
        recursive(this.root);
        console.log(res);
    }
}

let bst = new BinarySearchTree();
let bst2 = new BinarySearchTree();

console.log('BST #1');
bst.insert(25);
bst.insert(20);
bst.insert(30);
bst.insert(26);
bst.insert(40);
bst.inorder(); // 20 25 26 30 40
bst.insert(19);
bst.insert(18);
bst.inorder(); // 18 19 20 25 26 30 40
bst.delete(20);
bst.inorder(); // 18 19 25 26 30 40
bst.insert(41);
bst.insert(42);
bst.delete(40);
bst.inorder(); // 18 19 25 26 30 41 42
bst.delete(30);
bst.inorder(); // 18 19 25 26 41 42

console.log('BST #2');
bst2.insert(50);
bst2.insert(30);
bst2.insert(80);
bst2.insert(20);
bst2.insert(40);
bst2.insert(60);
bst2.insert(100);
bst2.insert(90);
bst2.insert(110);
bst2.inorder();
bst2.delete(80);
bst2.inorder();
bst2.insert(55);
bst2.insert(53);
bst2.inorder();
bst2.delete(60);
bst2.inorder();
bst2.delete(20);
bst2.inorder();
bst2.delete(1);