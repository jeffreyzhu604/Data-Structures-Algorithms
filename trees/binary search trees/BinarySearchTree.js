const Node = require('./Node');
const Stack = require('../../stacks/Stack');
const Queue = require('../../queues/Queue');
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

    /*
        Algorithm:
        - Push root node to stack and set currentNode = currentNode.left until 
          currentNode = null
        - If currentNode = null AND stack is not empty
            - Print top of stack, pop the stack, set current = poppedNode.right
        - If currentNode = null AND stack is empty
            - Return
    */
    inorderIter() {
        let stack = new Stack();
        let res = '';
        let current = this.root;
        while(true) {
            if (current) {
                stack.push(current);
                current = current.getLeftNode();                
            }
            if (current == null && stack.size() > 0) {
                let poppedNode = stack.pop();
                res = res + `${poppedNode.getValue().getValue()} `;
                current = poppedNode.getValue().getRightNode();
            }
            if (current == null && stack.size() == 0) {
                console.log(res);
                break;
            }            
        }
    }

    preorder() {
        let res = '';
        const recursive = (node) => {
            res = res + `${node.getValue()} `;
            if (node.left)
                recursive(node.left);
            if (node.right)
                recursive(node.right);
        }
        recursive(this.root);
        console.log(res);
    }

    /*
        Algorithm:
        - Push the root
        - If stack is not empty
            - Pop and print
            - Push the right of the popped
            - Push the left of the popped
    */
    preorderIter() {
        let res = '';
        let stack = new Stack();
        stack.push(this.root);
        while (true) {
            if (stack.size() > 0) {
                let removed = stack.pop();
                res = res + `${removed.getValue().getValue()} `;
                if (removed.getValue().getRightNode())
                    stack.push(removed.getValue().getRightNode());
                if (removed.getValue().getLeftNode())
                    stack.push(removed.getValue().getLeftNode());
            } else if (stack.size() == 0) {
                break;
            }
        }
        console.log(res);
    }

    postorder() {
        let res = '';
        const recursive = (node) => {
            if (node.left)
                recursive(node.left);
            if (node.right)
                recursive(node.right);
            res = res + `${node.getValue()} `;
        }
        recursive(this.root);
        console.log(res);
    }
    /*
        Algorithm:
        - Start at the root and push it
        - Set the current to the left node
        - 
    */
    postorderIter() {

    }

    levelOrder() {
        let queue = new Queue();
        let res = '';
        queue.push(this.root);
        while(queue.size() > 0) {
            let removed = queue.pop();
            res = res + `${removed.getValue().getValue()} `;
            if (removed.getValue().getLeftNode())
                queue.push(removed.getValue().getLeftNode());
            if (removed.getValue().getRightNode())
                queue.push(removed.getValue().getRightNode());
        }
        console.log(res);
    }

    /*

    */
    getHeight(node) {
        if (!node) return 0;
        return 1 + Math.max(this.getHeight(node.getLeftNode()), this.getHeight(node.getRightNode()));
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
/*
                                    50
                                  /    \
                                30      80
                               /  \    /  \
                             20   40  60   100
                                          /   \
                                         90   110 

                                    50
                                  /    \
                                30      60
                               /  \       \
                             20   40      100
                                          /   \
                                         90   110    

                                    50
                                  /    \
                                30      60
                               /  \    /  \
                             20   40  55  100
                                          /   \
                                         90   110      

                                    50
                                  /    \
                                30      60
                               /  \    /  \
                             20   40  55  100
                                     /    /   \
                                    53   90   110 

                                    50
                                  /    \
                                30      55
                               /  \    /  \
                             20   40  53  100
                                          /   \
                                        90   110     

                                    50
                                  /    \
                                30      55
                                  \    /  \
                                  40  53  100
                                          /  \
                                         90   110                                                                                                                                                                                                       
                                         

    Inorder Traversal:
    Output: 30 40 50 53 55 90 100 110

    Preorder Traversal:
    Output: 50 30 40 55 53 100 90 110

    Postorder Traversal:
    Output: 40 30 53 90 110 100 55 50

    Level Order Traversal:
    Output: 50 30 55 40 53 100 90 110

    Height: 4
*/
console.log('BST #2: Inorder Traversal')
bst2.inorderIter();
bst2.inorder();

console.log('BST #2: Preorder Traversal')
bst2.preorderIter();
bst2.preorder();

console.log('BST #2: Postorder Traversal')
bst2.postorderIter();
bst2.postorder();

console.log('BST #2: Level Order Traversal')
bst2.levelOrder();

console.log('BST #2: Height');
console.log(bst2.getHeight(bst2.root));
