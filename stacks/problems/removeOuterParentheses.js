/*
    Examples of valid parentheses strings:
    - ""
    - "()"
    - "(())()"
    - "(()(()))"

    A valid parentheses string s is primitive if it is nonempty, and there does not
    exist a way to split it into S = A + B, with A and B nonempty valid parentheses 
    strings.

    Given a valid parentheses string S, consider its primitive decomposition: 
    S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

    Return S after removing the outermost parentheses of every primitive 
    string in the primitive decomposition of S.    
*/
const Stack = require('../Stack');
/*
    Algorithm:
    - Let open = "(" and closed = ")"
    - We also want to build a string of parentheses
    - Since we only want to remove outer parentheses, we want a way to track
      if we have two open parentheses in a row
    - Iterate through the string and if the stack == 0, then push directly
        - Note: All input have valid parentheses strings
    - Since we know that a valid parentheses exist if we have a closing and open
      parentheses, then we don't need to push the closed parentheses as we would 
      only want to keep the closed ones
    - We can keep track of the size of the stack
        - If the stack == 0, we push
        - If the stack > 0, current character is open
            - Then stack.push(currentCharacter);
            - Then we build on the parentheses string
        - If the stack > 0, current character is closed
            - If the stack > 1
                - Then we build on the parentheses string
                - Then stack.pop()
            - Else 
                - Then we build on the parentheses string
    - Time complexity: O(n)
    - Space complexity: O(1) 
*/
let removeOuterParentheses = (parentheseString) => {
    let open = "(", closed = ")";
    let newString = "";
    let stack = new Stack();
    for (let i = 0; i < parentheseString.length; i++) {
        if (stack.size() == 0) {
            stack.push(parentheseString.charAt(i));
        } else if (stack.size() > 0 && parentheseString.charAt(i) == open) {
            stack.push(parentheseString.charAt(i));
            newString += parentheseString.charAt(i);
        } else if (stack.size() > 0 && parentheseString.charAt(i) == closed) {
            if (stack.size() > 1) {
                stack.pop();
                newString += parentheseString.charAt(i);
            } else {
                stack.pop();
            }

        }
    }
    console.log(newString);
    return newString;
}

console.log(removeOuterParentheses("(()(())"));