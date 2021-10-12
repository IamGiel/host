let sample = {
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
let category_detail =
{
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

let data = {};

let NLU_DATA = {
  "geo_data": {
    "geo_type": "Japan"
  }
}

console.log(category_detail)

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

// =================== RECONSTRUCT DATA -> return data ==========================
// check grade if has data
if (category_detail.grades.length === 0) {
  console.log("theres no grades data, therefore we check cost_structure for data checks")
  data.frequency = category_detail.frequency == undefined ? null : category_detail.frequency;
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
  if (areSame(frequencies) == true) {
    data.frequency = frequencies[0];
  }

  // check region or country
  // console.log(loctypes)
  console.log(isCountryOrRegion(loctypes[0]))
  data.location_type = isCountryOrRegion(loctypes[0])
} else {
  console.log("there data for grades! Lets check grade, grades, frequency, frequencies, and region - (country or region)")
  data.frequency = category_detail.grades[0].frequency;
  data.gradeID = category_detail.id;

  // get location 
  for (let i = 0; i < category_detail.grades.length; i++) {
    const loc = category_detail.grades[i].location;
    for (let i = 0; i < loc.length; i++) {
      const element = loc[i].id;
      console.log(element)
      loctypes.push(element.split(","))
    }
  }
  // get grades
  for (let i = 0; i < category_detail.grades.length; i++) {
    const grds = category_detail.grades;
    // console.log(grds[i].id)
    gradetypes.push(grds[i].id)
  }

  // ==== check region or country =====
  console.log(loctypes)
  // combine all arrays of id
  // get unique values in array
  // console.log("get unique values")
  let combine = loctypes.flat();
  console.log(combine);
  let unique = combine.filter(onlyUnique);
  console.log(unique);

  unique.forEach(k=>{
    console.log(k)
    const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
    console.log(regionNamesInEnglish.of(k));
    loctypes_.push(regionNamesInEnglish.of(k).toLowerCase());
  })
  data.location_type = isCountryOrRegion(loctypes[0])
}

console.log("new loctype_ ", loctypes_)

data.location_types = loctypes_;
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
if (NLU_DATA.geo_data.geo_type == "countryRegion") {
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
