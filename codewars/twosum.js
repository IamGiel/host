// Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.
// For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)
// Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results.
// You can simply print them out as you compute them.

// Brute Force
// iterate thru the array
// start with first index (startingPoint) up to array[k]-1 (endPoint)
// push this into a new temp array (tempArray)
// get the highest value element in this temp array
// push this to result array (resultArray)
// repeat the same process, except, increment the startingPoint ++, up to endPoint = -3

// test params
let k = 3;
let givenArray = [10, 5, 2, 7, 8, 7]; // length 5, k =1, endpoint = length-k
// brute force code solution
let startingPoint = 0;
let endPoint = givenArray.length - k;
let tempArray = [];
let resultArray = [];

getMaxOfSubArray = (arr, starting, end) => {
    if (starting == endPoint + 1) {
        console.log("end result");
        return;
    } else {
        for (let i = starting; i <= starting + 2; i++) {
            const element = arr[i];
            tempArray.push(element);
        }
        if (tempArray.length == k) {
            resultArray.push(Math.max(...tempArray));
            tempArray = [];
        }
        getMaxOfSubArray(arr, starting + 1, end + 1);
    }

    return resultArray;
};
// console.time("start")
// console.log(getMaxOfSubArray(givenArray, 0, endPoint))
// console.timeEnd("start")

var maxSlidingWindow = function (nums, k) {
    let queue = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let someVAr = queue[queue.length - 1];
        while (queue.length > 0 && someVAr < num) {
            queue.pop();
        }
        queue.push(num);
        if (i >= k - 1) {
            const max = queue[0];
            result.push(max);
            console.log(
                ">>>>>>>>>>>>>>>>> ",
                "nums: ",
                nums,
                nums[i - k + 1],
                "i-k+1: ",
                i - k + 1,
                "|||||",
                "max: ",
                max,
                "queue: ",
                queue,
                "result: ",
                result
            );
            if (nums[i - k + 1] === max) {
                queue.shift();
            }
        }
    }
    return result;
};

// console.log(maxSlidingWindow(givenArray, k))

// Write a function that takes an array of numbers (integers for the tests) and a target number.
// It should find two different items in the array that, when added together, give the target value.
// The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers;
//   target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
    let queue = [];
    let tempObj = {};
    console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        console.log(target - element, element);
        tempObj[i] = element;
        queue.push(target - element);
    }

    // return here
    // console.log(tempObj, queue)
    // console.log(Object.keys(tempObj).length, Object.keys(queue).length)
    let v;

    for (v in tempObj) {
        console.log(queue);
        // console.log(tempObj.hasOwnProperty(v))
        // console.log(tempObj[v], queue[v])
        if (queue.indexOf(tempObj[v]) !== -1) {
            console.log(v, tempObj[v]);
        }
        return v;
    }
}

// const testArr = [9,2,5];
const testArr = [3, 2, 4];
const target = 6;
// console.log(twoSum(testArr,target))

// hash maps
let first_hashmap = new Map();
let second_hashmap = new Map([
    [1, "first"],
    [2, "second"],
    [3, "three"],
    [false, "falsy"],
    ["name", "Mr Bean"],
]);

// console.log(first_hashmap, second_hashmap)
// console.log("first_hashmap getSize: ", first_hashmap.size)
// console.log("second_hashmap getSize: ", second_hashmap.size)
// console.log("hashmap get: ", second_hashmap.get(2))
// console.log("hashmap get: ", second_hashmap.get("name"))
// console.log("hashmap get: ", second_hashmap.get(false))

function twoSumWithHash(nums, target) {
    console.log("nums: ", nums, "target: ", target);
    let map = new Map();
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        console.log("START:");
        console.log("1. let compliment =  target - nums[i]: ", complement);
        console.log(
            "2. were gonna set each nums[i] element as a key in a hashmap and the value is its index: ",
            "(",
            nums[i],
            ",",
            i,
            ")"
        );

        if (map.has(complement)) {
            map.set(nums[i], i);
            console.log("map: ", map);
            console.log(
                `3. We will then keep checking: if map.has(compliment) == true: this means we found, compliment: ${complement}, as one of the keys in the hashmap`,
                map,
                `if false, we repeat. (current output: ${map.has(complement)}),`
            );
            console.log(
                `Here we found the compliment: ${complement}, as one of the keys in the hashmap above! We then can conclude that`
            );
            console.log(
                `map.get(complement) is like map.get(${complement}) and it returns the value of the complement: ${map.get(
                    complement
                )}`
            );
            console.log(
                `this is the index in nums array, that can be added to nums[current iteration i], ${i} that add up to target: ${target}`
            );
            console.log(
                `simply put: nums[map.get(complement)] + nums[i] = target.  REAL VAL computation:  ${
                    nums[map.get(complement)]
                } + ${nums[i]} = ${nums[map.get(complement)] + nums[i]}`
            );
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
        console.log("the map now looks like so, map: ", map);
        console.log(
            `3. We will then keep checking: if map.has(compliment) == true: this means we found, compliment: ${complement}, as one of the keys in the hashmap`,
            map,
            `if false, we repeat. (current output: ${map.has(complement)}),`
        );
    }
}

console.log(twoSumWithHash(testArr, target));

const twosum3 = function (nums, k) {
    let hashmap = new Map();
    for (let i = 0; i <= nums.length; i++) {
        let complement = k - nums[i];
        if (hashmap.has(complement) && hashmap.has(complement) > 0) {
            return [hashmap.get(complement), i];
        }
        hashmap.set(nums[i], i);
    }
};
console.time("start");
console.log(twosum3(testArr, target));
console.timeEnd("start");
//
const twoSum2 = function (nums, target) {
    const comp = {};
    for (let i = 0; i < nums.length; i++) {
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]], i];
        }
        comp[target - nums[i]] = i;
    }
};
console.time("start");
console.log(twoSum2(testArr, target));
console.timeEnd("start");

// with object
function twoSumWithObj(nums, target) {
    console.log("nums: ", nums, "target: ", target);
    // let map = new Map();
    const mapObj = {};
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        // if (map.has(complement)) {
        //     // map.set(nums[i], i);

        //     return [map.get(complement), i];
        // }

        if (complement in mapObj) {
            console.log(complement);
            return [mapObj[complement], i];
        }

        // map.set(nums[i], i);
        mapObj[nums[i]] = i;
    }
}

console.log(twoSumWithObj(testArr, target));
