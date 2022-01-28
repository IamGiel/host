console.log("===== Begin maxSequence =====");

// The maximum sum subarray problem consists
// in finding the maximum sum of a contiguous
// subsequence in an array or list of integers:

// const { has } = require("browser-sync");

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

// const maxSequenceArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSequenceArr = [-2, 1, -3, 4];
console.log("test array: ", maxSequenceArr);
// const maxSequenceArr = [1,2,3,4,1,4,0,6,1,2];
let nums = [];
var maxSequence = function (arr, start, subLength) {
    // console.log("array: ", arr)
    // brute force:
    // [1,5,2,-1] 6, 8, 7, 7, 6,1
    // start with first index, sum all numbers from index[0] + index[1], save the sum and the addends (result),
    // extend the numbers added, by increasing the index that is included in the addends.  index[0] + index[1] + index[2]...
    // save the sum and the addends (result),
    // repeat until last item in the array,
    // begin the process starting from index[1], then up to the last index[n]
    // once all results are saved, we select the highest value

    // to save the result we will use a hashmap
    let incrLength = 1;
    let hashmap = new Map();
    for (let i = 0; i < subLength; i++) {
        const element = arr[i];
        console.log(element);
        nums.push(element);
        console.log("nums: ", nums);

        if (subLength == arr.length) {
            return;
        } else if (start !== arr.length) {
            maxSequence(arr, start + 1, subLength + 1);
        } else if (start == arr.length) {
            alert("increase start");
            maxSequence(arr, start + 1, subLength + 1);
        }
    }
    return hashmap;
};

console.log(maxSequence(maxSequenceArr, 0, 1));

// function some() {
//   const arr = [1, 2, 3, 4, -5, 6, 7];

//   let left = 0;
//   let right = 0;
//   let sum = arr[left];
//   let max = [sum, left, right];

//   while (left < arr.length && right < arr.length) {
//       if (left === right) {
//           right++;
//           sum += arr[right];
//       } else if (arr[left] <= 0) {
//           left++;
//           sum -= arr[left];
//       }

//       if (sum > max[0]) {
//           max = [sum, left, right];
//       }
//   }
// }

// some();
