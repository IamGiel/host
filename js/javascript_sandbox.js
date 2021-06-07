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
      if (data) {
        listContainer.style.display = "block";
      }
      result = JSON.parse(data._source.data);
      LoopTest2(result)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function LoopTest2(list) {
  console.log(list.data)
  var filterSelect = document.getElementById('test');

  for (i = 0; i < list.data.length; i++) {
    filterSelect.options.add(new Option(`${list.data[i].label}`, `${list.data[i].value}`))
  }
  returnedData = list.data;
}

function onSelectFilter() {
  // console.log(document.getElementById("test").value)
  document.getElementById("slctValue").innerHTML = document.getElementById("test").value;
  returnedData.forEach(e => {
    if (e.value == document.getElementById("test").value) {
      console.log("match: " + JSON.stringify(e))
    }
  });

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


// ================

let aggregateData = {
  "aggregations": {
    "attachments": [],
    "attributes": [{
      "key": "noRelationship",
      "doc_count": 13
    }],
    "relationshipRating": [],
    "tags": [],
    "internalCategory": [],
    "spendGroups": [],
    "recentPercentile": [],
    "label": [],
    "warnings": [{
      "key": "none",
      "doc_count": 13
    }],
    "country": [{
      "code": "IN",
      "key": "India",
      "doc_count": 13
    }],
    "state": [{
      "code": "",
      "key": "India::Maharashtra",
      "doc_count": 3
    }, {
      "code": "",
      "key": "India::Tamil Nadu",
      "doc_count": 3
    }, {
      "code": "",
      "key": "India::Delhi",
      "doc_count": 1
    }, {
      "code": "",
      "key": "India::Gujarat",
      "doc_count": 1
    }, {
      "code": "",
      "key": "India::Jharkhand",
      "doc_count": 1
    }, {
      "code": "",
      "key": "India::Uttar Pradesh",
      "doc_count": 1
    }, {
      "code": "",
      "key": "India::West Bengal",
      "doc_count": 1
    }],
    "city": [{
      "key": "India::Maharashtra::Mumbai",
      "doc_count": 2
    }, {
      "key": "India::Tamil Nadu::Chennai",
      "doc_count": 2
    }, {
      "key": "India::Delhi::Delhi",
      "doc_count": 1
    }, {
      "key": "India::Gujarat::Ankleshwar",
      "doc_count": 1
    }, {
      "key": "India::Jharkhand::Giridih",
      "doc_count": 1
    }, {
      "key": "India::Maharashtra::Raigad",
      "doc_count": 1
    }, {
      "key": "India::Tamil Nadu::Chennai Tamilnadu",
      "doc_count": 1
    }, {
      "key": "India::Uttar Pradesh::Nadu",
      "doc_count": 1
    }, {
      "key": "India::West Bengal::Kolkata",
      "doc_count": 1
    }],
    "sustainability": [],
    "sustainability.subTypes": [],
    "food": [],
    "food.subTypes": [],
    "quality": [{
      "key": "iso9000",
      "doc_count": 1,
      "name": "ISO 9000/9001: Quality management systems"
    }, {
      "key": "quality",
      "doc_count": 1,
      "name": "Quality"
    }],
    "quality.subTypes": [],
    "supplierTags": [{
      "key": "chemicals",
      "doc_count": 3
    }, {
      "key": "acetal copolymer hollow rod",
      "doc_count": 1
    }, {
      "key": "acetal nylon strip",
      "doc_count": 1
    }, {
      "key": "acid protein hydrolysate",
      "doc_count": 1
    }, {
      "key": "acrylic pipe",
      "doc_count": 1
    }, {
      "key": "acrylic rod",
      "doc_count": 1
    }, {
      "key": "acrylic rods exporter",
      "doc_count": 1
    }, {
      "key": "adhesives",
      "doc_count": 1
    }, {
      "key": "agrochemicals",
      "doc_count": 1
    }, {
      "key": "anchors",
      "doc_count": 1
    }],
    "security": [],
    "security.subTypes": [],
    "diversity": [],
    "diversity.subTypes": [],
    "supplierUpdated": [{
      "key": 0,
      "key_as_string": "false",
      "doc_count": 13
    }],
    "emailAvailable": [{
      "key": 1,
      "key_as_string": "true",
      "doc_count": 8
    }, {
      "key": 0,
      "key_as_string": "false",
      "doc_count": 5
    }],
    "supplierType": [{
      "key": "",
      "doc_count": 13
    }],
    "sector": [{
      "key": "42",
      "doc_count": 13,
      "description": "Wholesale Trade"
    }],
    "subsector": [{
      "key": "423",
      "doc_count": 13,
      "description": "Merchant Wholesalers, Durable Goods"
    }],
    "group": [{
      "key": "4235",
      "doc_count": 13,
      "description": "Metal and Mineral (except Petroleum) Merchant Wholesalers"
    }],
    "diversityProgram": [{
      "key": 0,
      "key_as_string": "false",
      "doc_count": 13
    }],
    "communities": [],
    "communityStatus": [],
    "suggestions": [{
      "value": "Chemicals",
      "label": "Chemicals"
    }, {
      "value": "Acetal Copolymer Hollow Rod",
      "label": "Acetal Copolymer Hollow Rod"
    }, {
      "value": "Acetal Nylon Strip",
      "label": "Acetal Nylon Strip"
    }, {
      "value": "Acid Protein Hydrolysate",
      "label": "Acid Protein Hydrolysate"
    }, {
      "value": "Acrylic Pipe",
      "label": "Acrylic Pipe"
    }, {
      "value": "Acrylic Rod",
      "label": "Acrylic Rod"
    }, {
      "value": "Acrylic Rods Exporter",
      "label": "Acrylic Rods Exporter"
    }, {
      "value": "Adhesives",
      "label": "Adhesives"
    }, {
      "value": "Agrochemicals",
      "label": "Agrochemicals"
    }, {
      "value": "Anchors",
      "label": "Anchors"
    }],
    "filterSuggestions": {
      "naics": [{
        "value": "42",
        "label": "Wholesale"
      }]
    }
  }
};

console.log(aggregateData)


// {value: "Chemicals", label: "Chemicals"},
// {value: "Acetal Copolymer Hollow Rod", label: "Acetal Copolymer Hollow Rod"},
// {value: "Acetal Nylon Strip", label: "Acetal Nylon Strip"},
// {value: "Acid Protein Hydrolysate", label: "Acid Protein Hydrolysate"},
// {value: "Acrylic Pipe", label: "Acrylic Pipe"},
// {value: "Acrylic Rod", label: "Acrylic Rod"},
// {value: "Acrylic Rods Exporter", label: "Acrylic Rods Exporter"},
// {value: "Adhesives", label: "Adhesives"},
// {value: "Agrochemicals", label: "Agrochemicals"},
// {value: "Anchors", label: "Anchors"}

let nlu10 = {"result":{"type":"TEXT","contextId":"3_TdcOE5rkD9aqwM1MF23","context":"Supplier","topAnswers":[{"type":"TEXT","contextId":"3_TdcOE5rkD9aqwM1MF23","context":"Supplier","responseId":"h5HJCAw5vloIyx~0C46Z2","confidence":90.64,"response":"skillSupplierLookUp"},{"type":"","contextId":"None","context":"None","responseId":"None","confidence":1.08,"response":"None"},{"type":"TEXT","contextId":"3_TdcOE5rkD9aqwM1MF23","context":"Supplier","responseId":"klzeWsHP_ZEmtCi6hmqja","confidence":1.01,"response":"skillSupplierRisk"}],"entities":[{"parsedValue":["beverage cans"],"value":"beverage can","entity":"CategoryListEntity","detailedType":"CategoryListEntity","startPos":0,"endPos":12,"confidence":100},{"parsedValue":"suppliers","value":"suppliers","entity":"SupplierKeyWord","detailedType":"SupplierKeyWord","startPos":13,"endPos":22,"confidence":94.33952599999999},{"parsedValue":"India","value":"India","entity":"geographyV2","detailedType":"countryRegion","startPos":26,"endPos":31,"confidence":100}],"question":"beverage can suppliers in India","phrase":"beverage can suppliers in India","response":"skillSupplierLookUp","responseId":"h5HJCAw5vloIyx~0C46Z2","parsedResponse":"skillSupplierLookUp","contextQueryId":"480dce29-0877-425b-b3b6-3ba8b69fbe5a","confidence":90.64,"topResponses":[{"type":"TEXT","contextId":"3_TdcOE5rkD9aqwM1MF23","context":"Supplier","responseId":"h5HJCAw5vloIyx~0C46Z2","confidence":90.64,"response":"skillSupplierLookUp","parsedResponse":"skillSupplierLookUp"},{"type":"","contextId":"None","context":"None","responseId":"None","confidence":1.08,"response":"None","parsedResponse":"None"},{"type":"TEXT","contextId":"3_TdcOE5rkD9aqwM1MF23","context":"Supplier","responseId":"klzeWsHP_ZEmtCi6hmqja","confidence":1.01,"response":"skillSupplierRisk","parsedResponse":"skillSupplierRisk"}]}};
console.log(nlu10)