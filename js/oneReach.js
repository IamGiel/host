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

// console.log("NLU data: ", NLU_DATA)


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

// console.log(iso[NLU_DATA.geographyV2])

let cat_list =

  {
    "list": [{
        "name": "ABS",
        "uuid": "756ac945-ea7f-11ea-acc0-0a730e7eabfe",
        "categoryMappingUuid": "cb6847df61ee4e8591a73fa2b5beff8d",
        "spend": 123123,
        "unit": "USD",
        "percentage": 0,
        "topicalIndexDisplayDTOList": [{
            "tiName": "Cost Optimization",
            "tiUuid": "5fb6c477-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Risk Mitigation",
            "tiUuid": "5fb6c485-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Category Strategy & Flexibility",
            "tiUuid": "5fb6c48a-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          }
        ],
        "categoryBenchmarkScoreDTO": null
      },
      {
        "name": "Crude Oil",
        "uuid": "756ac8e1-ea7f-11ea-acc0-0a730e7eabfe",
        "categoryMappingUuid": "e1dc1332dcdf4979bd082ea0e64c5373",
        "spend": 123123,
        "unit": "USD",
        "percentage": 0,
        "topicalIndexDisplayDTOList": [{
            "tiName": "Cost Optimization",
            "tiUuid": "5fb6c477-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Risk Mitigation",
            "tiUuid": "5fb6c485-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Category Strategy & Flexibility",
            "tiUuid": "5fb6c48a-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          }
        ],
        "categoryBenchmarkScoreDTO": null
      },
      {
        "name": "Water",
        "uuid": "756ad3c9-ea7f-11ea-acc0-0a730e7eabfe",
        "categoryMappingUuid": "d5a08f8c795747f786a69a0677d44d32",
        "spend": 123,
        "unit": "USD",
        "percentage": 0,
        "topicalIndexDisplayDTOList": [{
            "tiName": "Cost Optimization",
            "tiUuid": "5fb6c477-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Risk Mitigation",
            "tiUuid": "5fb6c485-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Category Strategy & Flexibility",
            "tiUuid": "5fb6c48a-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          }
        ],
        "categoryBenchmarkScoreDTO": null
      },
      {
        "name": "Ammonia",
        "uuid": "756ac963-ea7f-11ea-acc0-0a730e7eabfe",
        "categoryMappingUuid": "965c4b309f40461e8b27c4b32af4c849",
        "spend": 123123,
        "unit": "USD",
        "percentage": 0,
        "topicalIndexDisplayDTOList": [{
            "tiName": "Cost Optimization",
            "tiUuid": "5fb6c477-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Risk Mitigation",
            "tiUuid": "5fb6c485-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Category Strategy & Flexibility",
            "tiUuid": "5fb6c48a-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          }
        ],
        "categoryBenchmarkScoreDTO": null
      },
      {
        "name": "Flexible Intermediate Bulk Containers (FIBC)",
        "uuid": "756acd79-ea7f-11ea-acc0-0a730e7eabfe",
        "categoryMappingUuid": "32409f7382ce4201bef04aa23a142786",
        "spend": 123,
        "unit": "USD",
        "percentage": 0,
        "topicalIndexDisplayDTOList": [{
            "tiName": "Cost Optimization",
            "tiUuid": "5fb6c477-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Risk Mitigation",
            "tiUuid": "5fb6c485-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Category Strategy & Flexibility",
            "tiUuid": "5fb6c48a-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          }
        ],
        "categoryBenchmarkScoreDTO": null
      },
      {
        "name": "4PL Services",
        "uuid": "756ad039-ea7f-11ea-acc0-0a730e7eabfe",
        "categoryMappingUuid": "24dea207dc9e4a328f629afec91b31d2",
        "spend": null,
        "unit": null,
        "percentage": 0,
        "topicalIndexDisplayDTOList": [{
            "tiName": "Cost Optimization",
            "tiUuid": "5fb6c477-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Risk Mitigation",
            "tiUuid": "5fb6c485-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Category Strategy & Flexibility",
            "tiUuid": "5fb6c48a-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          }
        ],
        "categoryBenchmarkScoreDTO": null
      },
      {
        "name": "Ace-K",
        "uuid": "756ad2e4-ea7f-11ea-acc0-0a730e7eabfe",
        "categoryMappingUuid": "5d2dc21065344f3f8020ba0c88031b48",
        "spend": null,
        "unit": null,
        "percentage": 0,
        "topicalIndexDisplayDTOList": [{
            "tiName": "Cost Optimization",
            "tiUuid": "5fb6c477-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Risk Mitigation",
            "tiUuid": "5fb6c485-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Category Strategy & Flexibility",
            "tiUuid": "5fb6c48a-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          }
        ],
        "categoryBenchmarkScoreDTO": null
      },
      {
        "name": "Beverage Cans",
        "uuid": "756ac9be-ea7f-11ea-acc0-0a730e7eabfe",
        "categoryMappingUuid": "6b28f0b1631345309b658b3c0c719db2",
        "spend": 12333,
        "unit": "USD",
        "percentage": 0,
        "topicalIndexDisplayDTOList": [{
            "tiName": "Cost Optimization",
            "tiUuid": "5fb6c477-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Risk Mitigation",
            "tiUuid": "5fb6c485-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Category Strategy & Flexibility",
            "tiUuid": "5fb6c48a-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          }
        ],
        "categoryBenchmarkScoreDTO": null
      },
      {
        "name": "Aerosol Cans",
        "uuid": "756ac9c4-ea7f-11ea-acc0-0a730e7eabfe",
        "categoryMappingUuid": "e5042034ff1b4e2886012754c0b8581d",
        "spend": null,
        "unit": null,
        "percentage": 0,
        "topicalIndexDisplayDTOList": [{
            "tiName": "Cost Optimization",
            "tiUuid": "5fb6c477-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Risk Mitigation",
            "tiUuid": "5fb6c485-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          },
          {
            "tiName": "Category Strategy & Flexibility",
            "tiUuid": "5fb6c48a-ea7f-11ea-acc0-0a730e7eabfe",
            "answeredStatus": false,
            "topicalSubIndexDtoList": null
          }
        ],
        "categoryBenchmarkScoreDTO": null
      }
    ]
  }

console.log("list of categories: ", cat_list)

// check if category_exist = true/false/null
// get the user_cat_req and run it by the list_of_category_available

// to check, we need Levenshtein distance

let js_data = {};
let KeyNameEntity = "crude oil"; // TEST TERM HERE
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

// let test_phrase = "crude oil on asia"

// console.log("TEST REGEX on KEYNAMEENTITY")
// console.log(test_phrase.replace(/ in.*$|in .*$|from.*$|from .*$|on.*$|on .*$ /gmi, '').trim())



// START JS DOC HERE in ONEREACH
let data = {};
data.score = [];
data.exit_nodes = {};
data.data_matched = null;
let testOBJ = [];
let list_scores = [];
let unsure_data = null;
let highest_score = null;

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


// restrcutre data with their levenshtein scores
cat_list.list.forEach(k => {
  // console.log(k)
  testOBJ.push({
    "name": k.name,
    "score": similarity(k.name.toLowerCase(), KeyNameEntity.toLowerCase()), // score here
    "data":k
  })
})

// we iterate on the newly constructed data with scores
testOBJ.forEach(s=> {
  // if scores = 1, we got matched!
  if(s.score === 1){
    data.data_matched = s;
  }
  // if not we get all the scores
  list_scores.push(s.score)
  // if the scores less than 1 but higher than .24 
  if(1 > s.score > 0.24){
    highest_score = Math.max(...list_scores);
    
    // check the highest score and the data associated with this score
    if(Math.round((s.score + Number.EPSILON) * 100) / 100 === Math.round((highest_score + Number.EPSILON) * 100) / 100){
      // we then note it that its the "UNSURE DATA" but the highest closest match
      unsure_data = s;
    }
    
  }
  
  data.highest_score = highest_score;
})

// we save UNSURE DATA HERE
data.unsure_data = unsure_data;

data.highest_score = Math.max(...list_scores);
console.log(data.highest_score)

if (data.highest_score == 1) {
  data.is_match = true;
  data.exit_nodes.match = "match";
} else {
  data.is_match = false;
  if (1 > data.highest_score > 0.24) {
    data.exit_nodes.match = "unsure";
  }
  if (data.highest_score <= 0.24) {
    data.exit_nodes.match = "not_match";
  }
}

if(!data.data_matched){
  data.data_matched = data.unsure_data;
}


console.log(data)

//  SORTING TIME

var array = ["25-Jul-2017 12:46:39 pm", "25-Jul-2017 12:52:23 pm", "25-Jul-2017 12:47:18 pm", "25-Jul-2017 12:59:18 pm"];

array.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())

console.log(array)