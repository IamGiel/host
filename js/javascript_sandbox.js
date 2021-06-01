console.log("=====SPREAD OPERATOR===== ")

let array1 = ['h', 'e', 'l', 'l', 'o'];
let array2 = [...array1];
console.log(array2);
['h', 'e', 'l', 'l', 'o'] // output
console.log(array1)

let desserts = ['cake', 'cookie', 'donut'];
let desserts1 = ['icecream', 'flan', 'frozen yoghurt', ...desserts];
console.log(desserts);
console.log(desserts1);

function multiply(number1, number2, number3) {
    console.log(number1 * number2 * number3);
  }
  let numbers = [1,2,3];
  multiply(...numbers);
