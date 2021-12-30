// The maximum sum subarray problem consists 
// in finding the maximum sum of a contiguous 
// subsequence in an array or list of integers:


const testArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// const testArr = [1,2,3,4,1,4,0,6,1,2];

var maxSequence = function(arr){
  // ...
  let subArr = [];
  let sumAll = testArr.reduce((el1,el2) => el1+ el2);
  let sumOfSubArr = subArr.length > 0 ? subArr.reduce((el1,el2) => el1+ el2) : 0;
  if(sumAll >sumOfSubArr){
    return sumAll;
  }
  
  // else keep looking for larger contiguous sub arr sum
}

console.log(maxSequence(testArr))