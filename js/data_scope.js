// let category_detail = {
//   "uuid": "756ad3c9-ea7f-11ea-acc0-0a730e7eabfe",
//   "name": "Water",
//   "id": "D338",
//   "price_type": null,
//   "cost_structure": {
//     "available": true,
//     "location": [{
//         "id": "GB",
//         "name": "United Kingdom",
//         "frequency": "Quarterly"
//       },
//       {
//         "id": "US",
//         "name": "USA",
//         "frequency": "Quarterly"
//       }
//     ]
//   },
//   "grades": []
// }

let cat_detail = {
  "sub_category": {
    "uuid": "756ac8e1-ea7f-11ea-acc0-0a730e7eabfe",
    "name": "Crude oil",
    "id": "A001",
    "price_type": "price_direct",
    "cost_structure": {
      "available": false,
      "location": []
    },
    "grades": [
      {
        "id": "A001-03",
        "name": "Crude Oil (Intratec)",
        "type": "Grade",
        "frequency": "Monthly",
        "accessible": false,
        "location": [
          {
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
        "location": [
          {
            "id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
            "name": "Europe"
          }
        ]
      },
      {
        "id": "A001-02",
        "name": "WTI",
        "type": "Grade",
        "frequency": "Monthly",
        "accessible": true,
        "location": [
          {
            "id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
            "name": "Europe"
          }
        ]
      }
    ]
  }
}

// let cat_detail =   {
//   "sub_category": {
//     "uuid": "756ad3c9-ea7f-11ea-acc0-0a730e7eabfe",
//     "name": "Water",
//     "id": "D338",
//     "price_type": null,
//     "cost_structure": {
//       "available": true,
//       "location": [
//         {
//           "id": "GB",
//           "name": "United Kingdom",
//           "frequency": "Quarterly"
//         },
//         {
//           "id": "US",
//           "name": "USA",
//           "frequency": "Quarterly"
//         }
//       ]
//     },
//     "grades": []
//   }
// }

// let cat_detail = {
//   "sub_category": {
//     "uuid": "756ac9be-ea7f-11ea-acc0-0a730e7eabfe",
//     "name": "Beverage Cans",
//     "id": "D035",
//     "price_type": null,
//     "cost_structure": {
//       "available": true,
//       "location": []
//     },
//     "grades": []
//   }
// }

let category_detail = cat_detail.sub_category;
let data = {};


console.log(category_detail.grades)
let test;

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

function isCountryOrRegion(arr) {
  let world = ["asia", "africa", "europe", "north america", "South America", "australia", "oceania", "Antartica", "Central Europe", "Eastern Europe", "Middle East", "Mediterranean", "Western Europe"]
  let regions_array = world.map(v => v.toLowerCase());
  // check region or country
  if (regions_array.includes(arr) == true) {
    return "region";
  } else {
    return "country";
  }
}

// get unique values in array
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// ========== DATA SCOPE.JS =============
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
let loctypes_ = [];
let gradetypes = [];
let frequencies = [];
let unique = null;
let regionNamesInEnglish = new Intl.DisplayNames(['en'], {
  type: 'region'
});
// for prepping custom dropdown selection
let loc_dds = [];
let grd_dds = [];

// =================== RECONSTRUCT DATA -> return data ==========================
// check grade if has data
if (category_detail.grades.length === 0) {
  console.log("theres no grades data, therefore we check cost_structure for data checks")

  console.log(category_detail.cost_structure.location.length);
  if(category_detail.cost_structure.location.length > 0){
    data.no_cost_structure_data = false;
    data.frequency = category_detail.frequency == undefined ? null : category_detail.frequency;
    data.gradeID = category_detail.id;
  
    for (let i = 0; i < category_detail.cost_structure.location.length; i++) {
      const cs = category_detail.cost_structure.location[i];
      const fr = category_detail.cost_structure.location[i];
      console.log(cs)
      loctypes_.push(cs)
      frequencies.push(cs.frequency);
    }
    console.log(frequencies)
    data.frequencies = frequencies;
    // check frequency 
    if (areSame(frequencies) == true) {
      data.frequency = frequencies;
    }
  
    // check region or country
    console.log(loctypes_)
    console.log(isCountryOrRegion(loctypes_))
    data.location_type = isCountryOrRegion(loctypes_)
  } else {
    data.no_cost_structure_data = true;
  }

} else {
  console.log("there data for grades! Lets check grade, grades, frequency, frequencies, and region - (country or region)")
  data.frequency = category_detail.grades.frequency;
  data.gradeID = category_detail.id;
  data.no_cost_structure_data = null;

  // get location 
  for (let i = 0; i < category_detail.grades.length; i++) {
    const loc = category_detail.grades[i].location;
    for (let i = 0; i < loc.length; i++) {
      const lc = loc[i];
      console.log(lc)
      loctypes.push(lc) 
    }
  }
  // get grades
  for (let i = 0; i < category_detail.grades.length; i++) {
    const grds = category_detail.grades;
    gradetypes.push(grds[i].id)
  }
  // get all loc ids
  let combine = loctypes.flat();
  combine.forEach(k=> {
    if(k.id.length > 2){
      console.log(k)
    }
  })
  unique = combine.filter(onlyUnique);
  data.location_type = isCountryOrRegion(loctypes)
}

console.log("new loctype_ ", loctypes_)

data.location_types = loctypes_;
data.grade_types = gradetypes;
data.category_name = category_detail.name;

// construct dropdown select for grade and location
if (category_detail.grades.length === 0) {
  loctypes_.forEach(k => {
    console.log(k)
    loc_dds.push({
      label: k.name.toLowerCase(),
      value: k.id
    })
  })
} else {
  unique.forEach(k => {
    console.log(k)
    loc_dds.push({
      label: k.name,
      value: k.id
    })
  })
  gradetypes.forEach(k => {
    // console.log(k)
    grd_dds.push({
      label: `${k}`,
      value: `${k}`
    })
  })
}

data.dropdown_loc = loc_dds;
data.dropdown_grade = grd_dds;

console.log(data)
