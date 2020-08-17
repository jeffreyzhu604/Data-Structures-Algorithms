/*
    ProbLem: Given a singly linked list, devise a time- and space-efficient algorithm
    to find the mth-to-last element of the list. Implement your algorithm, taking care
    to handle relevant error conditions. Define mth to last such that when m = 0 the
    last element of the list is returned.

    1 -> 2 -> 3 -> 4 , m = 1 -> We are returning 3
    
    Algorithm:
    - Have two pointers at the head, slow and fast
    - Traverse along the with fast m+1 times
    - Then traverse along the list with slow and fast and when fast == null, then
      slow will be the mth-to-last element of the list
    - Time complexity: O(n + m) -> O(n)
    - Space complexity: O(1)
*/

const findElement = (index) => {
    let fast = this.head, 
}