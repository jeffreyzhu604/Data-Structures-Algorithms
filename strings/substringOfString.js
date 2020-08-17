/*
    Problem: 
    Finding a substring of a string

    "bbobb", Find "bob".
    "ice cream", Find "ice b".

    Example: 
    "bbobb" -> "bob"
      ^

    Edge cases:
    - Empty string
    - Wrong type
    - If substring is larger than string

    Algorithm:
    - Two strings, given and find
    - Sliding window problem
    - Three pointers, back and front for the sliding window and one to track the
      string we're looking for, ptr
        - Iterate through the given string
        - If current character of given is equal to the first character of find
            - Increment the front pointer and ptr
        - If current character of given is not equal to the current character of find
            - Set the back to the current, decrement the counter of the iteration
              and start again
        - Build a string if characters match and return true if substring is found
    - Time complexity:
    - Space complexity: O(1)
*/

const substringOfString = (string, substring) => {
    let back = 0, front = 0, ptr = 0;
    let res = '';
    for (let i = 0; i < string.length; i++) {
        console.log(`front: ${front}, ptr: ${ptr}, string: ${string.charAt(i)}, substring: ${substring.charAt(ptr)}`);
        if (string.charAt(i) == substring.charAt(ptr)) {
            res = res + `${string.charAt(i)}`;
            front = front + 1;
            ptr = ptr + 1;
            if (res == substring) {
                console.log(res);
                return true;
            }
        } else if (front == string.length) {
            return false;
        } else {
            back = front;
            i = i - 1;
            ptr = 0;
            res = '';
        }
    }
}   

substringOfString("bbobb", "bob"); // true
substringOfString("ice cream", "ice b"); // false
substringOfString("Harry Potter and Dragons", "Harry"); // true
substringOfString("Who you got to win the game", "wiin"); // false
substringOfString("What the heck", "the"); // true 
