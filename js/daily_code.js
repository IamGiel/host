// // Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.
// // For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
// // 10 = max(10, 5, 2)
// // 7 = max(5, 2, 7)
// // 8 = max(2, 7, 8)
// // 8 = max(7, 8, 7)
// // Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results.
// // You can simply print them out as you compute them.

// // Brute Force
// // iterate thru the array
// // start with first index (startingPoint) up to array[k]-1 (endPoint)
// // push this into a new temp array (tempArray)
// // get the highest value element in this temp array
// // push this to result array (resultArray)
// // repeat the same process, except, increment the startingPoint ++, up to endPoint = -3

// // test params
// let k = 3;
// let givenArray = [10, 5, 2, 7, 8, 7]; // length 5, k =1, endpoint = length-k
// // brute force code solution
// let startingPoint = 0;
// let endPoint = givenArray.length - k;
// let tempArray = [];
// let resultArray = [];

// getMaxOfSubArray = (arr, starting, end) => {
//     if (starting == endPoint + 1) {
//         console.log("end result");
//         return;
//     } else {
//         for (let i = starting; i <= starting + 2; i++) {
//             const element = arr[i];
//             tempArray.push(element);
//         }
//         if (tempArray.length == k) {
//             resultArray.push(Math.max(...tempArray));
//             tempArray = [];
//         }
//         getMaxOfSubArray(arr, starting + 1, end + 1);
//     }

//     return resultArray;
// };
// // console.time("start")
// // console.log(getMaxOfSubArray(givenArray, 0, endPoint))
// // console.timeEnd("start")

// var maxSlidingWindow = function (nums, k) {
//     let queue = [];
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         let someVAr = queue[queue.length - 1];
//         while (queue.length > 0 && someVAr < num) {
//             queue.pop();
//         }
//         queue.push(num);
//         if (i >= k - 1) {
//             const max = queue[0];
//             result.push(max);
//             console.log(
//                 ">>>>>>>>>>>>>>>>> ",
//                 "nums: ",
//                 nums,
//                 nums[i - k + 1],
//                 "i-k+1: ",
//                 i - k + 1,
//                 "|||||",
//                 "max: ",
//                 max,
//                 "queue: ",
//                 queue,
//                 "result: ",
//                 result
//             );
//             if (nums[i - k + 1] === max) {
//                 queue.shift();
//             }
//         }
//     }
//     return result;
// };

// // console.log(maxSlidingWindow(givenArray, k))

// // Write a function that takes an array of numbers (integers for the tests) and a target number.
// // It should find two different items in the array that, when added together, give the target value.
// // The indices of these items should then be returned in a tuple like so: (index1, index2).

// // For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// // The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers;
// //   target will always be the sum of two different items from that array).

// function twoSum(numbers, target) {
//     let queue = [];
//     let tempObj = {};
//     console.log(numbers);

//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         console.log(target - element, element);
//         tempObj[i] = element;
//         queue.push(target - element);
//     }

//     // return here
//     // console.log(tempObj, queue)
//     // console.log(Object.keys(tempObj).length, Object.keys(queue).length)
//     let v;

//     for (v in tempObj) {
//         console.log(queue);
//         // console.log(tempObj.hasOwnProperty(v))
//         // console.log(tempObj[v], queue[v])
//         if (queue.indexOf(tempObj[v]) !== -1) {
//             console.log(v, tempObj[v]);
//         }
//         return v;
//     }
// }

// // const testArr = [9,2,5];
// const testArr = [3, 2, 4];
// const target = 6;
// // console.log(twoSum(testArr,target))

// // hash maps
// let first_hashmap = new Map();
// let second_hashmap = new Map([
//     [1, "first"],
//     [2, "second"],
//     [3, "three"],
//     [false, "falsy"],
//     ["name", "Mr Bean"],
// ]);

// // console.log(first_hashmap, second_hashmap)
// // console.log("first_hashmap getSize: ", first_hashmap.size)
// // console.log("second_hashmap getSize: ", second_hashmap.size)
// // console.log("hashmap get: ", second_hashmap.get(2))
// // console.log("hashmap get: ", second_hashmap.get("name"))
// // console.log("hashmap get: ", second_hashmap.get(false))

// function twoSumWithHash(nums, target) {
//     console.log("nums: ", nums, "target: ", target);
//     let map = new Map();
//     for (var i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         console.log("START:");
//         console.log("1. let compliment =  target - nums[i]: ", complement);
//         console.log(
//             "2. were gonna set each nums[i] element as a key in a hashmap and the value is its index: ",
//             "(",
//             nums[i],
//             ",",
//             i,
//             ")"
//         );

//         if (map.has(complement)) {
//             map.set(nums[i], i);
//             console.log("map: ", map);
//             console.log(
//                 `3. We will then keep checking: if map.has(compliment) == true: this means we found, compliment: ${complement}, as one of the keys in the hashmap`,
//                 map,
//                 `if false, we repeat. (current output: ${map.has(complement)}),`
//             );
//             console.log(
//                 `Here we found the compliment: ${complement}, as one of the keys in the hashmap above! We then can conclude that`
//             );
//             console.log(
//                 `map.get(complement) is like map.get(${complement}) and it returns the value of the complement: ${map.get(
//                     complement
//                 )}`
//             );
//             console.log(
//                 `this is the index in nums array, that can be added to nums[current iteration i], ${i} that add up to target: ${target}`
//             );
//             console.log(
//                 `simply put: nums[map.get(complement)] + nums[i] = target.  REAL VAL computation:  ${
//                     nums[map.get(complement)]
//                 } + ${nums[i]} = ${nums[map.get(complement)] + nums[i]}`
//             );
//             return [map.get(complement), i];
//         }

//         map.set(nums[i], i);
//         console.log("the map now looks like so, map: ", map);
//         console.log(
//             `3. We will then keep checking: if map.has(compliment) == true: this means we found, compliment: ${complement}, as one of the keys in the hashmap`,
//             map,
//             `if false, we repeat. (current output: ${map.has(complement)}),`
//         );
//     }
// }

// // console.log(twoSumWithHash(testArr,target))

// const twosum3 = function (nums, k) {
//     let hashmap = new Map();
//     for (let i = 0; i <= nums.length; i++) {
//         let complement = k - nums[i];
//         if (hashmap.has(complement) && hashmap.has(complement) > 0) {
//             return [hashmap.get(complement), i];
//         }
//         hashmap.set(nums[i], i);
//     }
// };
// console.time("start");
// console.log(twosum3(testArr, target));
// console.timeEnd("start");
// //
// const twoSum2 = function (nums, target) {
//     const comp = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (comp[nums[i]] >= 0) {
//             return [comp[nums[i]], i];
//         }
//         comp[target - nums[i]] = i;
//     }
// };
// console.time("start");
// console.log(twoSum2(testArr, target));
// console.timeEnd("start");

// // get the index of the clicked word in a sentecnec string

let sentence = "the price of water is like the Price of gold.";
// // price can be clicked in two different instance
// // create a function that when clicking the word, that it returns the word and the index (start, end) position of the clicked word.
// // in the example above, when clicking the first appearance of the word 'price' your function should return:
// // ["price", 4, 8]

// // sudo

function findInd() {
    let indexes = [];
    let word = "price".toLocaleLowerCase().trim();
    // console.log(sentence.toLocaleLowerCase().indexOf(word));
    while (sentence.toLocaleLowerCase().indexOf(word)) {
        return [];
    }
    indexes.push();

    console.log(indexes);
}

findInd();

let str = "Testing JavaScript, JavaScript is the Best, JavaScript is Ultimate";
function findAllIndexes(string, word) {
    console.log(string);
    let result = [];
    let dif = 0;
    while (true) {
        let index = string.indexOf(word);
        if (index === -1) {
            break;
        } else {
            result.push(index + dif);
            let cur = string.length;
            string = string.substring(index + word.length); // will decrease
            dif += cur - string.length;
        }
    }
    return result;
}
// console.log(findAllIndexes(str, "JavaScript"));

function myOwn(original_string, target) {
    console.log(original_string, target);
    let targetLength = target.length;
    console.log("target word length", targetLength);
    let result = [];
    let difference = 0;
    if (original_string.indexOf(target) == -1) {
        return result;
    } else {
        while (original_string.indexOf(target) !== -1) {
            result.push(original_string.indexOf(target) + difference);
            difference += targetLength + original_string.indexOf(target);
            // remove the strings with the first instance of target
            original_string = original_string.substring(
                original_string.indexOf(target) + targetLength
            );
            console.log(original_string);
        }
    }

    console.log(result);
}

myOwn(str, "JavaScript");

let db_string = "";
let user_string = "";

// ============= string comparison ==============

// function htmlSetUp() {
//     document.getElementById("db_string").placeholder = db_string;
// }
// htmlSetUp();
function trackChangeDBString(value) {
    db_string = value;
    console.log(db_string);
}

function trackChangeUserString(value) {
    user_string = value;
    console.log(user_string);
}

function stringTrimmer(thestring) {
    return thestring.replaceAll(" ", "").toLocaleLowerCase().trim();
}

// console.log(lowercaseTrimmer("The jhehrjii Dj didheEJDJ"));
function checkWordExist(word, phrase) {
    console.log("word = ", stringTrimmer(word));
    console.log("phrase = ", stringTrimmer(phrase));
    if (stringTrimmer(phrase).includes(stringTrimmer(word))) {
        console.log(`The word ${word} is found in the db string '${phrase}'.`);
    } else {
        console.log(
            `The word ${word} is not found in the db string '${phrase}'.`
        );
    }
}

// checkWordExist(user_string, db_string);

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0) costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue =
                            Math.min(Math.min(newValue, lastValue), costs[j]) +
                            1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}
function compareTwoStrings(first, second) {
    first = first.replace(/\s+/g, "");
    second = second.replace(/\s+/g, "");

    if (first === second) return 1; // identical or empty
    if (first.length < 2 || second.length < 2) return 0; // if either is a 0-letter or 1-letter string

    let firstBigrams = new Map();
    for (let i = 0; i < first.length - 1; i++) {
        const bigram = first.substring(i, i + 2);
        const count = firstBigrams.has(bigram)
            ? firstBigrams.get(bigram) + 1
            : 1;

        firstBigrams.set(bigram, count);
    }

    let intersectionSize = 0;
    for (let i = 0; i < second.length - 1; i++) {
        const bigram = second.substring(i, i + 2);
        const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;

        if (count > 0) {
            firstBigrams.set(bigram, count - 1);
            intersectionSize++;
        }
    }

    return (2.0 * intersectionSize) / (first.length + second.length - 2);
}

function findBestMatch(mainString, targetStrings) {
    if (!areArgsValid(mainString, targetStrings))
        throw new Error(
            "Bad arguments: First argument should be a string, second should be an array of strings"
        );

    const ratings = [];
    let bestMatchIndex = 0;

    for (let i = 0; i < targetStrings.length; i++) {
        const currentTargetString = targetStrings[i];
        const currentRating = compareTwoStrings(
            mainString,
            currentTargetString
        );
        ratings.push({ target: currentTargetString, rating: currentRating });
        if (currentRating > ratings[bestMatchIndex].rating) {
            bestMatchIndex = i;
        }
    }

    const bestMatch = ratings[bestMatchIndex];

    return {
        ratings: ratings,
        bestMatch: bestMatch,
        bestMatchIndex: bestMatchIndex,
    };
}

function compare() {
    if (db_string !== "" && user_string !== "") {
        console.log(
            "strings to compare: ",
            stringTrimmer(db_string),
            " and ",
            stringTrimmer(user_string)
        );
        console.log(
            "levenshtein distance score (0 is most confident): ",
            editDistance(stringTrimmer(db_string), stringTrimmer(user_string))
        );

        console.log(
            "Dice theory score (1 is most confident): ",
            compareTwoStrings(
                stringTrimmer(user_string),
                stringTrimmer(user_string)
            )
        );

        if (document.getElementById("laven").value !== "") {
            document.getElementById("laven").innerHTML = editDistance(
                stringTrimmer(db_string),
                stringTrimmer(user_string)
            );
        }
        if (document.getElementById("dice").value !== "") {
            document.getElementById("dice").innerHTML = compareTwoStrings(
                user_string,
                db_string
            );
        }
    }
}

// some() returns true or false

const words = ["Jan", "Feb", "Mar"];
// console.log(array1.includes(2));
const stringTest = "is it Feb already?";
let arr = stringTest.split(" ");

const findOne = (haystack, arr) => {
    // console.log("haystack ", haystack, "arr ", arr);
    return arr.some((v) => haystack.includes(v));
};

// console.log(findOne(words, arr));

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query) returns a new array of matched elements
 */
const filterItems = (arr, query) => {
    return arr.filter(
        (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
};
// console.log(filterItems(fruits, q)); // ['apple', 'grapes']
// console.log(filterItems(fruits, q)); // ['banana', 'mango', 'orange']

// approach
// we split the dateTime entity
// we have two arrays to compare, the months array and the dateTime entity array

let originaQ = "in Feb, how much was nylon in Asia?";

// remove all special characters in originalQ
// split

// GRAPH QL SECTION
const bookContainer = document.querySelector("#book-container");
const form = document.querySelector("#book-search");
const renderBooks = ({ data }) => {
    const allBooks = data.categories.category;

    // console.log(data.categories.category);

    while (bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.firstChild);
    }

    const bookFragment = document.createDocumentFragment();
    const booksList = document.createElement("ol");

    allBooks.forEach((book) => {
        console.log(book);
        const booksListItem = document.createElement("li");
        const booksListLink = document.createElement("a");
        booksListLink.href = book.url;
        // booksListLink.textContent = "Click To View";
        booksListItem.textContent = `${book.Name_of_Sub_Category}, Date: ${book.Actual_Period} from ${book.Region} Price: $${book.Price_Point}/${book.Unit}`;
        booksListItem.appendChild(booksListLink);
        booksList.appendChild(booksListItem);
    });

    bookFragment.appendChild(booksList);
    bookContainer.appendChild(bookFragment);
};
const loadBooks = (ev) => {
    ev.preventDefault();
    console.log(ev);
    const keyword = form.elements["search"].value;

    const option = {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            operationName: "categories",
            query: "query categories($offset: Int, $limit: Int, $name: String, $period: String, $guidance: String, $Grade_ID: String, $region: String, $grade: String) {\n  categories(\n    offset: $offset\n    limit: $limit\n    name: $name\n    period: $period\n    guidance: $guidance\n    Grade_ID: $Grade_ID\n    region: $region\n    grade: $grade\n  ) {\n    count\n    category {\n      Name_of_Sub_Category\n      Guidance\n      Market_Overview\n      Region\n      Actual_Period\n      Price_Point\n      Currency\n      Unit\n      Grade_ID\n      Grade\n      __typename\n    }\n    __typename\n  }\n}\n",
            variables: {
                Grade_ID: "",
                grade: "",
                guidance: "",
                limit: 3237,
                name: keyword,
                offset: 0,
                period: "",
                region: "",
            },
        }),
    };

    fetch(`http://angular-deployment-1.herokuapp.com/graphql`, option)
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then(renderBooks);
};
form.addEventListener("submit", loadBooks);

const getBooksQuery = (keyword) => {
    `categories(offset:0, limit:3000, name:"${keyword}",period:"", guidance:"", grade:"",Grade_ID:""){
    count
    category {
      Name_of_Category
    }
  }`;
};
// SANDBOX STUFF =======================

let data = {
    result: {
        type: "TEXT",
        contextId: "tWBFOF4ZAauP2KANw5TV5",
        context: "Supplier",
        topAnswers: [
            {
                type: "TEXT",
                contextId: "tWBFOF4ZAauP2KANw5TV5",
                context: "Supplier",
                confirmationPhrase: null,
                responseId: "YjpNcgWbNrw_7hvSIdTVe",
                confidence: 98.15,
                response: "skillSupplierLookUp",
                stringResponse: "skillSupplierLookUp",
                parsedResponse: "skillSupplierLookUp",
            },
            {
                type: "TEXT",
                contextId: "WYgZW9zyEmHYCuDS8L09Q",
                context: "PriceCostInfo",
                responseId: "cKwt1cbdjAahj~QnfCGwy",
                confidence: 1.13,
                response: "skillPriceCost",
                stringResponse: "skillPriceCost",
                parsedResponse: "skillPriceCost",
            },
            {
                type: "TEXT",
                contextId: "tWBFOF4ZAauP2KANw5TV5",
                context: "Supplier",
                responseId: "3Ivb8rm0Nml1V5Pbwia2Z",
                confidence: 1,
                response: "skillSupplierRisk",
                stringResponse: "skillSupplierRisk",
                parsedResponse: "skillSupplierRisk",
            },
            {
                type: "TEXT",
                contextId: "bvl~0puJ8GEJmFz_2qP_7",
                context: "SupplierDetails",
                responseId: "N5MGvhs2HJfAIZKF1wj0S",
                confidence: 0,
                response: "skillSupplierDetail",
                stringResponse: "skillSupplierDetail",
                parsedResponse: "skillSupplierDetail",
            },
            {
                type: "TEXT",
                contextId: "Hnze36Dk2wHKtCOtQLF6y",
                context: "NoneIntent",
                responseId: "OOokFFg3SLNxvnqXLp2H6",
                confidence: 0,
                response: "skillNone",
                stringResponse: "skillNone",
                parsedResponse: "skillNone",
            },
        ],
        entities: [
            {
                parsedValue: "find",
                value: "find",
                entity: "LookUpEntity",
                detailedType: "LookUpEntity",
                startPos: 0,
                endPos: 4,
                entityName: "LookUpEntity",
                confidence: 98.14375600000001,
            },
            {
                parsedValue: "find beverage can suppliers",
                value: "find beverage can suppliers",
                entity: "KeyNameEntity",
                detailedType: "KeyNameEntity",
                startPos: 0,
                endPos: 27,
                entityName: "KeyNameEntity",
                confidence: 100,
            },
            {
                parsedValue: "suppliers",
                value: "suppliers",
                entity: "SupplierKeyWord",
                detailedType: "SupplierKeyWord",
                startPos: 18,
                endPos: 27,
                entityName: "SupplierKeyWord",
                confidence: 92.648387,
            },
            {
                parsedValue: "Germany",
                value: "Germany",
                entity: "geographyV2",
                detailedType: "countryRegion",
                startPos: 31,
                endPos: 38,
                entityName: "geographyV2",
                confidence: 100,
            },
            {
                parsedValue: [
                    {
                        timex: "2021-06",
                        resolution: [
                            {
                                start: "2021-06-01",
                                end: "2021-07-01",
                            },
                        ],
                    },
                ],
                value: "June 2021",
                entity: "datetimeV2",
                detailedType: "daterange",
                startPos: 39,
                endPos: 48,
                entityName: "datetimeV2",
                confidence: 100,
            },
            {
                parsedValue: 2021,
                value: "2021",
                entity: "number",
                detailedType: "number",
                startPos: 44,
                endPos: 48,
                entityName: "number",
                confidence: 100,
            },
        ],
        question: "find beverage can suppliers in Germany June 2021",
        phrase: "find beverage can suppliers in Germany June 2021",
        response: "skillSupplierLookUp",
        stringResponse: "skillSupplierLookUp",
        responseId: "YjpNcgWbNrw_7hvSIdTVe",
        parsedResponse: "skillSupplierLookUp",
        contextName: "Supplier",
        contextQueryId: "d7c1b8d6-a051-4ca2-8a24-2eeea566b0a8",
        confidence: 98.15,
        topResponses: [
            {
                type: "TEXT",
                contextId: "tWBFOF4ZAauP2KANw5TV5",
                context: "Supplier",
                confirmationPhrase: null,
                responseId: "YjpNcgWbNrw_7hvSIdTVe",
                confidence: 98.15,
                response: "skillSupplierLookUp",
                stringResponse: "skillSupplierLookUp",
                parsedResponse: "skillSupplierLookUp",
            },
            {
                type: "TEXT",
                contextId: "WYgZW9zyEmHYCuDS8L09Q",
                context: "PriceCostInfo",
                responseId: "cKwt1cbdjAahj~QnfCGwy",
                confidence: 1.13,
                response: "skillPriceCost",
                stringResponse: "skillPriceCost",
                parsedResponse: "skillPriceCost",
            },
            {
                type: "TEXT",
                contextId: "tWBFOF4ZAauP2KANw5TV5",
                context: "Supplier",
                responseId: "3Ivb8rm0Nml1V5Pbwia2Z",
                confidence: 1,
                response: "skillSupplierRisk",
                stringResponse: "skillSupplierRisk",
                parsedResponse: "skillSupplierRisk",
            },
            {
                type: "TEXT",
                contextId: "bvl~0puJ8GEJmFz_2qP_7",
                context: "SupplierDetails",
                responseId: "N5MGvhs2HJfAIZKF1wj0S",
                confidence: 0,
                response: "skillSupplierDetail",
                stringResponse: "skillSupplierDetail",
                parsedResponse: "skillSupplierDetail",
            },
            {
                type: "TEXT",
                contextId: "Hnze36Dk2wHKtCOtQLF6y",
                context: "NoneIntent",
                responseId: "OOokFFg3SLNxvnqXLp2H6",
                confidence: 0,
                response: "skillNone",
                stringResponse: "skillNone",
                parsedResponse: "skillNone",
            },
        ],
    },
};

// console.log(data.result.entities[4].parsedValue[0]);

data.result.entities.forEach((e) => {
    // console.log(e.parsedValue);
    if (e.parsedValue[0]) {
        // console.log("timex ", e);
        // console.log(e.parsedValue[0]);
    }
});

// console.log(data.result.response);
// console.log(data.result.question);

// data_entity.topIntent = NLU_data.response;
// data_entity.question = NLU_data.question;
// data_entity.context = NLU_data.context;
// {timex: '2021-06', resolution: Array(1)}

let storeNLU = {
    geographyV2: {
        entity: "geographyV2",
        value: "Germany",
        parsedValue: "Germany",
        geo: true,
        geo_type: "countryRegion",
    },
    diversityEntity: null,
    CategoryListEntity: {
        entity: "CategoryListEntity",
        value: "beverage can",
        parsedValue: "beverage can",
    },
    mentionsDiversity: null,
    subfilters: null,
    keyNameEntity: "beverage can",
    lookupEntity: null,
    supplierKeyWordEntity: null,
    Unique_NonMBB_Entity: null,
    user_query: "find beverage can suppliers in Germany June 2021", // new Date(`${2021}`, `${6-1}`)
    PriceKeyWordEntity: null,
    datetimeV2: {
        entity: "datetimeV2",
        value: "June 2021",
        parsedValue: [
            {
                timex: "2021-06",
                resolution: [
                    {
                        start: "2021-06-01",
                        end: "2021-07-01",
                    },
                ],
            },
        ],
    },
};

// goal convert a date format to normalized date.
let dbDate = "Jun-21";
let dateString = storeNLU.datetimeV2.parsedValue[0].resolution[0].start;
let dateTimex = storeNLU.datetimeV2.parsedValue[0].timex; // 2021-06
console.log(dateTimex);

// the date format  = Abbreviated Month, a dash, and the last two digit of the year ex: Dec-21
// so here we need to convert Dec-21 to 2021-12-21

function dbDateTime(db_date) {
    let year = parseInt(db_date.substring(4, 6));
    let month = db_date.substring(0, 3); // 3 char month abbreviations July = Jul
    console.log(month, year);
    let res;
    // case 21 for 20 20s
    // case 19 for 20 10s
    // case 07 for 20 00s
    // case 00 for 20 00s
    // case 99 for 19 00s
    // case 89 for 19 00s
    // return `20${year}`;

    if (year <= 99 && year >= 50) {
        // prepend 19 to year
        res = parseInt(`19${year}`);
    }
    if (year <= 50) {
        // prepend 19 to year
        res = parseInt(`20${year}`);
    }
    console.log("dbdate before output = ", `${month}-21-${res}`);
    let output = new Date(`${month}-21-${res}`);
    // console.log(output);
    let constructdate = `${output.getFullYear()}-${
        output.getMonth() + 1
    }-${year}`;
    console.log(
        "this is dbdate constructed: ",
        constructdate,
        new Date(`${constructdate}`)
    );
    return new Date(`${constructdate}`).getTime();
}
function getLuisDateTime(date_string, whichTime) {
    if (whichTime == "parsedValue") {
        let month = parseInt(date_string.substring(5, 7));
        let year = date_string.substring(0, 4);

        console.log(`before output = ${year}-${Math.floor(month)}-21`);

        let date_result = new Date(`${year}-${Math.floor(month)}-21`); // 21 because it seems to give us an accurate representation of month.  not sure why...
        return date_result.getTime();
    } else if (whichTime == "timex") {
        let month = parseInt(date_string.substring(5, 7));
        let year = date_string.substring(0, 4);
        console.log("timex");
        console.log(month, year);
        console.log(`before output = ${year}-${Math.floor(month)}-21`);

        let date_result = new Date(`${year}-${Math.floor(month)}-21`); // 21 because it seems to give us an accurate representation of month.  not sure why...
        return date_result.getTime();
    }
}

let dataDate = dbDateTime(dbDate);
let luisDate = getLuisDateTime(dateTimex, "timex");
console.log(dataDate);
console.log(luisDate);

function test(a, b) {
    if (a === b) {
        // console.log("matched date");
        return "matched date";
    } else {
        // console.log("dates not matched! ");
        return "dates not matched! ";
    }
}

console.log("case one: ", test(dataDate, luisDate));
