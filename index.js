"use strict";
const values = [1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 14, 15];

function binarySearchIterative(value, values) {
    let start = 0;
    let end = values.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (value === values[middle]) {
            console.log('Value found at index: ' + middle);
            return middle;
        } else if (value > values[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    console.log('Value not found in the array.');
    return -1;
}

function binarySearchRecursive(value, values, start, end) {
    if (start > end) {
        return -1; // Returns -1 if it doesn't exist
    }

    let middle = Math.floor((start + end) / 2);
    console.log(middle);

    const lookAt = values[middle];
    if (value === lookAt) {
        return middle;
    } else if (value > lookAt) {
        return binarySearchRecursive(value, values, middle + 1, end);
    } else {
        return binarySearchRecursive(value, values, start, middle - 1);
    }
}

// Test the iterative binary search
performance.mark("timer-start");
binarySearchIterative(13, values);
performance.mark("timer-stop");

// Test the recursive binary search
performance.mark("index-start");
binarySearchRecursive(13, values, 0, values.length - 1);
performance.mark("index-stop");
