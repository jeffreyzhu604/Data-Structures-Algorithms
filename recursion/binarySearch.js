/*
    Problem: 
    Implement a function to perform a binary search on a sorted array
    of integers to find the index of a given integer. Comment on the efficiency 
    of this search, and compare it with other search methods.

    Binary search:
    - Have a high/low
    - Mid updates
    - If val == mid return mid
    - If val >= low && val < mid
        - high = mid - 1
    - If val <= high && val > mid
        - low = mid + 1

    Base case: 
    - If val == mid

    Recursive case:
    - pass in low and high values
*/

const binarySearch = (arr, val) => {
    let low = 0, high = arr.length - 1;

    const recursive = (low, high) => {
        let mid = Math.ceil((low + high)/2);
        console.log(mid)
        if (val == arr[mid]) {
            console.log(mid);
            return mid
        }
        if (val >= arr[low] && val < arr[mid])
            recursive(low, mid - 1);
        else if (val <= arr[high] && val > arr[mid])
            recursive(mid + 1, high);
    }
    return recursive(low, high);
}

/*
    Mid: 3, 5 
*/
binarySearch([1, 2, 3, 4, 5, 6, 7], 6); 