/*
    Search for an element in an sorted, but rotated array.

    Example:

    12, 14, 18, 19, 20, 6, 8, 9 -> Searching for 8
     0   1   2   3  4  5  6  7
                          ^ , midpoint

    - Start of the sorted sequence is at index 4 and end is at index 3
    - Two sections of sorted arrays
    - 2 Approach:
        - Linear search: O(n)
        - Binary search: O(log n)
            - Since we know there are two sections that are sorted
            - Must be unique elements otherwise we must use linear search

    Binary search approach:

    Case 1: a[mid] == x
    Case 2: a[mid] <= a[high]
        - Right half is sorted
        - If x > a[mid] && x <= a[high]
            - low = mid + 1
        - Else 
            - high = mid - 1
    Case 3: a[low] <= a[mid]
        - Left half is sorted
        - If x >= a[low] && x < a[mid]
            - high = mid - 1
        - Else 
            - low = mid + 1
    Idea: 
    - To keep dividing the array into two sections, one sorted and one unsorted
*/
const sortedRotatedArray = (arr, num) => {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        // 0 1 2 3
        let mid = Math.ceil((low + high)/2);
        if (arr[mid] == num) return mid;
        if (arr[mid] <= arr[high]) {
            // Right side is sorted
            if (num > arr[mid] && num <= arr[high])
                low = mid + 1;
            else 
                high = mid - 1;
        } else if (arr[low] <= arr[mid]) {
            // Left is sorted
            if (num >= arr[low] && num < arr[mid])
                high = mid - 1;
            else 
                low = mid + 1;
        }
    }
    return -1;
}

console.log(sortedRotatedArray([12, 14, 18, 19, 20, 6, 8, 9], 20)); // 4
console.log(sortedRotatedArray([12, 14, 18, 19, 20, 21, 8, 9], 8)); // 6
console.log(sortedRotatedArray([12, 14, 18, 19, 3, 6, 8, 9], 19)); // 3
console.log(sortedRotatedArray([12, 14, 18, 19, 2, 6, 8, 9], 2)); // 4