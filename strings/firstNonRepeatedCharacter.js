/*
    Problem: 
    
    Write an efficient function to find the first nonrepeated character in a
    string. For instance, the first nonrepeated character in “total” is 'o' and the
    first nonrepeated character in “teeter” is 'r'. Discuss the efficiency of your
    algorithm.    

    Example: 

    total

    Algorithm:
    - Initialize an empty JavaScript object
    - Iterate through the string
    - If the letter is not a key in the object, then add a new key with value 1
        - If it exists, then increment value
    -  Iterate through the object
    - Time complexity: O(n)
    - Space complexity: O(n)
*/

const firstNonRepeatedCharacter = (string) => {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        obj[string.charAt(i)] = obj[string.charAt(i)] ? obj[string.charAt(i)] + 1 : 1;
    }
    for (let key in obj)
        if (obj[key] == 1) {
            console.log(key);
            return key;
        }
};

firstNonRepeatedCharacter("total"); // o
firstNonRepeatedCharacter("teeter"); // r
