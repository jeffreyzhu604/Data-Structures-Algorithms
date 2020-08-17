/*
    Algorithm:
    - Declare and initialize an empty string variable
    - Start looping backwards from the end of the string
        - Build the empty string
        - Loop until the index of the string >= 0
    - Return string
    
    Time complexity: O(n)
    Space complexity: O(1)
*/
const reverseString = (string) => {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--)
        newString = newString + `${string.charAt(i)}`;
    console.log(newString);
    return newString;
}

reverseString("abcdefg"); // gfedcba
reverseString("i am happy"); // yppah ma i
reverseString("mother"); // rehtom
reverseString("");