/*
    Given a sorted list and a difference value, find the indices of list such that 
    the current element and the next element has that difference value.

    [1, 2, 3, 5, 7], 2
              ^  ^

    Algorithm:
    - Have two pointers, one starting at indices i = 0 and j = 0
    - You traverse along the array:
        - Check if arr[j] - arr[i] == diff
        - If not, increment the indices
    - Traverse until i + 1 < arr.length - 1 since you are looking for two consecutive elements of the
      array and do not want to access out of bounds element
    - Time complexity: O(n)
    - Space complexity: O(1)
*/
const differenceValue = (arr, diff) => {
    let j = 1;
    for (let i = 0; i + 1 < arr.length - 1; i++) {    
        if (arr[j] - arr[i] == diff)
            console.log(`i: ${i}, j: ${j}, arr[i]: ${arr[i]}`);
        j = j + 1;
    }
}

differenceValue([1,2,3,5,7], 2);