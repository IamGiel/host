let NLU_DATA = {
  "geographyV2": "Italy",
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


let iso = {
  'Afghanistan': 'AF',
  'Albania': 'AL',
  'Algeria': 'DZ',
  'American Samoa': 'AS',
  'Andorra': 'AD',
  'Angola': 'AO',
  'Anguilla': 'AI',
  'Antarctica': 'AQ',
  'Antigua and Barbuda': 'AG',
  'Argentina': 'AR',
  'Armenia': 'AM',
  'Aruba': 'AW',
  'Australia': 'AU',
  'Austria': 'AT',
  'Azerbaijan': 'AZ',
  'Bahamas': 'BS',
  'Bahrain': 'BH',
  'Bangladesh': 'BD',
  'Barbados': 'BB',
  'Belarus': 'BY',
  'Belgium': 'BE',
  'Belize': 'BZ',
  'Benin': 'BJ',
  'Bermuda': 'BM',
  'Bhutan': 'BT',
  'Bolivia, Plurinational State of': 'BO',
  'Bonaire, Sint Eustatius and Saba': 'BQ',
  'Bosnia and Herzegovina': 'BA',
  'Botswana': 'BW',
  'Bouvet Island': 'BV',
  'Brazil': 'BR',
  'British Indian Ocean Territory': 'IO',
  'Brunei Darussalam': 'BN',
  'Bulgaria': 'BG',
  'Burkina Faso': 'BF',
  'Burundi': 'BI',
  'Cambodia': 'KH',
  'Cameroon': 'CM',
  'Canada': 'CA',
  'Cape Verde': 'CV',
  'Cayman Islands': 'KY',
  'Central African Republic': 'CF',
  'Chad': 'TD',
  'Chile': 'CL',
  'China': 'CN',
  'Christmas Island': 'CX',
  'Cocos (Keeling) Islands': 'CC',
  'Colombia': 'CO',
  'Comoros': 'KM',
  'Congo': 'CG',
  'Congo, the Democratic Republic of the': 'CD',
  'Cook Islands': 'CK',
  'Costa Rica': 'CR',
  'Country name': 'Code',
  'Croatia': 'HR',
  'Cuba': 'CU',
  'Curaçao': 'CW',
  'Cyprus': 'CY',
  'Czech Republic': 'CZ',
  "Côte d'Ivoire": 'CI',
  'Denmark': 'DK',
  'Djibouti': 'DJ',
  'Dominica': 'DM',
  'Dominican Republic': 'DO',
  'Ecuador': 'EC',
  'Egypt': 'EG',
  'El Salvador': 'SV',
  'Equatorial Guinea': 'GQ',
  'Eritrea': 'ER',
  'Estonia': 'EE',
  'Ethiopia': 'ET',
  'Falkland Islands (Malvinas)': 'FK',
  'Faroe Islands': 'FO',
  'Fiji': 'FJ',
  'Finland': 'FI',
  'France': 'FR',
  'French Guiana': 'GF',
  'French Polynesia': 'PF',
  'French Southern Territories': 'TF',
  'Gabon': 'GA',
  'Gambia': 'GM',
  'Georgia': 'GE',
  'Germany': 'DE',
  'Ghana': 'GH',
  'Gibraltar': 'GI',
  'Greece': 'GR',
  'Greenland': 'GL',
  'Grenada': 'GD',
  'Guadeloupe': 'GP',
  'Guam': 'GU',
  'Guatemala': 'GT',
  'Guernsey': 'GG',
  'Guinea': 'GN',
  'Guinea-Bissau': 'GW',
  'Guyana': 'GY',
  'Haiti': 'HT',
  'Heard Island and McDonald Islands': 'HM',
  'Holy See (Vatican City State)': 'VA',
  'Honduras': 'HN',
  'Hong Kong': 'HK',
  'Hungary': 'HU',
  'ISO 3166-2:GB': '(.uk)',
  'Iceland': 'IS',
  'India': 'IN',
  'Indonesia': 'ID',
  'Iran, Islamic Republic of': 'IR',
  'Iraq': 'IQ',
  'Ireland': 'IE',
  'Isle of Man': 'IM',
  'Israel': 'IL',
  'Italy': 'IT',
  'Jamaica': 'JM',
  'Japan': 'JP',
  'Jersey': 'JE',
  'Jordan': 'JO',
  'Kazakhstan': 'KZ',
  'Kenya': 'KE',
  'Kiribati': 'KI',
  "Korea, Democratic People's Republic of": 'KP',
  'Korea, Republic of': 'KR',
  'Kuwait': 'KW',
  'Kyrgyzstan': 'KG',
  "Lao People's Democratic Republic": 'LA',
  'Latvia': 'LV',
  'Lebanon': 'LB',
  'Lesotho': 'LS',
  'Liberia': 'LR',
  'Libya': 'LY',
  'Liechtenstein': 'LI',
  'Lithuania': 'LT',
  'Luxembourg': 'LU',
  'Macao': 'MO',
  'Macedonia, the former Yugoslav Republic of': 'MK',
  'Madagascar': 'MG',
  'Malawi': 'MW',
  'Malaysia': 'MY',
  'Maldives': 'MV',
  'Mali': 'ML',
  'Malta': 'MT',
  'Marshall Islands': 'MH',
  'Martinique': 'MQ',
  'Mauritania': 'MR',
  'Mauritius': 'MU',
  'Mayotte': 'YT',
  'Mexico': 'MX',
  'Micronesia, Federated States of': 'FM',
  'Moldova, Republic of': 'MD',
  'Monaco': 'MC',
  'Mongolia': 'MN',
  'Montenegro': 'ME',
  'Montserrat': 'MS',
  'Morocco': 'MA',
  'Mozambique': 'MZ',
  'Myanmar': 'MM',
  'Namibia': 'NA',
  'Nauru': 'NR',
  'Nepal': 'NP',
  'Netherlands': 'NL',
  'New Caledonia': 'NC',
  'New Zealand': 'NZ',
  'Nicaragua': 'NI',
  'Niger': 'NE',
  'Nigeria': 'NG',
  'Niue': 'NU',
  'Norfolk Island': 'NF',
  'Northern Mariana Islands': 'MP',
  'Norway': 'NO',
  'Oman': 'OM',
  'Pakistan': 'PK',
  'Palau': 'PW',
  'Palestine, State of': 'PS',
  'Panama': 'PA',
  'Papua New Guinea': 'PG',
  'Paraguay': 'PY',
  'Peru': 'PE',
  'Philippines': 'PH',
  'Pitcairn': 'PN',
  'Poland': 'PL',
  'Portugal': 'PT',
  'Puerto Rico': 'PR',
  'Qatar': 'QA',
  'Romania': 'RO',
  'Russian Federation': 'RU',
  'Rwanda': 'RW',
  'Réunion': 'RE',
  'Saint Barthélemy': 'BL',
  'Saint Helena, Ascension and Tristan da Cunha': 'SH',
  'Saint Kitts and Nevis': 'KN',
  'Saint Lucia': 'LC',
  'Saint Martin (French part)': 'MF',
  'Saint Pierre and Miquelon': 'PM',
  'Saint Vincent and the Grenadines': 'VC',
  'Samoa': 'WS',
  'San Marino': 'SM',
  'Sao Tome and Principe': 'ST',
  'Saudi Arabia': 'SA',
  'Senegal': 'SN',
  'Serbia': 'RS',
  'Seychelles': 'SC',
  'Sierra Leone': 'SL',
  'Singapore': 'SG',
  'Sint Maarten (Dutch part)': 'SX',
  'Slovakia': 'SK',
  'Slovenia': 'SI',
  'Solomon Islands': 'SB',
  'Somalia': 'SO',
  'South Africa': 'ZA',
  'South Georgia and the South Sandwich Islands': 'GS',
  'South Sudan': 'SS',
  'Spain': 'ES',
  'Sri Lanka': 'LK',
  'Sudan': 'SD',
  'Suriname': 'SR',
  'Svalbard and Jan Mayen': 'SJ',
  'Swaziland': 'SZ',
  'Sweden': 'SE',
  'Switzerland': 'CH',
  'Syrian Arab Republic': 'SY',
  'Taiwan, Province of China': 'TW',
  'Tajikistan': 'TJ',
  'Tanzania, United Republic of': 'TZ',
  'Thailand': 'TH',
  'Timor-Leste': 'TL',
  'Togo': 'TG',
  'Tokelau': 'TK',
  'Tonga': 'TO',
  'Trinidad and Tobago': 'TT',
  'Tunisia': 'TN',
  'Turkey': 'TR',
  'Turkmenistan': 'TM',
  'Turks and Caicos Islands': 'TC',
  'Tuvalu': 'TV',
  'Uganda': 'UG',
  'Ukraine': 'UA',
  'United Arab Emirates': 'AE',
  'United Kingdom': 'GB',
  'United States': 'US',
  'United States Minor Outlying Islands': 'UM',
  'Uruguay': 'UY',
  'Uzbekistan': 'UZ',
  'Vanuatu': 'VU',
  'Venezuela, Bolivarian Republic of': 'VE',
  'Viet Nam': 'VN',
  'Virgin Islands, British': 'VG',
  'Virgin Islands, U.S.': 'VI',
  'Wallis and Futuna': 'WF',
  'Western Sahara': 'EH',
  'Yemen': 'YE',
  'Zambia': 'ZM',
  'Zimbabwe': 'ZW',
  'Åland Islands': 'AX'
}

console.log(iso[NLU_DATA.geographyV2])

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
js_data.KeyNameEntity = "waterrs"; // TEST TERM HERE
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

let test_phrase = "crude oil on asia"

console.log("TEST REGEX on KEYNAMEENTITY")
console.log(test_phrase.replace(/ in.*$|in .*$|from.*$|from .*$|on.*$|on .*$ /gmi, '').trim())




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
  // console.log(element)
  // console.log("data_cat_name: " + element.sub_category.name.toLowerCase())
  // console.log("KeyNameEntity: " + js_data.KeyNameEntity)

  let score = similarity(element.sub_category.name.toLowerCase(), js_data.KeyNameEntity.toLowerCase());
  data.score.push(score)
  if (score === 1 || (score > 0.85)) {
    data.data_matched = element.sub_category
  } else {
    data.data_matched = null;
  }
  console.log("data matched ", data.data_matched)
  // console.log("===============")
}
data.highest_score = Math.max(...data.score);

if (data.highest_score == 1) {
  data.is_match = true;
  data.exit_nodes.match = "match";
} else {
  data.is_match = false;
  if (1 > data.highest_score > 0.69) {
    data.exit_nodes.match = "unsure";
  }
  if (data.highest_score <= 0.69) {
    data.exit_nodes.match = "not_match";
  }
}



let category_detail =

  // {
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


// BREAK =============================
// JS loc

let res = {};
// check locations in db  
let lt = data.location_types;
let does_itMatch = lt.includes(NLU_DATA.geographyV2.toLowerCase());

console.log("location matching ==== ")
console.log("db: ", lt)
console.log(NLU_DATA.geographyV2.toLowerCase())

if (does_itMatch) {
  console.log("location match!")
  res.node = "loc_match";
} else {
  console.log("location dont match!")
  res.node = "loc_mismatch";
}

console.log("DOES IT MATCH", lt.includes(NLU_DATA.geographyV2))
// if(loc_requested == "country" && loc_data_availability == "countryRegion"){
//   res.node = "loc_match";
// } else {
//   res.node = "loc_mismatch";
// }

// check if user ask for region or country `user_location_req`
// check if data is region or country



console.log(res)

// What is the price of abs // category don’t exist
// what is the price of crud oil // "unsure" mispelled categories

// What is the price of  crude oil // with grade, no location
// What is the price of  crude oil in Japan // with grade, with location
// What is the price of water // no grade, no location
// What is the price of water in Japan // no grade, with location

// What is the price of crude oil grade ABC