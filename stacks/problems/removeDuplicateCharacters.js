/*
    Given a string S of lowercase letters, a duplicate removal consists of choosing 
    two adjacent and equal letters, and removing them.

    We repeatedly make duplicate removals on S until we no longer can.

    Return the final string after all such duplicate removals have been made.  
    It is guaranteed the answer is unique.

    Algorithm:
    - If stack == 0
        - stack.push
    - If stack > 0 and stack.peak() == currentCharacter
        - stack.pop() 
    - If stack > 0 and stack.peak() != currentCharacter
        - stack.push()
    - stack.pop() while building a string
    Example: "saasbas"
    Stack: b a s

    Time complexity: O(n), two loops
    Space complexity: O(n)
*/
const Stack = require('../Stack');

const removeDuplicateCharacters = (string) => {
    let stack = new Stack();
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        console.log(`current char: ${string.charAt(i)}`);
        if (stack.size() == 0)
            stack.push(string.charAt(i));
        else if (stack.size() > 0 && stack.peak() != string.charAt(i)) 
            stack.push(string.charAt(i));
        else if (stack.size() > 0 && stack.peak() == string.charAt(i))
            stack.pop();
    }
    while (stack.size() > 0) {
        newString = `${stack.pop().getValue()}` + newString;
    }
    return newString;
}

console.log(removeDuplicateCharacters("saasbas"));