let NLU_DATA =  {
    "geographyV2": "Japan",
    "diversityEntity": "undefined",
    "CategoryListEntity": "undefined",
    "mentionsDiversity": null,
    "subfilters": "null",
    "pronounEntity": "undefined",
    "mentionsSustainability": null,
    "keyNameEntity": "Crude Oil",
    "geo_data": {
      "entity": "geographyV2",
      "value": "Japan",
      "parsedValue": "Japan",
      "geo": true,
      "geo_val": "Japan",
      "geo_type": "countryRegion"
    }
  };

  console.log("NLU data: ", NLU_DATA)


let cat_list = [{
    "sub_category": {
      "uuid": "756ac963-ea7f-11ea-acc0-0a730e7eabfe",
      "name": "Ammonia",
      "id": "D020",
      "price_type": null,
      "cost_structure": {
        "available": true,
        "location": [{
            "id": "AF,AM,AZ,BD,BT,CN,GE,HK,IN,IR,JP,KZ,KR,KP,KG,MO,MV,MN,NP,PK,LK,TW,TJ,TM,UZ",
            "name": "Asia",
            "frequency": "Quarterly"
          },
          {
            "id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
            "name": "Europe",
            "frequency": "Quarterly"
          }
        ]
      },
      "grades": [{
        "id": "D020-01",
        "name": "Fertilize Grade",
        "type": "Grade",
        "frequency": "Monthly",
        "accessible": true,
        "location": [{
            "id": "AF,AM,AZ,BD,BT,CN,GE,HK,IN,IR,JP,KZ,KR,KP,KG,MO,MV,MN,NP,PK,LK,TW,TJ,TM,UZ",
            "name": "Asia"
          },
          {
            "id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
            "name": "Europe"
          },
          {
            "id": "BM,CA,GL,PM,US",
            "name": "North America"
          }
        ]
      }]
    }
  },
  {
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
  },
  {
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
];

console.log("list of categories: ", cat_list)

// check if category_exist = true/false/null
// get the user_cat_req and run it by the list_of_category_available

// to check, we need Levenshtein distance

let js_data = {};
js_data.KeyNameEntity = "asd"; // TEST TERM HERE
let store_NLU = {
  "geographyV2": "japan",
  "diversityEntity": "undefined",
  "CategoryListEntity": "undefined",
  "mentionsDiversity": null,
  "subfilters": "null",
  "pronounEntity": "undefined",
  "mentionsSustainability": null,
  "keyNameEntity": "crude oil"
};


let data = {};
data.score = [];
data.exit_nodes = {};

let world = ["asia", "africa", "europe", "north america", "South America", "australia", "oceania", "Antartica", "Central Europe", "Eastern Europe", "Middle East", "Mediterranean", "Western Europe"]
let regions_array = world.map(v => v.toLowerCase());
// console.log(region.includes("america".toLowerCase()))

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
  // console.log("data_cat_name: " + element.sub_category.name.toLowerCase())
  // console.log("KeyNameEntity: " + js_data.KeyNameEntity)

  let score = similarity(element.sub_category.name.toLowerCase(), js_data.KeyNameEntity.toLowerCase());
  data.score.push(score)
  if (score === 1 || (score > 0.85)) {
    data.data_matched = element.sub_category
  }
  // console.log("===============")
}
data.highest_score = Math.max(...data.score);

if (data.highest_score == 1) {
  data.is_match = true;
  data.exit_nodes.match = "match";
} else {
  data.is_match = false;
  if (1 > data.highest_score > 0.86) {
    data.exit_nodes.match = "unsure";
  }
  if (data.highest_score <= 0.85) {
    data.exit_nodes.match = "not_match";
  }
}



let category_detail = 

{
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

// {
//   "uuid": "756ac8e1-ea7f-11ea-acc0-0a730e7eabfe",
//   "name": "Crude oil",
//   "id": "A001",
//   "price_type": "price_direct",
//   "cost_structure": {
//     "available": false,
//     "location": []
//   },
//   "grades": [{
//       "id": "A001-03",
//       "name": "Crude Oil (Intratec)",
//       "type": "Grade",
//       "frequency": "Monthly",
//       "accessible": true,
//       "location": [{
//           "id": "AE",
//           "name": "United Arab Emirates"
//         },
//         {
//           "id": "GB",
//           "name": "United Kingdom"
//         },
//         {
//           "id": "NG",
//           "name": "Nigeria"
//         },
//         {
//           "id": "US",
//           "name": "USA"
//         }
//       ]
//     },
//     {
//       "id": "A001-01",
//       "name": "Brent",
//       "type": "Grade",
//       "frequency": "Monthly",
//       "accessible": true,
//       "location": [{
//         "id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
//         "name": "Europe"
//       }]
//     },
//     {
//       "id": "A001-02",
//       "name": "WTI",
//       "type": "Grade",
//       "frequency": "Monthly",
//       "accessible": true,
//       "location": [{
//         "id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
//         "name": "Europe"
//       }]
//     }
//   ]
// }

// ======= TEST CATEGORY DETAIL  JS.DATA_SCOPE step

// HELPER FUNC
function areSame(arr) {
  // Put all array elements in a HashSet
  let s = new Set(arr);
  // console.log(s)

  // If all elements are same, size of
  // HashSet should be 1. As HashSet contains only distinct values.
  return (s.size == 1);
}

function isCountryOrRegion(arr){
    let world = ["asia", "africa", "europe", "north america", "South America", "australia", "oceania", "Antartica", "Central Europe", "Eastern Europe", "Middle East", "Mediterranean", "Western Europe"]
    let regions_array = world.map(v => v.toLowerCase());
     // check region or country
     if(regions_array.includes(arr) == true){
      return "region";
    } else {
      return "country";
    }
}

console.log(category_detail)
// set some meta data 
data.frequency = null;
data.gradeID = null;
data.location_types = null;
data.grade_types = null;
data.frequency = null;
data.frequencies = null;
// data.dropdown_loc = {};

// temp containers
let loctypes = [];
let gradetypes = [];
let frequencies = [];

// =================== RECONSTRUCT DATA -> return data ==========================
// check grade if has data
if (category_detail.grades.length === 0) {
  console.log("theres no grades data, therefore we check cost_structure for data checks")
  data.frequency = category_detail.frequency == undefined ? null: category_detail.frequency;
  data.gradeID = category_detail.id;
  // use cost_structure to obtain data for 
  // loctype and loctypes
  // frequency
  

  for (let i = 0; i < category_detail.cost_structure.location.length; i++) {
    const cs = category_detail.cost_structure.location[i];
    const fr = category_detail.cost_structure.location[i];
    console.log(cs)
    loctypes.push(cs.name)
    frequencies.push(cs.frequency);
  }
  console.log(frequencies)
  data.frequencies = frequencies;
  // check frequency 
  if(areSame(frequencies) == true){
    data.frequency =  frequencies[0];
  }

  // check region or country
  console.log(isCountryOrRegion(loctypes[0]))
  data.location_type = isCountryOrRegion(loctypes[0])
} else {
  console.log("there data for grades! Lets check grade, grades, frequency, frequencies, and region - (country or region)")
  data.frequency = category_detail.grades[0].frequency;
  data.gradeID = category_detail.id;

  // get location 
  for (let i = 0; i < category_detail.grades[0].location.length; i++) {
    const loc = category_detail.grades[0].location[i];
    // console.log(loc)
    loctypes.push(loc["name"])
    // console.log(loctypes)

  }
  // get grades
  for (let i = 0; i < category_detail.grades.length; i++) {
    const grds = category_detail.grades;
    // console.log(grds[i].id)
    gradetypes.push(grds[i].id)
  }
  
   // check region or country
   console.log(isCountryOrRegion(loctypes[0]))
   data.location_type = isCountryOrRegion(loctypes[0])
}
data.location_types = loctypes;
data.grade_types = gradetypes;
data.category_name = category_detail.name;

// prep custom dropdown selection
let loc_dds = [];
let grd_dds = [];

loctypes.forEach(k => {
  // console.log(k)
  loc_dds.push({
    label: `${k}`,
    value: `${k}`
  })
})

gradetypes.forEach(k => {
  // console.log(k)
  grd_dds.push({
    label: `${k}`,
    value: `${k}`
  })
})
data.dropdown_loc = loc_dds;
data.dropdown_grade = grd_dds;

data.resolve = {};
// check if location is requested ? if not ask - 
if(NLU_DATA.geo_data.geo_type == "countryRegion"){
  alert('hell;op')
}
// if it is, check what is available in scope
// if user ask for Japan and Japan exists get data, if Japan doesnt exist, tell user select country
// if user ask for Asia and Asia exists get data, if Asia doesnt exist, tell user, select country





// if category_exist then we save data and construct the requirement_scopes available - prioritze GRADE and its meta data

// {
//   "grade":null,
//   "grades":null,
//   "frequency":null,
//   "region":null
// }

console.log("object constructed from data: ", data)
