let NLU_DATA = {
  "data": {
    "result": {
      "type": "TEXT",
      "contextId": "_bBD7NdE4CJEd_VUrrM5i",
      "context": "PriceCostInfo",
      "topAnswers": [{
          "type": "TEXT",
          "contextId": "_bBD7NdE4CJEd_VUrrM5i",
          "context": "PriceCostInfo",
          "responseId": "FtfBeaRjCc4~uRFvl_ffU",
          "confidence": 17.83,
          "response": "skillPriceCost",
          "stringResponse": "skillPriceCost",
          "parsedResponse": "skillPriceCost"
        },
        {
          "type": "TEXT",
          "contextId": "xIGZJeOdzOTs3auA4fBlD",
          "context": "Supplier",
          "responseId": "GkFj0Oo2RbsU90FXdkVYE",
          "confidence": 4.05,
          "response": "skillSupplierRisk",
          "stringResponse": "skillSupplierRisk",
          "parsedResponse": "skillSupplierRisk"
        },
        {
          "type": "TEXT",
          "contextId": "qeDhlidOUbbxW0uQ8yjIj",
          "context": "NoneIntent",
          "responseId": "j3wTQWHmJea~cQM44UJFR",
          "confidence": 3.8,
          "response": "skillNone",
          "stringResponse": "skillNone",
          "parsedResponse": "skillNone"
        },
        {
          "type": "TEXT",
          "contextId": "tCAaiBGsrfha14S~~ZGWH",
          "context": "SupplierDetails",
          "responseId": "eeWHWDyGFqxLjJ~CHqDvu",
          "confidence": 0.94,
          "response": "skillSupplierDetail",
          "stringResponse": "skillSupplierDetail",
          "parsedResponse": "skillSupplierDetail"
        },
        {
          "type": "TEXT",
          "contextId": "qJJsX75ck1W8EXnIs~BNE",
          "context": "ToAnalyst",
          "responseId": "kzZcNa18jtjNYoP7xru~_",
          "confidence": 0.9,
          "response": "toAnalyst",
          "stringResponse": "toAnalyst",
          "parsedResponse": "toAnalyst"
        }
      ],
      "entities": [{
          "parsedValue": [{
            "timex": "(2020-12-01,2021-12-01,P12M)",
            "resolution": [{
              "start": "2020-12-01",
              "end": "2021-12-01"
            }]
          }],
          "value": "from Dec 2020 to Dec 2021",
          "entity": "datetimeV2",
          "detailedType": "daterange",
          "startPos": 0,
          "endPos": 25,
          "entityName": "datetimeV2",
          "confidence": 100
        },
        {
          "parsedValue": "from Dec 2020 to Dec 2021",
          "value": "from Dec 2020 to Dec 2021",
          "entity": "KeyNameEntity",
          "detailedType": "KeyNameEntity",
          "startPos": 0,
          "endPos": 25,
          "entityName": "KeyNameEntity",
          "confidence": 100
        },
        {
          "parsedValue": 2020,
          "value": "2020",
          "entity": "number",
          "detailedType": "number",
          "startPos": 9,
          "endPos": 13,
          "entityName": "number",
          "confidence": 100
        },
        {
          "parsedValue": 2021,
          "value": "2021",
          "entity": "number",
          "detailedType": "number",
          "startPos": 21,
          "endPos": 25,
          "entityName": "number",
          "confidence": 100
        }
      ],
      "question": "from Dec 2020 to Dec 2021",
      "phrase": "from Dec 2020 to Dec 2021",
      "response": "skillPriceCost",
      "stringResponse": "skillPriceCost",
      "responseId": "FtfBeaRjCc4~uRFvl_ffU",
      "parsedResponse": "skillPriceCost",
      "contextName": "PriceCostInfo",
      "contextQueryId": "9871e96f-8ae1-4936-893b-c2b7cb585472",
      "confidence": 17.83,
      "topResponses": [{
          "type": "TEXT",
          "contextId": "_bBD7NdE4CJEd_VUrrM5i",
          "context": "PriceCostInfo",
          "responseId": "FtfBeaRjCc4~uRFvl_ffU",
          "confidence": 17.83,
          "response": "skillPriceCost",
          "stringResponse": "skillPriceCost",
          "parsedResponse": "skillPriceCost"
        },
        {
          "type": "TEXT",
          "contextId": "xIGZJeOdzOTs3auA4fBlD",
          "context": "Supplier",
          "responseId": "GkFj0Oo2RbsU90FXdkVYE",
          "confidence": 4.05,
          "response": "skillSupplierRisk",
          "stringResponse": "skillSupplierRisk",
          "parsedResponse": "skillSupplierRisk"
        },
        {
          "type": "TEXT",
          "contextId": "qeDhlidOUbbxW0uQ8yjIj",
          "context": "NoneIntent",
          "responseId": "j3wTQWHmJea~cQM44UJFR",
          "confidence": 3.8,
          "response": "skillNone",
          "stringResponse": "skillNone",
          "parsedResponse": "skillNone"
        },
        {
          "type": "TEXT",
          "contextId": "tCAaiBGsrfha14S~~ZGWH",
          "context": "SupplierDetails",
          "responseId": "eeWHWDyGFqxLjJ~CHqDvu",
          "confidence": 0.94,
          "response": "skillSupplierDetail",
          "stringResponse": "skillSupplierDetail",
          "parsedResponse": "skillSupplierDetail"
        },
        {
          "type": "TEXT",
          "contextId": "qJJsX75ck1W8EXnIs~BNE",
          "context": "ToAnalyst",
          "responseId": "kzZcNa18jtjNYoP7xru~_",
          "confidence": 0.9,
          "response": "toAnalyst",
          "stringResponse": "toAnalyst",
          "parsedResponse": "toAnalyst"
        }
      ]
    }
  }
}


console.log(NLU_DATA.data.result);

// let res = {};

// res.conf = NLU_DATA.data.result.confidence;
// res.intent = NLU_DATA.data.result.context;
// res.entities = NLU_DATA.data.result.entities;
// res.top_response = NLU_DATA.data.result.topResponses[0].parsedResponse

// console.log(res)


// res.entities.forEach(k=> {
//   console.log(k)
//   if(k.entity == 'geographyV2' && k.detailedType == 'countryRegion'){
//     res.geo = true;
//     res.geo_val = k.entity;
//   }
// })
// ================================================================

let jsNluParams = {};
jsNluParams.geo = null;
jsNluParams.geo_val = null;
jsNluParams.KeyNameEntity = null;
jsNluParams.PriceCostEntity = null;
jsNluParams.PriceKeyWordEntity = null;
jsNluParams.geo_type = null;
jsNluParams.datetimeV2 = null;

NLU_DATA.data.result.entities.forEach(r => {
  // country
  if (r.entity == 'geographyV2' && r.detailedType == 'countryRegion') {
    jsNluParams.geo = true;
    jsNluParams.geo_val = r.parsedValue;
    jsNluParams.geo_type = r.detailedType;
  }
  // region
  if (r.entity == 'geographyV2' && r.detailedType == 'contintent') {
    jsNluParams.geo = true;
    jsNluParams.geo_val = k.parsedValue;
    jsNluParams.geo_type = k.detailedType;
  }
  if (r.entity == "KeyNameEntity") {
    jsNluParams.KeyNameEntity = r.value
  }
  if (r.entity == "PriceChangeEntity") {
    jsNluParams.PriceChangeEntity = r.value
  }
  if (r.entity == "PriceKeyWordEntity") {
    jsNluParams.PriceKeyWordEntity = r.value
  }
  if (r.entity == "PriceCostEntity") {
    jsNluParams.PriceCostEntity = r.value
  }
  if (r.entity == "datetimeV2") {
    jsNluParams.datetimeV2 = r.value
    if (r.detailedType == 'daterange') {
      jsNluParams.start_range = r.parsedValue[0].resolution[0].start;
      jsNluParams.end_range = r.parsedValue[0].resolution[0].end
    }
  }
});

console.log(jsNluParams)


// let data = {
//   "geographyV2": "japan",
//   "region": false,
//   "PriceChangeEntity": null,
//   "PriceKeyWordEntity": "price",
//   "datetimeV2": null,
//   "category_name": null,
//   "start_range": null,
//   "end_range": null,
//   "PriceCostEntity": "price",
//   "KeyNameEntity": "iPhone 12",
//   // "scope": {
//   //   "location":null,
//   //   "type":null,
//   //   "category":null
//   // }
// };
// test purpose
// data.scope = {
//   "location": null,
//   "type": null,
//   "category": null
// }
// console.log(data.scope);
// let scopes = data.scope;
// let array_category = [null, {}];
// let array_location = ["region", "country"];
// let array_type = ["grade", "role"];
// const random_category = array_category[Math.floor(Math.random() * array_category.length)];
// const random_location = array_location[Math.floor(Math.random() * array_location.length)];
// const random_type = array_type[Math.floor(Math.random() * array_type.length)];


// for (const [key, value] of Object.entries(scopes)) {
//   console.log(`${key}: ${value}`);
//   if (key == "location") {
//     if (!value) {
//       console.log(random_location);
//       data.scope.location = random_location;
//     }
//   }
//   if (key == "type") {
//     if (!value) {
//       console.log(random_type);
//       data.scope.type = random_type;
//     }
//   }
//   if (key == "category") {
//     if (!value) {
//       console.log(random_category);
//       data.scope.category = random_category;
//     }
//   }
// }

// console.log(data)
// location: null
// type: null
// added: null


// BREAK ================================

// let dumData = {
//   "region": false,
//   "datetimeV2": "null",
//   "start_time": "null",
//   "KeyNameEntity": "oil",
//   "end_time": "null",
//   "grade_role": null,
//   "scope_category": "not_null",
//   "scope_type": "grade",
//   "scope_location": "country",
//   "geographyV2": "Saudi Arabia"
// };


// let today = new Date().toISOString().slice(0, 10)

// const startDate = '2016-06-01';
// const endDate = today;

// const diffInMs = new Date(endDate) - new Date(startDate)
// // console.log(diffInMs)
// const in_days = diffInMs / (1000 * 60 * 60 * 24);
// const in_years = parseInt(in_days / 365)

// console.log("Days: " + in_days.toLocaleString());
// console.log("Years: " + in_years);

// BREAK ================================
// MOCKED DATA FORMCEPT
//Has both data
// const complete = {
//   "response": {
//     "sub_category": {
//       "uuid": "756ad3b7-ea7f-11ea-acc0-0a730e7eabfe",
//       "name": "Natural Gas",
//       "id": "D335",
//       "price_type": "price_direct",
//       "cost_structure": {
//         "available": true,
//         "location": [{
//             "id": "AU",
//             "name": "Australia",
//             "frequency": "Annual"
//           },
//           {
//             "id": "US",
//             "name": "USA",
//             "frequency": "Annual"
//           }
//         ]
//       },
//       "grades": [{
//         "id": "D335-01",
//         "name": "Industrial Natural Gas",
//         "type": "Grade",
//         "frequency": "Monthly",
//         "accessible": true,
//         "location": [{
//             "id": "BM,CA,GL,PM,US",
//             "name": "North America"
//           },
//           {
//             "id": "AF,AM,AZ,BD,BT,CN,GE,HK,IN,IR,JP,KZ,KR,KP,KG,MO,MV,MN,NP,PK,LK,TW,TJ,TM,UZ",
//             "name": "Asia"
//           },
//           {
//             "id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
//             "name": "Europe"
//           }
//         ]
//       }]
//     }
//   },
//   "status": {
//     "code": "beroebot.market-monitor-002",
//     "msg": "Request Processed",
//     "rts": 1632969506978,
//     "cache": false,
//     "params": {
//       "sub_category_id": "D335"
//     },
//     "version": {
//       "version": "3.0.0-SNAPSHOT",
//       "codename": "CLOVA",
//       "branch": "dev",
//       "revision": "60d1bb8",
//       "basetag": ""
//     },
//     "rms": 182
//   }
// }
// //Do not have cost structure data
// const no_cost_structure = {
//   "response": {
//     "sub_category": {
//       "uuid": "756ac8e1-ea7f-11ea-acc0-0a730e7eabfe",
//       "name": "Crude oil",
//       "id": "A001",
//       "price_type": "price_direct",
//       "cost_structure": {
//         "available": false,
//         "location": []
//       },
//       "grades": [{
//           "id": "A001-03",
//           "name": "Crude Oil (Intratec)",
//           "type": "Grade",
//           "frequency": "Monthly",
//           "accessible": true,
//           "location": [{
//               "id": "AE",
//               "name": "United Arab Emirates"
//             },
//             {
//               "id": "GB",
//               "name": "United Kingdom"
//             },
//             {
//               "id": "NG",
//               "name": "Nigeria"
//             },
//             {
//               "id": "US",
//               "name": "USA"
//             }
//           ]
//         },
//         {
//           "id": "A001-01",
//           "name": "Brent",
//           "type": "Grade",
//           "frequency": "Monthly",
//           "accessible": true,
//           "location": [{
//             "id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
//             "name": "Europe"
//           }]
//         },
//         {
//           "id": "A001-02",
//           "name": "WTI",
//           "type": "Grade",
//           "frequency": "Monthly",
//           "accessible": true,
//           "location": [{
//             "id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
//             "name": "Europe"
//           }]
//         }
//       ]
//     }
//   },
//   "status": {
//     "code": "beroebot.market-monitor-002",
//     "msg": "Request Processed",
//     "rts": 1632821910303,
//     "cache": false,
//     "params": {
//       "sub_category_id": "A001"
//     },
//     "version": {
//       "version": "3.0.0-SNAPSHOT",
//       "codename": "CLOVA",
//       "branch": "dev",
//       "revision": "0b3bc82",
//       "basetag": ""
//     },
//     "rms": 3620
//   }
// }
// //Do not have price data
// const no_price_structure = {
//   "response": {
//     "sub_category": {
//       "uuid": "756ad3c9-ea7f-11ea-acc0-0a730e7eabfe",
//       "name": "Water",
//       "id": "D338",
//       "price_type": null,
//       "cost_structure": {
//         "available": true,
//         "location": [{
//             "id": "GB",
//             "name": "United Kingdom",
//             "frequency": "Quarterly"
//           },
//           {
//             "id": "US",
//             "name": "USA",
//             "frequency": "Quarterly"
//           }
//         ]
//       },
//       "grades": []
//     }
//   },
//   "status": {
//     "code": "beroebot.market-monitor-002",
//     "msg": "Request Processed",
//     "rts": 1632968930062,
//     "cache": false,
//     "params": {
//       "sub_category_id": "D338"
//     },
//     "version": {
//       "version": "3.0.0-SNAPSHOT",
//       "codename": "CLOVA",
//       "branch": "dev",
//       "revision": "60d1bb8",
//       "basetag": ""
//     },
//     "rms": 141
//   }
// }


let cat_list = [{
    "sub_category": {
      "uuid": "756ad3b7-ea7f-11ea-acc0-0a730e7eabfe",
      "name": "Natural Gas",
      "id": "D335",
      "price_type": "price_direct",
      "cost_structure": {
        "available": true,
        "location": [{
            "id": "AU",
            "name": "Australia",
            "frequency": "Annual"
          },
          {
            "id": "US",
            "name": "USA",
            "frequency": "Annual"
          }
        ]
      },
      "grades": [{
        "id": "D335-01",
        "name": "Industrial Natural Gas",
        "type": "Grade",
        "frequency": "Monthly",
        "accessible": true,
        "location": [{
            "id": "BM,CA,GL,PM,US",
            "name": "North America"
          },
          {
            "id": "AF,AM,AZ,BD,BT,CN,GE,HK,IN,IR,JP,KZ,KR,KP,KG,MO,MV,MN,NP,PK,LK,TW,TJ,TM,UZ",
            "name": "Asia"
          },
          {
            "id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
            "name": "Europe"
          }
        ]
      }]
    }
  },
  {
    "sub_category": {
      "uuid": "756ac8e1-ea7f-11ea-acc0-0a730e7eabfe",
      "name": "Crude oil",
      "id": "A001",
      "price_type": "price_direct",
      "cost_structure": {
        "available": false,
        "location": []
      },
      "grades": [{
          "id": "A001-03",
          "name": "Crude Oil (Intratec)",
          "type": "Grade",
          "frequency": "Monthly",
          "accessible": true,
          "location": [{
              "id": "AE",
              "name": "United Arab Emirates"
            },
            {
              "id": "GB",
              "name": "United Kingdom"
            },
            {
              "id": "NG",
              "name": "Nigeria"
            },
            {
              "id": "US",
              "name": "USA"
            }
          ]
        },
        {
          "id": "A001-01",
          "name": "Brent",
          "type": "Grade",
          "frequency": "Monthly",
          "accessible": true,
          "location": [{
            "id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
            "name": "Europe"
          }]
        },
        {
          "id": "A001-02",
          "name": "WTI",
          "type": "Grade",
          "frequency": "Monthly",
          "accessible": true,
          "location": [{
            "id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
            "name": "Europe"
          }]
        }
      ]
    }
  }, {
    "sub_category": {
      "uuid": "756ad3c9-ea7f-11ea-acc0-0a730e7eabfe",
      "name": "Water",
      "id": "D338",
      "price_type": null,
      "cost_structure": {
        "available": true,
        "location": [{
            "id": "GB",
            "name": "United Kingdom",
            "frequency": "Quarterly"
          },
          {
            "id": "US",
            "name": "USA",
            "frequency": "Quarterly"
          }
        ]
      },
      "grades": []
    }
  }
]

console.log(cat_list)

// check if category_exist = true/false/null
// get the user_cat_req and run it by the list_of_category_available

// to check, we need Levenshtein distance

let js_data = {};
js_data.KeyNameEntity = "Crude Oil"; // TEST TERM HERE


let data = {};
data.score = [];
data.exit_nodes = {};

// Levenshtein distance
function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

// CATEGORY LIST CHECK if user_req matches one of the LIST// category list  
// let cat_list = await this.mergeFields['trigCategoryList'].get({
//   path: "list"
// });

// check if user_req matches cat_list
for (let index = 0; index < cat_list.length; index++) {
  const element = cat_list[index];
  console.log("data_cat_name: " + element.sub_category.name.toLowerCase())
  console.log("KeyNameEntity: " + js_data.KeyNameEntity)

  let score = similarity(element.sub_category.name.toLowerCase(), js_data.KeyNameEntity.toLowerCase());
  data.score.push(score)
  if (score === 1 || (score > 0.85)) {
    data.data_matched = element.sub_category
  }
  console.log("===============")
}

if (data.score.includes(1)) {
  data.is_match = true;
} else {
  data.is_match = false;
  data.highest_score = Math.max(...data.score);
  if (data.highest_score == 1) {
    data.exit_nodes.match = "match";
  }
  if (1 > data.highest_score > 0.85) {
    data.exit_nodes.match = "unsure";
  }
  if (data.highest_score < 0.85) {
    data.exit_nodes.match = "not_match";
  }
}


if(data.is_match == true){
  // check grade if has data
  console.log(data.data_matched.grades)
  if(data.data_matched.grades.length == 0){
    console.log("theres no grades data, therefore we check cost_structure for data checks")
  } else {
    console.log("there data for grades! Lets check grade, grades, frequency, frequencies, and region - (country or region)")
    data.frequency = data.data_matched.grades[0].frequency;
    data.gradeID = data.data_matched.grades[0].id;
    let loctypes = [];
    let gradetypes = [];
    // get location 
    for (let i = 0; i < data.data_matched.grades[0].location.length; i++) {
      const loc = data.data_matched.grades[0].location[i];
      console.log(loc)
      loctypes.push(loc["name"])
      // console.log(loctypes)
      
    }
    // get grades
    for (let i = 0; i < data.data_matched.grades.length; i++) {
      const grds = data.data_matched.grades;
      console.log(grds[i].id)
      gradetypes.push(grds[i].id)
    }
    
    data.location_types = loctypes;
    data.grade_types = gradetypes;
    
  }
}

console.log(data)


// if category_exist then we save data and construct the requirement_scopes available - prioritze GRADE and its meta data

// {
//   "grade":null,
//   "grades":null,
//   "frequency":null,
//   "region":null
// }