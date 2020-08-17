/*

Problem: 

Write an efficient function that deletes characters from an ASCII
string. Use the prototype
string removeChars( string str, string remove );
where any character existing in remove must be deleted from str. For example,
given a str of "Battle of the Vowels: Hawaii vs. Grozny" and a remove of
"aeiou", the function should transform str to “Bttl f th Vwls: Hw vs. Grzny”.
Justify any design decisions you make, and discuss the efficiency of your solution.    

Algorithm:
- Store the characters of the remove string in a JavaScript object
    - O(m) time and memory
- Have a new string variable to build on
- Iterate through the string and if that character exists in the object,
  you ignore it and continue loooping
- Return final string
- Time complexity: O(n)
- Space complexity: O(m)
*/

const removeSpecificCharacters = (string, remove) => {
    let obj = {};
    let newString = '';
    for (let i = 0; i < remove.length; i++)
        obj[remove.charAt(i)] = obj[remove.charAt(i)] ? obj[remove.charAt(i)] + 1 : 1;
    
    for (let i = 0; i < string.length; i++) 
        if (!obj[string.charAt(i)])
            newString = newString + `${string.charAt(i)}`;
    console.log(newString);
    return newString;
}

// Output: “Bttl f th Vwls: Hw vs. Grzny”
removeSpecificCharacters("Battle of the Vowels: Hawaii vs. Grozny", "aeiou");

