const arr = [4,5,6];

// result = [6, 3, 2]

// start with first index, remove the first element, multply the remaining elements
// go to second element, remove this element[i], and multiply the remaining elements
// got to element[i], remove this, multiply remaining elements

// method to get all elements of array except the current element[i]

function remainingElementsWithFilter(elements, nth){
 
  let tempArr = elements.filter(f=>{
    return f!==elements[nth]
  })
  console.log("el withouth i: ", tempArr)
  return tempArr.reduce((a,b)=>a*b)
}
function optimalWithDivision(elements, nth){
  let res = (elements.reduce((a,b)=>a*b))/elements[nth] ;
  return res;
}

function getProduct(el){
  let res = []
  for (let i = 0; i < el.length; i++) {
    res.push(remainingElementsWithFilter(el, i))
  }
  return res;
}

function getProduct2(el){
  let res = []
  for (let i = 0; i < el.length; i++) {
    res.push(optimalWithDivision(el,i))
  }
  return res;
}

console.time('Function #1');
console.log("with filter: ", getProduct(arr))
console.timeEnd('Function #1')

console.time('Function #2');
console.log("with optimal solution: ", getProduct2(arr))
console.timeEnd('Function #2')


// test
// remainingElementsWithSplice(arr,1)


