// google key: AIzaSyBWE-FwSOln73eCNv1hZsQVbqitL9XNBh0

// =============== ONE REACH API ===========

// fetch('https://sdkapi.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/component-data', {
//     method: 'GET', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37'
//     },
//     // body: JSON.stringify(data),
//   })
//   .then(response => response.json())
//   .then(data => {
//       var riskScore = data.items[0]._source['data'].dow_SER.SER.SER['riskScore'];
//       var supplierName = data.items[0]._source['data'].apiSupplier.data[0].supplierName;
//       var catArr = data.items[0]._source['data'].apiCategory.userCategories.content;

//       var dataSetArr = [];
//       var arr0 = [];
//       var arr1 = [];
//       var arr2 = [];


//       catArr.forEach((element, index) => {
//         if(index === 0){
//           arr0.push(element.name)
//           arr0.push(1)

//         } else if(index === 1){
//           arr1.push(element.name)
//           arr1.push(1)

//         } else if(index === 2){
//           arr2.push(element.name)
//           arr2.push(1)

//         }

//     });
//     if(arr0.length > 0 && arr1.length > 0 && arr2.length > 0)
//       dataSetArr.push(arr0);
//       dataSetArr.push(arr1);
//       dataSetArr.push(arr2);
//   });


// ============== OPEN WEATHER API =================

// let button = document.getElementById("get-location");
// let latText = document.getElementById("latitude");
// let longText = document.getElementById("longitude");

// function getLocation() {
//   navigator.geolocation.getCurrentPosition(function (position) {
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;

//     latText.innerText = lat.toFixed(2);
//     longText.innerText = long.toFixed(2);

//     console.log("this is latitude: ", lat)
//     console.log("this is longitude: ", long)


//   })
// };


// getLocation();



var settings = {
  "url": "http://api.openweathermap.org/data/2.5/weather?lat=90&lon=34&appid=f57ea824e89edda25200ba98c9cf0c82",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
  console.log(response.weather[0].description);
  console.log(response.main.feels_like);
});


// convert UC/UNIX time stamp to day of the week
var timestamp = 1608256800; // UNIX timestamp in seconds
var dt = new Date();
dt.setTime(timestamp * 1000); // javascript timestamps are in milliseconds
document.write(dt);

let ts = 1549312452;
let time = (new Date(ts * 1000) + '').slice(16, 24);
let time2 = (new Date(ts * 1000) + '').slice(0, 15);

console.log("time >>>>>>> ", time);
console.log("time2 >>>>>>> ", time2);
// document.write(dt.getDay());


// ============= LUIS API ==================


// let appID = "9cad0cc0-ea48-407b-b9dd-15de13182b62";
// let subscriptionKey = "eda7b4bc404d461e88d6a8182e54cddb";
// let queryHere = "should i sell the house?";

// fetch(`https://eastus.api.cognitive.microsoft.com/luis/prediction/v3.0/apps/${appID}/slots/production/predict?subscription-key=${subscriptionKey}&verbose=true&show-all-intents=true&log=true&query=${queryHere}`, {
//     method: 'GET', // or 'PUT'
//     headers: {
//       "Ocp-Apim-Subscription-Key": subscriptionKey
//       // 'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37'
//     },
//     // body: JSON.stringify(data),
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     console.log("prediction.topIntent: ", data.prediction.topIntent)
//     console.log("prediction.entities: ", data.prediction.entities.keyPhrase)
//     console.log(data.prediction.topIntent);
//   });

// $( () => {




//   $.ajax({
//       url: `https://eastus.api.cognitive.microsoft.com/luis/prediction/v3.0/apps/${appID}/slots/production/predict?subscription-key=${subscriptionKey}&verbose=true&show-all-intents=true&log=true&query=${queryHere}`,
//       beforeSend: function (xhrObj) {
//         // Request headers
//         xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", `${subscriptionKey}`);
//       },
//       type: "GET",
//       // Request body
//       data: "{body}",
//     })
//     .done(function (data) {
//       alert("success");

//       console.log(data.prediction.topIntent);

//     })
//     .fail(function () {
//       alert("error");
//     });
// });

// ===== How to check if a string contains text from an array of substrings in JavaScript?

const substrings = ["weather", "buy", "sell", "price"]; 
// await this.mergeFields['storeHumor'].get({path: 'userMsg'})
let x = "await this.mergeFields['storeHumor'].get({path: 'userMsg'})";
let str = `this is x: ${x}`;
let val;



const checker = (st) => {

  if (substrings.some(v => st.includes(v))) {
    val = true;
  } else {
    val = false;
  }
  // console.log(val)
  return val;
};

return checker(str);

console.log(checker(str));