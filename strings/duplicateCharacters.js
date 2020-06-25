/*
    Write an algorithm to find duplicate characters in a string.

    Approaches:

    1) 
        - Frequency counter
        - Iterate through the string and add each character as a property
          of an object
        - If the same string appears, increment the associated with it
        - Iterate through the object again and print the character with value
          greater than 1
        - Time complexity: O(n), with 2 loops
        - Space complexity: O(n)

    Input: saasbcdd
    Output: sad

    JavaScript: 
        - Objects
            - object.propertyName
            - object[expression]
*/
const duplicateCharacters = (string) => {
    let res = {};
    let char = '';
    for (let i = 0; i < string.length; i++) {
        res[string.charAt(i)] = res[string.charAt(i)] ? res[string.charAt(i)] + 1 : 1;    
    }
    for (let key in res)
        if (res[key] > 1)
            char = char + `${key} `;
    console.log(char);
}

duplicateCharacters("saasbcdd");
duplicateCharacters("aabbbccddeffgg");