// // SPREAD operator

// let array1 = ['h', 'e', 'l', 'l', 'o'];
// let array2 = [...array1];
// console.log(array2);
// ['h', 'e', 'l', 'l', 'o'] // output
// console.log(array1)

// let desserts = ['cake', 'cookie', 'donut'];
// let desserts1 = ['icecream', 'flan', 'frozen yoghurt', ...desserts];
// console.log(desserts);
// console.log(desserts1);

// function multiply(number1, number2, number3) {
//   console.log(number1 * number2 * number3);
// }
// let numbers = [1, 2, 3];
// multiply(...numbers);


// // FETCH METHOD


// // // readonly <Boolean> - true if message is sent
// // // loading <Boolean> - true on message sending and false when message received in chat
// // // isInPreview <Boolean> - true if message is in preview mode
// // // isMessageLast <Boolean> - true if current message is last in chat and false on next message sending

// const yesData = 'yes';
// const noData = 'no';

// const btnYes = document.getElementById('yes');
// btnYes.addEventListener('click', sendYes);

// const btnNo = document.getElementById('no');
// btnNo.addEventListener('click', sendNo);

// // inputElement.addEventListener('click', function(){
// //     gotoNode(result.name);
// // });

// function sendYes(yesOrNo) {
//   /**
//    * `message` field will be sent as user reply and will NOT be stored in mergeField
//    * `myData` field will be stored in mergeField
//    **/

//   //  sendMessage({
//   //   message: noData,
//   //   myData: noData
//   // });
//   console.log("yes Function")
// }

// function sendNo(yesOrNo) {
//   /**
//    * `message` field will be sent as user reply and will NOT be stored in mergeField
//    * `myData` field will be stored in mergeField
//    **/

//   //  sendMessage({
//   //   message: noData,
//   //   myData: noData
//   // });
//   console.log("no Function")
// }

// let result = [];
// let availableFilters = [];

// let token = '9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37';
// let endpoint1 = 'https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/abi-user-data-collection';
// let endpoint2 = 'https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/selection/supplier/qualification';

// function fetchData() {
//   fetch(`${endpoint2}`, {
//       method: 'GET', // or 'PUT'
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       },
//       // body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', JSON.parse(data._source.data));
//       result = JSON.parse(data._source.data);
//       // listSupplierNames(result);
//       LoopTest2(result)
//       console.log(availableFilters)
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }

// listSupplierNames = (list) => {
//   var i = 0;
//   console.log(list.data.list)
//   // var stop = 5;
//   for (i = 0; i < list.data.list.length; i++) {
//     var v = document.createElement('li');

//     v.id = "item " + i;
//     v.innerHTML = list.data.list[i].name;
//     document.getElementById('test').appendChild(v);
//   }
// }

// let convertedFilters = [];

// LoopTest2 = (list) => {
//   var i = 0;
//   console.log(list.data.body)
//   let obj = list.data.body;
//   for (var key in obj) {
//     if (obj[key] !== null && obj[key].length > 0)
//       // console.log(key)
//       availableFilters.push(key)
//   }

//   const convertArrayToObject = (array, key) => {
//     const initialValue = {};
//     return array.reduce((obj, item) => {
//       // console.log(item)
//       // console.log(item)
//       // console.log(obj)
//       // console.log([label + ":" + item)  
//      convertedFilters.push({
//       ...obj,
//       "label": item,
//       ...obj,
//       "value": item
//     })
//     }, initialValue);
   
//   };

//   console.log(convertArrayToObject(availableFilters))
//   console.log(convertedFilters)
// }
// // [{
// //   label: "`Supplier qualifications`",
// //   value: "`qualifications`",
// // }, {
// //   label: "`Supplier certifications`",
// //   value: "`certifications`",
// // }]
// fetchData();

// const shortlistData = {
//   "flowId": "727ef4f6-677e-4999-80d0-b74f07e98dac",
//   "isSync": false,
//   "qualification": "",
//   "certification": "",
//   "location": "india",
//   "diversity": "",
//   "eventId": "1o6tuPkzRUgqb4CJs6CTTN"
// };
// console.log(shortlistData)

// if ("location" in shortlistData) {
//   console.log(shortlistData.location)
// }

// // get NLU data
// let paramsObj = {
//   "flowId": "727ef4f6-677e-4999-80d0-b74f07e98dac",
//   "isSync": false,
//   "qualification": "",
//   "certification": "",
//   "location": "india",
//   "diversity": "",
//   "eventId": "1o6tuPkzRUgqb4CJs6CTTN"
// };
// let params = {};

// function getLocation() {
//   if ("location" in paramsObj) {
//     params.location = paramsObj.location
//   } else {
//     params.location = '';
//   }
// }

// function getQual() {
//   if ("qualification" in paramsObj && paramsObj.qualification !== '') {
//     params.qualification = paramsObj.qualification
//   } else {
//     params.qualification = {};
//   }
// }

// function getCert() {
//   if ("certification" in paramsObj && paramsObj.certification !== '') {
//     params.certification = paramsObj.certification
//   } else {
//     params.certification = {};
//   }
// }

// function getDiversity() {
//   if ("diversity" in paramsObj && paramsObj.diversity !== '') {
//     params.diversity = paramsObj.diversity
//   } else {
//     params.diversity = {};
//   }
// }

// getLocation();
// getQual();
// getCert();
// getDiversity();

// console.log(params)

// let token = '9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37';

// let arrayOfFilters = [];
// let convertedFilters = [];

// let endpoint2 = 'https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/selection/supplier/qualification';
// let availableFilters = [];

// function fetchData() {
//   fetch(`${endpoint2}`, {
//       method: 'GET', // or 'PUT'
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       },
//       // body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//       result = JSON.parse(data._source.data);
//       LoopTest2(result)
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }

// function LoopTest2(list){
//   var i = 0;
//   console.log(list.data.body)
//   let obj = list.data.body;
//   for (var key in obj) {
//     if (obj[key] !== null && obj[key].length > 0)
//       // console.log(key)
//     availableFilters.push(key)
//   }
// }
// const convertArrayToObject = (array, key) => {
//   const initialValue = {};
//   return array.reduce((obj, item) => {
//     // convertedFilters.push()
//     console.log({
//       ...obj,
//       "label": item,
//       ...obj,
//       "value": item
//     })
//   }, initialValue);

// };

// convertArrayToObject(availableFilters);
// fetchData();
// console.log(availableFilters)
// console.log(convertedFilters);


// temp solution to display filters

let arrayOfFilters = [];
let convertedFilters = [];

let token = '9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37';
let endpoint1 = 'https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/abi-user-data-collection';
let filter_table = 'https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/selection/supplier/qualification';

let availableFilters = [];
let returnedData;


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

function fetchData() {
  let listContainer = document.getElementById('listContainer');
  listContainer.style.display = 'none';
  fetch(`${filter_table}`, {
      method: 'GET', // or 'PUT'
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      // body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      if(data){
        listContainer.style.display = "block";
      }
      result = JSON.parse(data._source.data);
      LoopTest2(result)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function LoopTest2(list){
  console.log(list.data)
  var filterSelect = document.getElementById('test');
  
  for (i = 0; i < list.data.length; i++) {
      filterSelect.options.add( new Option(`${list.data[i].label}`,`${list.data[i].value}`) )
  }
  returnedData = list.data;
}

function onSelectFilter() {
  console.log(document.getElementById("test").value)
  document.getElementById("slctValue").innerHTML = document.getElementById("test").value;

}

// listSupplierNames = (list) => {
//   var i = 0;
//   console.log(list.data.list)
//   // var stop = 5;
//   for (i = 0; i < list.data.list.length; i++) {
//     var v = document.createElement('li');

//     v.id = "item " + i;
//     v.innerHTML = list.data.list[i].name;
//     document.getElementById('test').appendChild(v);
//   }
// }

fetchData();
console.log(returnedData)

// return returnedData;