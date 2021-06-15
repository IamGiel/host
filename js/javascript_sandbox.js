// // temp solution to display filters

// let arrayOfFilters = [];
// let convertedFilters = [];

// let token = '9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37';
// let endpoint1 = 'https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/abi-user-data-collection';
// let filter_qualification = 'https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/selection/supplier/qualification';
// let filter_naics = 'https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/naics';

// let availableFilters = [];
// let returnedData;


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

// function fetchData() {
//   let listContainer = document.getElementById('selectContainer2');
//   listContainer.style.display = 'none';
//   fetch(`${filter_naics}`, {
//       method: 'GET', // or 'PUT'
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       },
//       // body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//       result = JSON.parse(data._source.data);
//       console.log(result)
//       if (data) {
//         listContainer.style.display = "block";
//       }
//       // result = data._source;

//       LoopTest2(result)
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }

function LoopTest2(list) {
  console.log(list.data)
  var filterSelect = document.getElementById('test3');

  for (i = 0; i < list.data.length; i++) {
    filterSelect.options.add(new Option(`${list.data[i].label}`, `${list.data[i].value}`))
  }

  returnedData = list.data;

}

// ============= convert array to different JSON formats =====================
var my_array = ["234", "23423"];
var json = Object.assign({}, my_array);

console.log(json)
// ===
const arr = ['a','b','c'];
const res = arr.reduce((acc,curr)=> (acc[curr]=curr,acc),{});
console.log(res)
// ===
let dropdownArray = [];
let array = ['USD', 'EUR', 'INR'];
array.forEach(k=>{
  dropdownArray.push({label:`${k}`, value:`${k}`})
})
console.log(dropdownArray)
"Fancy India Corp.","pet cans","Sse Ngr India","Chemik","Verma Process Pack S","Hi-tech Seals Industries","Manitowoc FSG U.S. Holding, LLC","Welbilt","Ace Technologies","Plex Systems"



// ============================================================================


// function onSelectFilterNaics() {
//   // console.log(document.getElementById("test").value)
//   // console.log(JSON.parse(returnedData.data))

//   returnedData.forEach(e => {
//     console.log(e)
//     if (e.value == document.getElementById("test3").value) {
//       console.log("match: " + JSON.stringify(e))
//     }
//   });

// }

// // listSupplierNames = (list) => {
// //   var i = 0;
// //   console.log(list.data.list)
// //   // var stop = 5;
// //   for (i = 0; i < list.data.list.length; i++) {
// //     var v = document.createElement('li');

// //     v.id = "item " + i;
// //     v.innerHTML = list.data.list[i].name;
// //     document.getElementById('test').appendChild(v);
// //   }
// // }



// fetchData();
// return document.getElementById("test3").value;

// return returnedData;

// ============================================


// // readonly <Boolean> - true if message is sent
// // loading <Boolean> - true on message sending and false when message received in chat
// // isInPreview <Boolean> - true if message is in preview mode
// // isMessageLast <Boolean> - true if current message is last in chat and false on next message sending

window.addEventListener('load', function () {

  let arrayOfFilters = [];
  let convertedFilters = [];

  let token = '9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37';
  let endpoint1 = 'https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/abi-user-data-collection';
  let filter_table = 'https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/selection/supplier/qualification';

  let availableFilters = [];
  let returnedData;
  let objToPass;

  const btnYes = document.getElementById('send');
  btnYes.addEventListener('click', send);

  // inputElement.addEventListener('click', function(){
  //     gotoNode(result.name);
  // });

  function send() {
    /**
     * `message` field will be sent as user reply and will NOT be stored in mergeField
     * `myData` field will be stored in mergeField
     **/

    onSelectFilter();
    // console.log("yes Function")
  }



  function fetchData() {
    let selectContainer2 = document.getElementById('selectContainer2');
    selectContainer2.style.display = 'none';
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
          selectContainer2.style.display = "block";
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
    var filterSelect = document.getElementById('test3');
    for (i = 0; i < list.data.length; i++) {
      filterSelect.options.add(new Option(`${list.data[i].label}`, `${list.data[i].value}`))
    }
    returnedData = list.data;
  }

  function onSelectFilterNaics() {
    // console.log(document.getElementById("test").value)
    // console.log(JSON.parse(returnedData.data))
    let elementVal = document.getElementById("test3").value;
    returnedData.forEach(e => {
      if (e.value == elementVal) {
        console.log("match: " + JSON.stringify(e))
        objToPass = e;
      }
    });
    sendMessage({
      message: elementVal,
      myData: elementVal
    });

  }

  fetchData();
  // return document.getElementById("test3").value;
})


// ==========

let my_list_of_blah = [1, 2, 3, 4, 5]
let str = '<ul>'
let addend = 10;

my_list_of_blah.forEach(function(theNumber) {
  
  // str += '<li>'+ theNumber + ' ' +  sucker + '</li>';
  str += `<li>`+ `${theNumber+addend}` + `</li>`;

}); 

str += '</ul>';
document.getElementById("slideContainer").innerHTML = str;


// ==============

dynamicallyLoadScript = (url) => {
  var script = document.createElement("script");  // create a script DOM node
  script.src = url;  // set its src to the provided URL

  document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
  setTimeout(function(){ 
    getUsers();
  }, 3000);

 
}
dynamicallyLoadScript('https://unpkg.com/axios/dist/axios.min.js');
const getUsers = () => {
  axios.get('https://reqres.in/api/users')
  .then(response => {
   const users = response.data.data;
   console.log(`GET users`, users);
 })
  .catch(error => console.error(error));
 };


 // ===============

 const data_ = {
  "data": {
    "result": {
      "type": "TEXT",
      "contextId": "vcH6zRmfYpvzWNYmM~OMq",
      "context": "Supplier",
      "topAnswers": [
        {
          "type": "TEXT",
          "contextId": "vcH6zRmfYpvzWNYmM~OMq",
          "context": "Supplier",
          "confirmationPhrase": "skillSupplierLookUpPhrase",
          "responseId": "S0q9ZYpXgEdDPPMsQwVGv",
          "confidence": 97.24,
          "response": "skillSupplierLookUp"
        },
        {
          "type": "",
          "contextId": "None",
          "context": "None",
          "responseId": "None",
          "confidence": 1,
          "response": "None"
        },
        {
          "type": "TEXT",
          "contextId": "vcH6zRmfYpvzWNYmM~OMq",
          "context": "Supplier",
          "responseId": "nrE5JEFN3vYA0mKfr9G24",
          "confidence": 0.91,
          "response": "skillSupplierRisk"
        },
        {
          "type": "TEXT",
          "contextId": "vcH6zRmfYpvzWNYmM~OMq",
          "context": "Supplier",
          "responseId": "rwfNyzzNOO2y5bwhvMEpU",
          "confidence": 0.42,
          "response": "skillTest"
        }
      ],
      "entities": [
        {
          "parsedValue": "tell me more",
          "value": "tell me more",
          "entity": "DetailRequest",
          "detailedType": "DetailRequest",
          "startPos": 0,
          "endPos": 12,
          "confidence": 96.288943
        },
        {
          "parsedValue": [
            "cisco"
          ],
          "value": "cisco",
          "entity": "SupplierListEntity",
          "detailedType": "SupplierListEntity",
          "startPos": 19,
          "endPos": 24,
          "confidence": 100
        }
      ],
      "question": "tell me more about cisco",
      "phrase": "tell me more about cisco",
      "response": "skillSupplierLookUp",
      "responseId": "S0q9ZYpXgEdDPPMsQwVGv",
      "parsedResponse": "skillSupplierLookUp",
      "contextQueryId": "480dce29-0877-425b-b3b6-3ba8b69fbe5a",
      "confidence": 97.24,
      "topResponses": [
        {
          "type": "TEXT",
          "contextId": "vcH6zRmfYpvzWNYmM~OMq",
          "context": "Supplier",
          "confirmationPhrase": "skillSupplierLookUpPhrase",
          "responseId": "S0q9ZYpXgEdDPPMsQwVGv",
          "confidence": 97.24,
          "response": "skillSupplierLookUp",
          "parsedResponse": "skillSupplierLookUp"
        },
        {
          "type": "",
          "contextId": "None",
          "context": "None",
          "responseId": "None",
          "confidence": 1,
          "response": "None",
          "parsedResponse": "None"
        },
        {
          "type": "TEXT",
          "contextId": "vcH6zRmfYpvzWNYmM~OMq",
          "context": "Supplier",
          "responseId": "nrE5JEFN3vYA0mKfr9G24",
          "confidence": 0.91,
          "response": "skillSupplierRisk",
          "parsedResponse": "skillSupplierRisk"
        },
        {
          "type": "TEXT",
          "contextId": "vcH6zRmfYpvzWNYmM~OMq",
          "context": "Supplier",
          "responseId": "rwfNyzzNOO2y5bwhvMEpU",
          "confidence": 0.42,
          "response": "skillTest",
          "parsedResponse": "skillTest"
        }
      ]
    }
  }
 };

 console.log(data_.data.result.entities)
 let ent = data_.data.result.entities;
 let dataobj = {};
 ent.forEach(r => {
  if (r.entity == "SupplierListEntity") {
    dataobj.entity = r.entity
    dataobj.value = r.value
  }
})

console.log(dataobj)

 
//  ===============

let supShortList = {
  "supplierSearchResult": {
      "searchId": 1623757970371,
      "total": 2615,
      "suppliers": [{
          "id": "OrgUnit-4833668266721280-5629499534213120",
          "name": "Ball Corp",
          "websiteURL": "http://www.ball.com/aerospace",
          "phoneNumber": "+1 303-460-5876",
          "primaryAddress": "10 Longs Peak Drive, Broomfield, Colorado, United States",
          "domains": ["ball.com"],
          "description": "Food Packaging, Packaging Materials, The forming, internal and external coating and offset litho printing of two-piece draw and wall ironed (DWI), aluminium can bodies, and the forming, incising and packing of aluminium stay on tabs, easy open ends for use in the packaging of liquid beverages.",
          "diversity": [],
          "security": [],
          "quality": [{
              "category": "quality",
              "type": "iso22000",
              "typeName": "ISO 22000: Food Safety Management",
              "source": "DQS Certification AUSNZ Pty Ltd",
              "sourceURL": "",
              "dateAdded": "2019-11-20T22:40:49+00:00",
              "expiryDate": "",
              "lastChecked": "2019-11-20T22:40:49+00:00"
          }],
          "food": [{
              "category": "food",
              "type": "gfsi",
              "typeName": "Global Food Safety Initiative",
              "source": "BRC Global Standards",
              "sourceURL": "https://www.brcdirectory.com/InternalSite//Site.aspx?BrcSiteCode=1089896",
              "dateAdded": "2020-10-17T05:01:20+00:00",
              "expiryDate": "2020-11-23T11:00:00+00:00",
              "lastChecked": "2020-10-17T05:01:20+00:00"
          }, {
              "category": "food",
              "type": "gfsi",
              "typeName": "Global Food Safety Initiative",
              "source": "BRC Global Standards",
              "sourceURL": "https://www.brcdirectory.com/InternalSite//Site.aspx?BrcSiteCode=5507758",
              "dateAdded": "2020-10-17T05:01:20+00:00",
              "expiryDate": "2021-02-23T11:00:00+00:00",
              "lastChecked": "2020-10-17T05:01:20+00:00"
          }, {
              "category": "food",
              "type": "gfsi",
              "typeName": "Global Food Safety Initiative",
              "source": "BRC Global Standards",
              "sourceURL": "https://www.brcdirectory.com/InternalSite//Site.aspx?BrcSiteCode=7433411",
              "dateAdded": "2020-10-17T05:01:20+00:00",
              "expiryDate": "2021-03-10T11:00:00+00:00",
              "lastChecked": "2020-10-17T05:01:20+00:00"
          }, {
              "category": "food",
              "type": "gfsi",
              "typeName": "Global Food Safety Initiative",
              "source": "BRC Global Standards",
              "sourceURL": "https://www.brcdirectory.com/InternalSite//Site.aspx?BrcSiteCode=1452264",
              "dateAdded": "2020-10-17T05:01:20+00:00",
              "expiryDate": "2021-10-23T11:00:00+00:00",
              "lastChecked": "2020-10-17T05:01:20+00:00"
          }, {
              "category": "food",
              "type": "gfsi",
              "typeName": "Global Food Safety Initiative",
              "source": "BRC Global Standards",
              "sourceURL": "https://www.brcdirectory.com/InternalSite//Site.aspx?BrcSiteCode=8115235",
              "dateAdded": "2020-10-17T05:01:20+00:00",
              "expiryDate": "2021-07-29T11:00:00+00:00",
              "lastChecked": "2020-10-17T05:01:20+00:00"
          }, {
              "category": "food",
              "type": "gfsi",
              "typeName": "Global Food Safety Initiative",
              "source": "BRC Global Standards",
              "sourceURL": "https://www.brcdirectory.com/InternalSite//Site.aspx?BrcSiteCode=1615981",
              "dateAdded": "2020-10-17T05:01:20+00:00",
              "expiryDate": "2021-02-07T11:00:00+00:00",
              "lastChecked": "2020-10-17T05:01:20+00:00"
          }, {
              "category": "food",
              "type": "gfsi",
              "typeName": "Global Food Safety Initiative",
              "source": "BRC Global Standards",
              "sourceURL": "https://www.brcdirectory.com/InternalSite//Site.aspx?BrcSiteCode=2108482",
              "dateAdded": "2020-10-17T05:01:20+00:00",
              "expiryDate": "2021-03-04T11:00:00+00:00",
              "lastChecked": "2020-10-17T05:01:20+00:00"
          }, {
              "category": "food",
              "type": "gfsi",
              "typeName": "Global Food Safety Initiative",
              "source": "BRC Global Standards",
              "sourceURL": "https://www.brcdirectory.com/InternalSite//Site.aspx?BrcSiteCode=1426442",
              "dateAdded": "2020-10-17T05:01:20+00:00",
              "expiryDate": "2021-02-09T11:00:00+00:00",
              "lastChecked": "2020-10-17T05:01:20+00:00"
          }, {
              "category": "food",
              "type": "gfsi",
              "typeName": "Global Food Safety Initiative",
              "source": "The Safe Quality Food (SQF) Program",
              "sourceURL": "https://www.ac.parkcitygroup.com/application/vwavecgi/public/register.cgi/search/blcares?id=40825",
              "dateAdded": "2020-10-21T15:35:41+00:00",
              "expiryDate": "2021-11-14T11:00:00+00:00",
              "lastChecked": "2020-10-21T15:35:41+00:00"
          }, {
              "category": "food",
              "type": "gfsi",
              "typeName": "Global Food Safety Initiative",
              "source": "FSSC",
              "sourceURL": "https://www.fssc22000.com/certified-organizations/",
              "dateAdded": "2020-11-04T15:03:26+00:00",
              "expiryDate": "2023-07-23T11:00:00+00:00",
              "lastChecked": "2020-11-04T15:03:26+00:00"
          }],
          "sustainability": [{
              "category": "sustainability",
              "type": "emissionReduction",
              "typeName": "Emission Reduction",
              "source": "Science Based Targets Initiative (SBTI)",
              "sourceURL": "https://sciencebasedtargets.org/",
              "dateAdded": "2021-04-08T16:19:45+00:00",
              "expiryDate": "",
              "lastChecked": "2021-04-08T16:19:45+00:00"
          }, {
              "category": "sustainability",
              "type": "iso50001",
              "typeName": "ISO 50001: Energy Management",
              "source": "DQS Certification AUSNZ Pty Ltd",
              "sourceURL": "",
              "dateAdded": "2019-11-20T22:40:49+00:00",
              "expiryDate": "",
              "lastChecked": "2019-11-20T22:40:49+00:00"
          }],
          "tags": ["Hubble Space Telescope", "Spacecraft Space Science", "Beverage Cans", "Laser LIDAR Instruments", "QR codes", "barcode symbol guidelines", "QR codes readability", "barcode colour guidelines"],
          "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-4833668266721280-5629499534213120",
          "logo": {
              "location": "https://logo.clearbit.com/ball.com",
              "expiry": "2021-06-15T12:52:50+00:00"
          },
          "relationship": {},
          "offerings": ["Hubble Space Telescope", "Spacecraft Space Science", "Beverage Cans", "Laser LIDAR Instruments", "QR codes", "barcode symbol guidelines", "QR codes readability", "barcode colour guidelines", "QR Code Version", "Careers at Ball", "Sustainable Aluminum Aerosol Packaging", "OTC Aluminum Aerosol Cans", "Ball Brothers Company", "metal beverage cans", "Ball s Dynamark", "Ball Aerosol Packaging", "Ball s 140th Anniversary", "Ball in the Community", "Metal Beverage Packaging", "Ball Aerospace", "innovative packaging", "beverage packaging", "Ball cans", "Ball s Eyeris", "Metal Aerosol Packaging", "aluminum beverage cans", "Food Packaging", "Packaging Materials", "27: Manufacture of Food Packaging; Aluminum Cans", "3 piece", "drawn & ironed and aerosol metal containers.", "Production of food packaging and packaging materials", "Packaging", "Metal", "Cosmetics", "Contract Manufacturer", "Bottles, General", "Containers, Aluminum", "Containers, Specialty Metal", "Containers, Tin Plate", "aerosol cans", "Containers and Packaging", " Rigid Packaging"]
      }, {
          "id": "OrgUnit-5528617865969664-5629499534213120",
          "name": "Can Pack India Private Limited",
          "websiteURL": "canpack.co.in",
          "phoneNumber": "",
          "primaryAddress": "India",
          "domains": ["canpack.co.in"],
          "description": "Our glass packaging is produced in a wide range of colors, including clear glass, brown and green.",
          "diversity": [],
          "security": [],
          "quality": [],
          "food": [],
          "sustainability": [],
          "tags": ["Aluminum cans", "Beverage cans", "Glass packaging", "Metal packaging", "Packaging", "Beverage packaging", "Production of food packaging and packaging materials", "Food Packaging"],
          "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-5528617865969664-5629499534213120",
          "logo": {
              "location": "https://logo.clearbit.com/canpack.co.in",
              "expiry": "2021-06-15T12:52:50+00:00"
          },
          "relationship": {},
          "offerings": ["Aluminum cans", "Beverage cans", "Glass packaging", "Metal packaging", "Packaging", "Beverage packaging", "Production of food packaging and packaging materials", "Food Packaging", "Metal"]
      }, {
          "id": "OrgUnit-6399817204629504-5818780900655104",
          "name": "Bikaner Polymers Pvt. Ltd.",
          "websiteURL": "http://www.transpetcans.in",
          "phoneNumber": "+91-141-2375079",
          "primaryAddress": "Jaipur, Rajasthan, India",
          "domains": ["transpetcans.in"],
          "description": "We have PP cans for packing various beverages like Juices, Coconut water etc.",
          "diversity": [],
          "security": [],
          "quality": [{
              "category": "quality",
              "type": "iso9000",
              "typeName": "ISO 9000/9001: Quality management systems",
              "source": "BSCIC Certifications Private Limited",
              "sourceURL": "",
              "dateAdded": "2019-11-20T20:25:43+00:00",
              "expiryDate": "2018-09-15T11:00:00+00:00",
              "lastChecked": "2019-11-20T20:25:43+00:00"
          }],
          "food": [],
          "sustainability": [],
          "tags": ["Peanut cans", "Bottles", "Dry Snacks", "Canned Food", "Rasgulla Cans", "PET Cans for Supari packing", "Snacks packing Cans", "PET Cans for Pickle packing"],
          "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-6399817204629504-5818780900655104",
          "logo": {
              "location": "https://logo.clearbit.com/transpetcans.in",
              "expiry": "2021-06-15T12:52:51+00:00"
          },
          "relationship": {},
          "offerings": ["Peanut cans", "Bottles", "Dry Snacks", "Canned Food", "Rasgulla Cans", "PET Cans for Supari packing", "Snacks packing Cans", "PET Cans for Pickle packing", "Beverage Cans", "Cans for Mouth fresheners", "PET Cans", "PP cans", "Snacks Packing", "PET / PP cans", "plastic lids"]
      }, {
          "id": "OrgUnit-6137911015899136-5379031298211840",
          "name": "Easy Pack",
          "websiteURL": "http://easy-pack.in/",
          "phoneNumber": "+91 11 43583110",
          "primaryAddress": "India",
          "domains": ["easy-pack.in"],
          "description": "Specializing in the development and manufacture of easy open end packing, RGSK Easypack offers an impressive range of wide packaging solutions.",
          "diversity": [],
          "security": [],
          "quality": [],
          "food": [],
          "sustainability": [],
          "tags": ["Production Process", "Beverages", "packaging solutions", "wide packaging solutions", "food and beverage cans", "EasyPack"],
          "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-6137911015899136-5379031298211840",
          "logo": {
              "location": "https://logo.clearbit.com/easy-pack.in",
              "expiry": "2021-06-15T12:52:51+00:00"
          },
          "relationship": {},
          "offerings": ["Production Process", "Beverages", "packaging solutions", "wide packaging solutions", "food and beverage cans", "EasyPack"]
      }, {
          "id": "OrgUnit-5609936247324672-5753965828112384",
          "name": "Scan Holdings",
          "websiteURL": "www.victoryfood.net; www.scanholdings.com",
          "phoneNumber": "(91) (11) 2527 9000",
          "primaryAddress": "New Delhi, Delhi, India",
          "domains": ["scanholdings.com"],
          "description": "Victory Food Specialities FZE is one of the leading packaging and food product companies, spread across five continents. Our primary objective has been to consistently deliver superior quality product",
          "diversity": [],
          "security": [],
          "quality": [],
          "food": [],
          "sustainability": [],
          "tags": ["Beer Bottles", "Penny Lever Lid Assemblies", "Aluminium Easy Open Lids", "Ring Pull Aluminium EOE", "Aluminium Cans", "Steel Food Cans", "Aluminum Ends", "Steel DRD Cans"],
          "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-5609936247324672-5753965828112384",
          "logo": {
              "location": "https://logo.clearbit.com/scanholdings.com",
              "expiry": "2021-06-15T12:52:51+00:00"
          },
          "relationship": {},
          "offerings": ["Beer Bottles", "Penny Lever Lid Assemblies", "Aluminium Easy Open Lids", "Ring Pull Aluminium EOE", "Aluminium Cans", "Steel Food Cans", "Aluminum Ends", "Steel DRD Cans", "Beer Bottle Labels", "Paper labels for beer bottles", "Beer- Beverage Juice", "beverage Cans", "Beer Containers", "Beer Cans", "Steel DRD Cans 2 Piece", "metal cans", "Food Cans", "Steel Cans", "packaging products", "beverage drinks", "Metal Packaging", "Metal Can Lids", "prime quality tin plates", "Aluminum EZO", "Juice Metal Cans"]
      }, {
          "id": "OrgUnit-4742157814464512-5629499534213120",
          "name": "J.J. Enterprise",
          "websiteURL": "http://www.jjenterprise.co.in",
          "phoneNumber": "+91-11-23263767",
          "primaryAddress": "India",
          "domains": ["jjenterprise.co.in"],
          "description": "We not only manufacturing tin containers but provide complete solution about your rigid packaging requirements of Tin Cans, Composite Cans, Caps, Tinlets, etc besides Advertisement/ Publicity Boards",
          "diversity": [],
          "security": [],
          "quality": [{
              "category": "quality",
              "type": "iso9000",
              "typeName": "ISO 9000/9001: Quality management systems",
              "source": "CDG Certification Limited",
              "sourceURL": "",
              "dateAdded": "2019-11-20T23:56:00+00:00",
              "expiryDate": "2018-09-14T11:00:00+00:00",
              "lastChecked": "2019-11-20T23:56:00+00:00"
          }],
          "food": [],
          "sustainability": [],
          "tags": ["Aerosol cans", "Food cans", "Beverage cans", "Paint or varnish cans", "Cans and pails", "OTS Cans", "Round Tins", "Food tin can manufacturer"],
          "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-4742157814464512-5629499534213120",
          "logo": {
              "location": "https://logo.clearbit.com/jjenterprise.co.in",
              "expiry": "2021-06-15T12:52:51+00:00"
          },
          "relationship": {},
          "offerings": ["Aerosol cans", "Food cans", "Beverage cans", "Paint or varnish cans", "Cans and pails", "OTS Cans", "Round Tins", "Food tin can manufacturer", "Composite Cans", "Tin Cans Supplier", "Tin cans", "Manufacturer", "Paint Cans", "printing machinery", "OTS Cans for Food industry", "Components of Tin cans", "Tobacco Cans", "Raw material control", "Tin can manufacturer", "JJ Enterprise", "Final pre delivery control", "Pesticide Cans Manufacturer", "Packing Cans Manufacturer", "Automatic Lines", "Cardboard Cans"]
      }, {
          "id": "OrgUnit-5913975830872064-5504733403676672",
          "name": "Pushpam Foods",
          "websiteURL": "https://www.pushpamfoods.in/",
          "phoneNumber": "91-20-30915962",
          "primaryAddress": "India",
          "domains": ["pushpamfoods.in"],
          "description": "PET bottles filing line can pack hot / warm filling beverages in sizes up to 1.2 liters.",
          "diversity": [],
          "security": [],
          "quality": [{
              "category": "quality",
              "type": "iso9000",
              "typeName": "ISO 9000/9001: Quality management systems",
              "source": "TNV Certification Pvt. Ltd.",
              "sourceURL": "",
              "dateAdded": "2019-11-21T00:20:40+00:00",
              "expiryDate": "2017-09-08T11:00:00+00:00",
              "lastChecked": "2019-11-21T00:20:40+00:00"
          }, {
              "category": "quality",
              "type": "iso22000",
              "typeName": "ISO 22000: Food Safety Management",
              "source": "TNV Certification Pvt. Ltd.",
              "sourceURL": "",
              "dateAdded": "2019-11-21T00:20:40+00:00",
              "expiryDate": "2017-09-08T11:00:00+00:00",
              "lastChecked": "2019-11-21T00:20:40+00:00"
          }],
          "food": [],
          "sustainability": [],
          "tags": ["Pushpam Foods", "Beverages", "Aluminum Cans", "Pet Bottles", "Aluminimum cans", "PET containers", "carbonated beverages", "handling cans size"],
          "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-5913975830872064-5504733403676672",
          "logo": {
              "location": "https://logo.clearbit.com/pushpamfoods.in",
              "expiry": "2021-06-15T12:52:51+00:00"
          },
          "relationship": {},
          "offerings": ["Pushpam Foods", "Beverages", "Aluminum Cans", "Pet Bottles", "Aluminimum cans", "PET containers", "carbonated beverages", "handling cans size", "aluminimum can packaging", "non-carbonated beverages", "ROK Energy Drink", "Machine Energy Drink", "ISO 22000 and HACCP certification", "carbonation", "multi-pack carton", "Fruit Drink", "packaging solution", "Samuride Energy Drink", "Soft Drink Type", "Sport Drink", "Contract Filling", "Manufacturing", "Filling"]
      }, {
          "id": "OrgUnit-4913445703254016-5671413294039040",
          "name": "Impact Metals Ltd",
          "websiteURL": "impact1976.com",
          "phoneNumber": "+91-08458-279064",
          "primaryAddress": "Hyderābād, Telangana, India",
          "domains": ["impact1976.com"],
          "description": "Leading Aluminium Bottle Manufacturer, Aluminium Alloys, Aluminium Bottles, Aluminium Cans, Beverage Cans, Pesticide Bottles since 1976.",
          "diversity": [],
          "security": [],
          "quality": [],
          "food": [],
          "sustainability": [],
          "tags": ["Aluminium plastic closures", "Aluminium Bottle Manufacturers", "Aluminium enclosures", "Aluminium pesticides", "Aluminium Bottles", "Aluminium cans", "Pesticide Bottles", "Aluminium containers"],
          "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-4913445703254016-5671413294039040",
          "logo": {
              "location": "https://logo.clearbit.com/impact1976.com",
              "expiry": "2021-06-15T12:52:51+00:00"
          },
          "relationship": {},
          "offerings": ["Aluminium plastic closures", "Aluminium Bottle Manufacturers", "Aluminium enclosures", "Aluminium pesticides", "Aluminium Bottles", "Aluminium cans", "Pesticide Bottles", "Aluminium containers", "Aluminum Can", "Aluminium Bottles for Pesticides", "Aluminum Can Manufacturers", "Aluminium tubings", "Aluminium raw materials", "Aluminium Alloys", "Aluminium fragrance containers", "Aluminum Deodorant Bottles", "Aluminium metal closures", "Aluminium Ingots", "Aluminium Pesticide Bottles", "Aluminium EOE"]
      }, {
          "id": "OrgUnit-4608497883021312-6749686384033792",
          "name": "Blue Swan",
          "websiteURL": "http://www.blueswan.co.in",
          "phoneNumber": "+91 9051 248 686",
          "primaryAddress": "India",
          "domains": ["blueswan.co.in"],
          "description": "We strive to bring innovative food processing & beverage manufacturing solutions to enable our client face any change in market demand.",
          "diversity": [],
          "security": [],
          "quality": [],
          "food": [],
          "sustainability": [],
          "tags": ["Iron remover plant preparation", "steam tunnel conveyor", "Reverse Osmosis Water Plant", "Iron remover plant", "industrial process water", "purified water", "packaged drinking turnkey project", "Innovative Food & Beverage Solutions"],
          "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-4608497883021312-6749686384033792",
          "logo": {
              "location": "https://logo.clearbit.com/blueswan.co.in",
              "expiry": "2021-06-15T12:52:51+00:00"
          },
          "relationship": {},
          "offerings": ["Iron remover plant preparation", "steam tunnel conveyor", "Reverse Osmosis Water Plant", "Iron remover plant", "industrial process water", "purified water", "packaged drinking turnkey project", "Innovative Food & Beverage Solutions", "customised water solution design", "Beverage Turnkey plant concept", "innovative food and beverage solutions", "Beverage solution for soft drinks", "Food & Beverages plant equipments", "beverage production", "Beverage & water industry processes", "Beverage solution for CAN Juices/Soft Drinks", "existing water plant", "Non-alcoholic Beverage market", "processed food and beverage market", "automated filteration process", "water & beverage analytical equipment", "complete RO water purification"]
      }, {
          "id": "OrgUnit-5607886572748800-5463492750213120",
          "name": "Bajaj Processpack Limited",
          "websiteURL": "bajajmachines.com",
          "phoneNumber": "",
          "primaryAddress": "b-136 Sector 63, Noida, Uttar Pradesh, India, 201301",
          "domains": ["bajajmachines.com"],
          "description": "Complete plant for Juice beverage processing includes Blending Tanks,Pasteuriser, Homogeniser, sugar Preparation system and end packaging Machines like Rinser, Filler, capper, Bottle Shower cooler.",
          "diversity": [],
          "security": [],
          "quality": [{
              "category": "quality",
              "type": "iso9000",
              "typeName": "ISO 9000/9001: Quality management systems",
              "source": "SGI Management Private Limited",
              "sourceURL": "",
              "dateAdded": "2019-11-21T00:07:50+00:00",
              "expiryDate": "2019-11-28T11:00:00+00:00",
              "lastChecked": "2019-11-21T00:07:50+00:00"
          }],
          "food": [],
          "sustainability": [],
          "tags": ["Automatic Bottling Plant", "Bottling Equipment", "Package Drinking Water Plant", "Cooling Conveyor", "Automatic Bottle Filling Equipment", "Bottle Warming Cooling Conveyor", "Juice Beverages", "Mineral Packaged Drinking Water"],
          "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-5607886572748800-5463492750213120",
          "logo": {
              "location": "https://logo.clearbit.com/bajajmachines.com",
              "expiry": "2021-06-15T12:52:51+00:00"
          },
          "relationship": {},
          "offerings": ["Automatic Bottling Plant", "Bottling Equipment", "Package Drinking Water Plant", "Cooling Conveyor", "Automatic Bottle Filling Equipment", "Bottle Warming Cooling Conveyor", "Juice Beverages", "Mineral Packaged Drinking Water", "Beverage Processing Packaging Plant", "Preserved Fruits", "Semi-Automatic fruit vegetable Processing Equipment", "Dehydrated Fruits", "Automatic Bottling Plant for Juice", "Vegetables in Cans", "Juice Pulp Extraction Equipment", "Canned fruit", "fruit juice", "Beverage Processing and Packaging Plants", "Food Processing Machines", "Canned fruits and vegetables", "Canning Retort", "Fruit juices", "Juice beverage processing", "Beverage Bottling plant"]
      }]
  },
  "aggregations": {
      "attachments": [],
      "attributes": [{
          "key": "noRelationship",
          "doc_count": 2615
      }],
      "relationshipRating": [],
      "tags": [],
      "internalCategory": [],
      "spendGroups": [],
      "recentPercentile": [],
      "label": [],
      "warnings": [{
          "key": "none",
          "doc_count": 2537
      }, {
          "key": "inactive",
          "doc_count": 77
      }, {
          "key": "UNREACHABLE_DOMAIN",
          "doc_count": 51
      }, {
          "key": "UNKNOWN_REASON",
          "doc_count": 11
      }, {
          "key": "DOMAIN_FOR_SALE",
          "doc_count": 10
      }, {
          "key": "BLACKLISTED_DOMAIN",
          "doc_count": 3
      }, {
          "key": "INAPPROPRIATE_CONTENT_DOMAIN",
          "doc_count": 1
      }, {
          "key": "REDIRECTED_BLACKLISTED_DOMAIN:hugedomains.com",
          "doc_count": 1
      }, {
          "key": "banned",
          "doc_count": 1
      }],
      "country": [{
          "code": "IN",
          "key": "India",
          "doc_count": 2615
      }],
      "state": [{
          "code": "",
          "key": "India::Maharashtra",
          "doc_count": 372
      }, {
          "code": "",
          "key": "India::Nagaland",
          "doc_count": 265
      }, {
          "code": "",
          "key": "India::West Bengal",
          "doc_count": 215
      }, {
          "code": "",
          "key": "India::Karnataka",
          "doc_count": 152
      }, {
          "code": "",
          "key": "India::Gujarat",
          "doc_count": 135
      }, {
          "code": "",
          "key": "India::Rajasthan",
          "doc_count": 129
      }, {
          "code": "",
          "key": "India::Tamil Nadu",
          "doc_count": 127
      }, {
          "code": "",
          "key": "India::Uttar Pradesh",
          "doc_count": 104
      }, {
          "code": "",
          "key": "India::Bihar",
          "doc_count": 96
      }, {
          "code": "",
          "key": "India::Manipur",
          "doc_count": 88
      }, {
          "code": "",
          "key": "India::Delhi",
          "doc_count": 85
      }, {
          "code": "",
          "key": "India::Assam",
          "doc_count": 81
      }, {
          "code": "",
          "key": "India::Odisha",
          "doc_count": 65
      }, {
          "code": "",
          "key": "India::Haryana",
          "doc_count": 57
      }, {
          "code": "",
          "key": "India::Telangana",
          "doc_count": 54
      }, {
          "code": "",
          "key": "India::Punjab",
          "doc_count": 51
      }, {
          "code": "",
          "key": "India::Madhya Pradesh",
          "doc_count": 44
      }, {
          "code": "",
          "key": "India::Arunachal Pradesh",
          "doc_count": 34
      }, {
          "code": "",
          "key": "India::Mizoram",
          "doc_count": 32
      }, {
          "code": "",
          "key": "India::Andhra Pradesh",
          "doc_count": 27
      }, {
          "code": "",
          "key": "India::Kerala",
          "doc_count": 26
      }, {
          "code": "",
          "key": "India::Himachal Pradesh",
          "doc_count": 24
      }, {
          "code": "",
          "key": "India::Meghalaya",
          "doc_count": 22
      }, {
          "code": "",
          "key": "India::Jharkhand",
          "doc_count": 16
      }, {
          "code": "",
          "key": "India::Uttarakhand",
          "doc_count": 12
      }, {
          "code": "",
          "key": "India::Chandigarh",
          "doc_count": 11
      }, {
          "code": "",
          "key": "India::Tripura",
          "doc_count": 8
      }, {
          "code": "",
          "key": "India::Goa",
          "doc_count": 7
      }, {
          "code": "",
          "key": "India::Union Territory Of Puducherry",
          "doc_count": 7
      }, {
          "code": "",
          "key": "India::Jammu And Kashmir",
          "doc_count": 5
      }, {
          "code": "",
          "key": "India::Chhattisgarh",
          "doc_count": 4
      }, {
          "code": "",
          "key": "India::National Capital Territory Of Delhi",
          "doc_count": 3
      }, {
          "code": "",
          "key": "India::Sikkim",
          "doc_count": 3
      }, {
          "code": "",
          "key": "India::Puducherry",
          "doc_count": 2
      }, {
          "code": "",
          "key": "India::Dadra And Nagar Haveli And Daman And Diu",
          "doc_count": 1
      }, {
          "code": "",
          "key": "India::Daman And Diu",
          "doc_count": 1
      }],
      "city": [{
          "key": "India::Nagaland::Tuensang",
          "doc_count": 198
      }, {
          "key": "India::Maharashtra::Mumbai",
          "doc_count": 89
      }, {
          "key": "India::Delhi::New Delhi",
          "doc_count": 61
      }, {
          "key": "India::Maharashtra::Nagpur",
          "doc_count": 60
      }, {
          "key": "India::West Bengal::Malda",
          "doc_count": 58
      }, {
          "key": "India::Maharashtra::Pune",
          "doc_count": 52
      }, {
          "key": "India::Karnataka::Bangalore",
          "doc_count": 49
      }, {
          "key": "India::West Bengal::Medinipur",
          "doc_count": 48
      }, {
          "key": "India::Tamil Nadu::Chennai",
          "doc_count": 47
      }, {
          "key": "India::West Bengal::Bardhaman",
          "doc_count": 44
      }, {
          "key": "India::Telangana::Hyderabad",
          "doc_count": 37
      }, {
          "key": "India::Gujarat::Ahmedabad",
          "doc_count": 36
      }, {
          "key": "India::Assam::Udalguri",
          "doc_count": 32
      }, {
          "key": "India::West Bengal::Kolkata",
          "doc_count": 29
      }, {
          "key": "India::Rajasthan::Jaipur",
          "doc_count": 28
      }, {
          "key": "India::Nagaland::Mokokchung",
          "doc_count": 27
      }, {
          "key": "India::Bihar::Patna",
          "doc_count": 25
      }, {
          "key": "India::Bihar::Same",
          "doc_count": 24
      }, {
          "key": "India::Uttar Pradesh::Noida",
          "doc_count": 24
      }, {
          "key": "India::Mizoram::Aizawl",
          "doc_count": 22
      }, {
          "key": "India::Odisha::Khordha",
          "doc_count": 22
      }, {
          "key": "India::Delhi::Delhi",
          "doc_count": 21
      }, {
          "key": "India::Manipur::Ukhrul",
          "doc_count": 20
      }, {
          "key": "India::Nagaland::Longkhim Town",
          "doc_count": 20
      }, {
          "key": "India::Haryana::Gurgaon",
          "doc_count": 19
      }, {
          "key": "India::Madhya Pradesh::Indore",
          "doc_count": 19
      }, {
          "key": "India::Assam::Guwahati",
          "doc_count": 18
      }, {
          "key": "India::Maharashtra::Thane",
          "doc_count": 17
      }, {
          "key": "India::Karnataka::Gajapati",
          "doc_count": 16
      }, {
          "key": "India::Maharashtra::Nashik",
          "doc_count": 16
      }, {
          "key": "India::Manipur::Senapati",
          "doc_count": 16
      }, {
          "key": "India::Uttar Pradesh::Lucknow",
          "doc_count": 16
      }, {
          "key": "India::Gujarat::Ahmadabad",
          "doc_count": 14
      }, {
          "key": "India::Gujarat::Surat",
          "doc_count": 14
      }, {
          "key": "India::Karnataka::Bengaluru",
          "doc_count": 14
      }, {
          "key": "India::Maharashtra::Bombay",
          "doc_count": 14
      }, {
          "key": "India::Manipur::Tamenglong",
          "doc_count": 14
      }, {
          "key": "India::Odisha::Jagatsinghpur",
          "doc_count": 14
      }, {
          "key": "India::Odisha::Kendrapara",
          "doc_count": 14
      }, {
          "key": "India::Maharashtra::Aurangabad",
          "doc_count": 13
      }, {
          "key": "India::Maharashtra::Navi Mumbai",
          "doc_count": 13
      }, {
          "key": "India::Bihar::Muzaffarpur",
          "doc_count": 12
      }, {
          "key": "India::Jharkhand::Ranchi",
          "doc_count": 12
      }, {
          "key": "India::Tamil Nadu::Coimbatore",
          "doc_count": 12
      }, {
          "key": "India::Chandigarh::Chandigarh",
          "doc_count": 11
      }, {
          "key": "India::Meghalaya::Williamnagar",
          "doc_count": 10
      }, {
          "key": "India::Punjab::Ludhiana",
          "doc_count": 10
      }, {
          "key": "India::Rajasthan::Alwar",
          "doc_count": 10
      }, {
          "key": "India::Rajasthan::Jodhpur",
          "doc_count": 10
      }, {
          "key": "India::Tamil Nadu::Madurai",
          "doc_count": 10
      }, {
          "key": "India::Punjab::Jalandhar",
          "doc_count": 9
      }, {
          "key": "India::Gujarat::Vadodara",
          "doc_count": 8
      }, {
          "key": "India::Karnataka::Mysuru",
          "doc_count": 8
      }, {
          "key": "India::Maharashtra::Amravati",
          "doc_count": 8
      }, {
          "key": "India::Maharashtra::Latur",
          "doc_count": 8
      }, {
          "key": "India::Manipur::Chandel",
          "doc_count": 8
      }, {
          "key": "India::Rajasthan::Sri Ganganagar",
          "doc_count": 8
      }, {
          "key": "India::Uttar Pradesh::Ghaziabad",
          "doc_count": 8
      }, {
          "key": "India::Uttar Pradesh::Kanpur",
          "doc_count": 8
      }, {
          "key": "India::Gujarat::Rajkot",
          "doc_count": 7
      }, {
          "key": "India::Haryana::Faridabad",
          "doc_count": 7
      }, {
          "key": "India::Bihar::Vaishali",
          "doc_count": 6
      }, {
          "key": "India::Himachal Pradesh::Kullu",
          "doc_count": 6
      }, {
          "key": "India::Karnataka::Belagavi",
          "doc_count": 6
      }, {
          "key": "India::Meghalaya::Selsella",
          "doc_count": 6
      }, {
          "key": "India::Mizoram::Lunglei",
          "doc_count": 6
      }, {
          "key": "India::Nagaland::Longkhim",
          "doc_count": 6
      }, {
          "key": "India::Punjab::Patiala",
          "doc_count": 6
      }, {
          "key": "India::Punjab::Rajpura",
          "doc_count": 6
      }, {
          "key": "India::Rajasthan::Ganganagar",
          "doc_count": 6
      }, {
          "key": "India::Rajasthan::Udaipur",
          "doc_count": 6
      }, {
          "key": "India::Tripura::Agartala",
          "doc_count": 6
      }, {
          "key": "India::Karnataka::Dharwad",
          "doc_count": 5
      }, {
          "key": "India::Kerala::Cochin",
          "doc_count": 5
      }, {
          "key": "India::Maharashtra::Kolhapur",
          "doc_count": 5
      }, {
          "key": "India::Rajasthan::Ajmer",
          "doc_count": 5
      }, {
          "key": "India::West Bengal::Calcutta",
          "doc_count": 5
      }, {
          "key": "India::::Goalpara",
          "doc_count": 4
      }, {
          "key": "India::Andhra Pradesh::Guntur",
          "doc_count": 4
      }, {
          "key": "India::Andhra Pradesh::Visakhapatnam",
          "doc_count": 4
      }, {
          "key": "India::Arunachal Pradesh::Doimukh",
          "doc_count": 4
      }, {
          "key": "India::Arunachal Pradesh::Naharlagun",
          "doc_count": 4
      }, {
          "key": "India::Arunachal Pradesh::Ruksin",
          "doc_count": 4
      }, {
          "key": "India::Arunachal Pradesh::Ziro",
          "doc_count": 4
      }, {
          "key": "India::Assam::Goalpara",
          "doc_count": 4
      }, {
          "key": "India::Bihar::Bihar Sharif",
          "doc_count": 4
      }, {
          "key": "India::Bihar::Jamui",
          "doc_count": 4
      }, {
          "key": "India::Bihar::Madhubani",
          "doc_count": 4
      }, {
          "key": "India::Gujarat::Amreli",
          "doc_count": 4
      }, {
          "key": "India::Gujarat::Jamnagar",
          "doc_count": 4
      }, {
          "key": "India::Haryana::Gurugram",
          "doc_count": 4
      }, {
          "key": "India::Haryana::Sonipat",
          "doc_count": 4
      }, {
          "key": "India::Himachal Pradesh::Hamirpur",
          "doc_count": 4
      }, {
          "key": "India::Karnataka::Ballari",
          "doc_count": 4
      }, {
          "key": "India::Karnataka::Davanagere",
          "doc_count": 4
      }, {
          "key": "India::Karnataka::Nagpur.",
          "doc_count": 4
      }],
      "sustainability": [{
          "key": "sustainability",
          "doc_count": 48,
          "name": "Sustainability"
      }, {
          "key": "iso14000",
          "doc_count": 44,
          "name": "ISO 14000: Environmental Management"
      }, {
          "key": "iso50001",
          "doc_count": 13,
          "name": "ISO 50001: Energy Management"
      }, {
          "key": "environment",
          "doc_count": 10,
          "name": "Environment"
      }, {
          "key": "emissionReduction",
          "doc_count": 2,
          "name": "Emission Reduction"
      }],
      "sustainability.subTypes": [{
          "key": "subTypes.environment.chainOfCustody",
          "doc_count": 10,
          "name": "Chain Of Custody"
      }],
      "food": [{
          "key": "gfsi",
          "doc_count": 35,
          "name": "Global Food Safety Initiative"
      }, {
          "key": "food",
          "doc_count": 20,
          "name": "Food"
      }],
      "food.subTypes": [{
          "key": "subTypes.gfsi.foodSafetyManagementProgram",
          "doc_count": 16,
          "name": "Food Safety Management Program"
      }, {
          "key": "subTypes.gfsi.food",
          "doc_count": 10,
          "name": "Food"
      }, {
          "key": "subTypes.gfsi.foodPackagingAndPackagingMaterials",
          "doc_count": 7,
          "name": "Food Packaging And Packaging Materials"
      }, {
          "key": "subTypes.gfsi.ifs",
          "doc_count": 1,
          "name": "Ifs"
      }],
      "quality": [{
          "key": "quality",
          "doc_count": 211,
          "name": "Quality"
      }, {
          "key": "iso9000",
          "doc_count": 154,
          "name": "ISO 9000/9001: Quality management systems"
      }, {
          "key": "iso22000",
          "doc_count": 60,
          "name": "ISO 22000: Food Safety Management"
      }, {
          "key": "gmp",
          "doc_count": 55,
          "name": "Gmp"
      }, {
          "key": "iso13485",
          "doc_count": 7,
          "name": "ISO 13485: Medical devices - Quality management systems"
      }, {
          "key": "iso16949",
          "doc_count": 3,
          "name": "ISO 16949: Quality Management Systems"
      }, {
          "key": "iso17025",
          "doc_count": 3,
          "name": "ISO 17025: General requirements for the competence of testing and calibration laboratories"
      }, {
          "key": "iso31000",
          "doc_count": 1,
          "name": "ISO 31000: Risk Management"
      }],
      "quality.subTypes": [{
          "key": "subTypes.gmp.cgmp",
          "doc_count": 18,
          "name": "Cgmp"
      }, {
          "key": "subTypes.gmp.cGmp",
          "doc_count": 3,
          "name": "C Gmp"
      }, {
          "key": "subTypes.gmp.GMP",
          "doc_count": 1,
          "name": "GMP"
      }, {
          "key": "subTypes.gmp.cGMP",
          "doc_count": 1,
          "name": "C GMP"
      }, {
          "key": "subTypes.gmp.eugmp",
          "doc_count": 1,
          "name": "Eugmp"
      }, {
          "key": "subTypes.gmp.whoGmp",
          "doc_count": 1,
          "name": "Who Gmp"
      }],
      "supplierTags": [{
          "key": "chemicals",
          "doc_count": 29
      }, {
          "key": "packaging",
          "doc_count": 24
      }, {
          "key": "food packaging",
          "doc_count": 20
      }, {
          "key": "trading company",
          "doc_count": 19
      }, {
          "key": "food",
          "doc_count": 18
      }, {
          "key": "industries",
          "doc_count": 14
      }, {
          "key": "ambient stable products processing",
          "doc_count": 13
      }, {
          "key": "spices",
          "doc_count": 13
      }, {
          "key": "beverages",
          "doc_count": 12
      }, {
          "key": "packaging materials",
          "doc_count": 12
      }],
      "security": [{
          "key": "iso27000",
          "doc_count": 6,
          "name": "ISO/IEC 27000:Information Technology - Security Techniques"
      }, {
          "key": "security",
          "doc_count": 6,
          "name": "Security"
      }],
      "security.subTypes": [],
      "diversity": [{
          "key": "sbe",
          "doc_count": 1865,
          "name": "Small Business Enterprise"
      }, {
          "key": "diversity",
          "doc_count": 1862,
          "name": "Diversity"
      }, {
          "key": "mbe",
          "doc_count": 415,
          "name": "Minority-owned Business Enterprise"
      }, {
          "key": "dbe",
          "doc_count": 3,
          "name": "Disadvantaged Business Enterprise"
      }, {
          "key": "wbe",
          "doc_count": 3,
          "name": "Women-owned Business Enterprise"
      }, {
          "key": "hub",
          "doc_count": 1,
          "name": "HubZone Certified"
      }, {
          "key": "hud",
          "doc_count": 1,
          "name": "U.S. Department of Housing and Urban Development"
      }, {
          "key": "sdb",
          "doc_count": 1,
          "name": "Small Disadvantaged Business"
      }],
      "diversity.subTypes": [{
          "key": "subTypes.sbe.msme",
          "doc_count": 1863,
          "name": "Msme"
      }, {
          "key": "subTypes.mbe.msme",
          "doc_count": 411,
          "name": "Msme"
      }, {
          "key": "subTypes.mbe.africanAmerican",
          "doc_count": 1,
          "name": "African American"
      }, {
          "key": "subTypes.mbe.asianPacificAmerican",
          "doc_count": 1,
          "name": "Asian Pacific American"
      }],
      "supplierUpdated": [{
          "key": 0,
          "key_as_string": "false",
          "doc_count": 2614
      }, {
          "key": 1,
          "key_as_string": "true",
          "doc_count": 1
      }],
      "emailAvailable": [{
          "key": 1,
          "key_as_string": "true",
          "doc_count": 2242
      }, {
          "key": 0,
          "key_as_string": "false",
          "doc_count": 373
      }],
      "supplierType": [{
          "key": "",
          "doc_count": 2615
      }],
      "sector": [{
          "key": "31-33",
          "doc_count": 510,
          "description": "Manufacturing"
      }, {
          "key": "42",
          "doc_count": 136,
          "description": "Wholesale Trade"
      }, {
          "key": "54",
          "doc_count": 114,
          "description": "Professional, Scientific, and Technical Services"
      }, {
          "key": "56",
          "doc_count": 45,
          "description": "Administrative and Support and Waste Management and Remediation Services"
      }, {
          "key": "23",
          "doc_count": 33,
          "description": "Construction"
      }, {
          "key": "72",
          "doc_count": 30,
          "description": "Accommodation and Food Services"
      }, {
          "key": "48-49",
          "doc_count": 16,
          "description": "Transportation and Warehousing"
      }, {
          "key": "51",
          "doc_count": 15,
          "description": "Information"
      }, {
          "key": "22",
          "doc_count": 14,
          "description": "Utilities"
      }, {
          "key": "53",
          "doc_count": 12,
          "description": "Real Estate and Rental and Leasing"
      }, {
          "key": "81",
          "doc_count": 11,
          "description": "Other Services (except Public Administration)"
      }, {
          "key": "11",
          "doc_count": 10,
          "description": "Agriculture, Forestry, Fishing and Hunting"
      }, {
          "key": "44-45",
          "doc_count": 10,
          "description": "Retail Trade"
      }, {
          "key": "62",
          "doc_count": 7,
          "description": "Health Care and Social Assistance"
      }, {
          "key": "71",
          "doc_count": 5,
          "description": "Arts, Entertainment, and Recreation"
      }, {
          "key": "52",
          "doc_count": 4,
          "description": "Finance and Insurance"
      }, {
          "key": "61",
          "doc_count": 4,
          "description": "Educational Services"
      }, {
          "key": "92",
          "doc_count": 3,
          "description": "Public Administration"
      }, {
          "key": "21",
          "doc_count": 2,
          "description": "Mining, Quarrying, and Oil and Gas Extraction"
      }, {
          "key": "55",
          "doc_count": 2,
          "description": "Management of Companies and Enterprises"
      }],
      "diversityProgram": [{
          "key": 0,
          "key_as_string": "false",
          "doc_count": 2613
      }, {
          "key": 1,
          "key_as_string": "true",
          "doc_count": 2
      }],
      "communities": [],
      "communityStatus": [],
      "suggestions": [{
          "value": "Chemicals",
          "label": "Chemicals"
      }, {
          "value": "Packaging",
          "label": "Packaging"
      }, {
          "value": "Food Packaging",
          "label": "Food Packaging"
      }, {
          "value": "Trading Company",
          "label": "Trading Company"
      }, {
          "value": "Food",
          "label": "Food"
      }, {
          "value": "Industries",
          "label": "Industries"
      }, {
          "value": "Ambient Stable Products Processing",
          "label": "Ambient Stable Products Processing"
      }, {
          "value": "Spices",
          "label": "Spices"
      }, {
          "value": "Beverages",
          "label": "Beverages"
      }, {
          "value": "Packaging Materials",
          "label": "Packaging Materials"
      }],
      "filterSuggestions": {
          "naics": [{
              "value": "31-33",
              "label": "Manufacturing"
          }, {
              "value": "42",
              "label": "Wholesale"
          }, {
              "value": "54",
              "label": "Professional Services"
          }, {
              "value": "56",
              "label": "Waste Mgmt"
          }, {
              "value": "23",
              "label": "Construction"
          }]
      }
  }
}

console.log(supShortList)




