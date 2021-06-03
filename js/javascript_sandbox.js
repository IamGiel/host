// SPREAD operator

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


  // FETCH METHOD

  
// // readonly <Boolean> - true if message is sent
// // loading <Boolean> - true on message sending and false when message received in chat
// // isInPreview <Boolean> - true if message is in preview mode
// // isMessageLast <Boolean> - true if current message is last in chat and false on next message sending

const yesData = 'yes';
const noData = 'no';

const btnYes = document.getElementById('yes');
btnYes.addEventListener('click', sendYes);

const btnNo = document.getElementById('no');
btnNo.addEventListener('click', sendNo);

// inputElement.addEventListener('click', function(){
//     gotoNode(result.name);
// });

function sendYes(yesOrNo) {
  /**
   * `message` field will be sent as user reply and will NOT be stored in mergeField
   * `myData` field will be stored in mergeField
   **/

    //  sendMessage({
    //   message: noData,
    //   myData: noData
    // });
    console.log("yes Function")
}
function sendNo(yesOrNo) {
  /**
   * `message` field will be sent as user reply and will NOT be stored in mergeField
   * `myData` field will be stored in mergeField
   **/

    //  sendMessage({
    //   message: noData,
    //   myData: noData
    // });
    console.log("no Function")
}

let result = [];

let token = '9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37';

function fetchData() {
  fetch('https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/abi-user-data-collection', {
      method: 'GET', // or 'PUT'
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      // body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', JSON.parse(data._source.data));
      result = JSON.parse(data._source.data);
      LoopTest(result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

LoopTest = (list) => {
  var i = 0;
  console.log(list.data)
  // var stop = 5;
  for (i = 0; i < list.data.length; i++) {
    var v = document.createElement('li');

    v.id = "item " + i;
    v.innerHTML = list.data[i];
    document.getElementById('test').appendChild(v);
  }
}
fetchData();

