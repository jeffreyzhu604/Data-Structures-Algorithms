/*
    Check if a string is a palindrome:
    
    Ex: racecar
        bananaananab
        icecreamm
        dice
        iceeci

    Algorithm:
    - Have two pointers to point to either ends of the string
    - Check if the two characters are equal
        - If not equal, return false
    - Return true 
    - Time complexity: O(n)
    - Space complexity: O(1)
*/
const isPalindrome = (string) => {
    let end = string.length - 1; // 6
    for (let start = 0; start < end; start++) {
        if (string.charAt(start) != string.charAt(end)) {
            console.log(false);
            return false;            
        }
        end--;
    }
    console.log(true);
    return true;
}

isPalindrome("racecar"); // true
isPalindrome("bananaananab"); // true
isPalindrome("icecreamm"); // false
isPalindrome("dice"); // false
isPalindrome("iceeci"); // true