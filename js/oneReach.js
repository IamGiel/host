let nlpMeta = {
  "appId": "9cad0cc0-ea48-407b-b9dd-15de13182b62",
  "subKey": "eda7b4bc404d461e88d6a8182e54cddb",
  "searchterm": "find me a beverage can supplier in mexico ",
  "topIntent": "A - Supplier Shortlisting",
  "keyPhrase": "",
  "entities": null,
  "supplierName": "undefined",
  "supplierReqUUID": "null",
  "meta": {
    "query": "find me a beverage can supplier in mexico",
    "prediction": {
      "topIntent": "A - Supplier Shortlisting",
      "intents": {
        "A - Supplier Shortlisting": {
          "score": 0.9669634
        },
        "NoneSpecificRiskIntent": {
          "score": 0.009048935
        },
        "AdverseMediaRiskIntent": {
          "score": 0.008963352
        },
        "PriceWithFocusAreaIntent": {
          "score": 0.0012182295
        },
        "None": {
          "score": 0.0012109679
        },
        "A - Supplier Risk": {
          "score": 0.0005654773
        },
        "PriceIntent": {
          "score": 0.0005390856
        },
        "NoneIntent": {
          "score": 0.00046438148
        },
        "CategoryDifferentiator": {
          "score": 0.00039090708
        },
        "SupplierNoneSpecificRiskIntent": {
          "score": 0.00031541882
        },
        "GeoPoliticRiskIntent": {
          "score": 0.00020289017
        },
        "FinancialRiskIntent": {
          "score": 0.0001676687
        },
        "SupplierDifferentiatorIntent": {
          "score": 0.000028228735
        }
      },
      "entities": {
        "shortlistingSynonymsEntity": ["find me a"],
        "categoryNameListEntity": [
          ["beverage cans"]
        ],
        "geographyV2": [{
          "value": "mexico",
          "type": "countryRegion"
        }],
        "$instance": {
          "shortlistingSynonymsEntity": [{
            "type": "shortlistingSynonymsEntity",
            "text": "find me a",
            "startIndex": 0,
            "length": 9,
            "score": 0.9738165,
            "modelTypeId": 1,
            "modelType": "Entity Extractor",
            "recognitionSources": ["model"]
          }],
          "categoryNameListEntity": [{
            "type": "categoryNameListEntity",
            "text": "beverage can",
            "startIndex": 10,
            "length": 12,
            "modelTypeId": 5,
            "modelType": "List Entity Extractor",
            "recognitionSources": ["model"]
          }],
          "geographyV2": [{
            "type": "builtin.geographyV2.countryRegion",
            "text": "mexico",
            "startIndex": 35,
            "length": 6,
            "modelTypeId": 2,
            "modelType": "Prebuilt Entity Extractor",
            "recognitionSources": ["model"]
          }]
        }
      }
    }
  },
  "isSupplierMentioned": "false",
  "category": "beverage cans",
  "categoryUUID": "undefined",
  "isCategoryMentioned": "true",
  "userUUID": "null",
  "topIntentScore": 0.9669634,
  "geographyV2": "[object Object]",
  "isGeographyV2Mentioned": "true"
}
let nlpData = {
  "appId": "9cad0cc0-ea48-407b-b9dd-15de13182b62",
  "subKey": "eda7b4bc404d461e88d6a8182e54cddb",
  "searchterm": "is pepsico risky?",
  "topIntent": "SupplierNoneSpecificRiskIntent",
  "keyPhrase": "",
  "entities": null,
  "supplierName": "pepsico",
  "supplierReqUUID": "null",
  "meta": {
    "query": "is pepsico risky?",
    "prediction": {
      "topIntent": "SupplierNoneSpecificRiskIntent",
      "intents": {
        "SupplierNoneSpecificRiskIntent": {
          "score": 0.9999998
        },
        "A - Supplier Risk": {
          "score": 0.00024105299
        },
        "NoneSpecificRiskIntent": {
          "score": 0.000020119318
        },
        "SupplierDifferentiatorIntent": {
          "score": 0.000012856977
        },
        "NoneIntent": {
          "score": 0.000004141397
        },
        "None": {
          "score": 6.2e-9
        },
        "PriceWithFocusAreaIntent": {
          "score": 2e-9
        },
        "CategoryDifferentiator": {
          "score": 1.3e-9
        },
        "AdverseMediaRiskIntent": {
          "score": 1.16e-9
        },
        "PriceIntent": {
          "score": 1.16e-9
        },
        "A - Supplier Shortlisting": {
          "score": 8e-10
        },
        "GeoPoliticRiskIntent": {
          "score": 6.875e-10
        },
        "FinancialRiskIntent": {
          "score": 5.631579e-10
        }
      },
      "entities": {
        "supplierNameListEntity": [
          ["pepsico"]
        ],
        "riskEntity": ["risky"],
        "$instance": {
          "supplierNameListEntity": [{
            "type": "supplierNameListEntity",
            "text": "pepsico",
            "startIndex": 3,
            "length": 7,
            "modelTypeId": 5,
            "modelType": "List Entity Extractor",
            "recognitionSources": ["model"]
          }],
          "riskEntity": [{
            "type": "riskEntity",
            "text": "risky",
            "startIndex": 11,
            "length": 5,
            "score": 0.72624195,
            "modelTypeId": 1,
            "modelType": "Entity Extractor",
            "recognitionSources": ["model"]
          }]
        }
      }
    }
  },
  "isSupplierMentioned": "true",
  "category": "undefined",
  "categoryUUID": "undefined",
  "isCategoryMentioned": "false",
  "userUUID": "null",
  "topIntentScore": 0.9999998,
  "geographyV2": "undefined",
  "isGeographyV2Mentioned": "false"
}

let LUIS1 = {
  "type": "TEXT",
  "contextId": "iziWSgLoiWjDtABoaa82G",
  "context": "Supplier_Type_Differentiator",
  "topAnswers": [{
    "type": "TEXT",
    "contextId": "iziWSgLoiWjDtABoaa82G",
    "context": "Supplier_Type_Differentiator",
    "responseId": "5X5BH4YmtO1jj0CMDjmtb",
    "confidence": 81.35,
    "response": "doSupplierTypeDiff"
  }, {
    "type": "TEXT",
    "contextId": "Rz~WRksw5zU_0f7zMXFDR",
    "context": "Category_Differentiator",
    "responseId": "MiuvwPYcmWf2nLaAS2UDM",
    "confidence": 4.04,
    "response": "doCategoryDiff"
  }, {
    "type": "TEXT",
    "contextId": "BKpUH1mTig5TUiycqk4vk",
    "context": "Product_Service_Differentiator",
    "responseId": "Cerj5SWULmzen7WSXY1ej",
    "confidence": 1.9,
    "response": "doProductServiceDiff"
  }, {
    "type": "",
    "contextId": "None",
    "context": "None",
    "responseId": "None",
    "confidence": 0.42,
    "response": "None"
  }, {
    "type": "TEXT",
    "contextId": "yee~jpp2JwNocNOJUl6V9",
    "context": "Diversity_Differentiator",
    "responseId": "34c6oB_Bkr57l14xk91WF",
    "confidence": 0.36,
    "response": "doDiversityDiff"
  }],
  "entities": [{
    "parsedValue": [],
    "value": "find suppliers",
    "entity": "FindSuppliersEntity",
    "detailedType": "FindSuppliersEntity",
    "startPos": 0,
    "endPos": 14,
    "confidence": 95.89602000000001
  }, {
    "parsedValue": "suppliers",
    "value": "suppliers",
    "entity": "keyPhrase",
    "detailedType": "keyPhrase",
    "startPos": 5,
    "endPos": 14,
    "confidence": 100
  }, {
    "parsedValue": "low financial risk",
    "value": "low financial risk",
    "entity": "keyPhrase",
    "detailedType": "keyPhrase",
    "startPos": 24,
    "endPos": 42,
    "confidence": 100
  }, {
    "parsedValue": ["low risk"],
    "value": "low",
    "entity": "SupplierTypeListEntity",
    "detailedType": "SupplierTypeListEntity",
    "startPos": 24,
    "endPos": 27,
    "confidence": 100
  }],
  "question": "find suppliers that are low financial risk",
  "phrase": "find suppliers that are low financial risk",
  "response": "doSupplierTypeDiff",
  "responseId": "5X5BH4YmtO1jj0CMDjmtb",
  "parsedResponse": "doSupplierTypeDiff",
  "contextQueryId": "130b49d8-02a8-4b7b-846c-7044b92dc94f",
  "confidence": 81.35,
  "topResponses": [{
    "type": "TEXT",
    "contextId": "iziWSgLoiWjDtABoaa82G",
    "context": "Supplier_Type_Differentiator",
    "responseId": "5X5BH4YmtO1jj0CMDjmtb",
    "confidence": 81.35,
    "response": "doSupplierTypeDiff",
    "parsedResponse": "doSupplierTypeDiff"
  }, {
    "type": "TEXT",
    "contextId": "Rz~WRksw5zU_0f7zMXFDR",
    "context": "Category_Differentiator",
    "responseId": "MiuvwPYcmWf2nLaAS2UDM",
    "confidence": 4.04,
    "response": "doCategoryDiff",
    "parsedResponse": "doCategoryDiff"
  }, {
    "type": "TEXT",
    "contextId": "BKpUH1mTig5TUiycqk4vk",
    "context": "Product_Service_Differentiator",
    "responseId": "Cerj5SWULmzen7WSXY1ej",
    "confidence": 1.9,
    "response": "doProductServiceDiff",
    "parsedResponse": "doProductServiceDiff"
  }, {
    "type": "",
    "contextId": "None",
    "context": "None",
    "responseId": "None",
    "confidence": 0.42,
    "response": "None",
    "parsedResponse": "None"
  }, {
    "type": "TEXT",
    "contextId": "yee~jpp2JwNocNOJUl6V9",
    "context": "Diversity_Differentiator",
    "responseId": "34c6oB_Bkr57l14xk91WF",
    "confidence": 0.36,
    "response": "doDiversityDiff",
    "parsedResponse": "doDiversityDiff"
  }]
}
let LUIS_TopAnswers = [{
  "type": "TEXT",
  "contextId": "iziWSgLoiWjDtABoaa82G",
  "context": "Supplier_Type_Differentiator",
  "responseId": "5X5BH4YmtO1jj0CMDjmtb",
  "confidence": 81.35,
  "response": "doSupplierTypeDiff"
}, {
  "type": "TEXT",
  "contextId": "Rz~WRksw5zU_0f7zMXFDR",
  "context": "Category_Differentiator",
  "responseId": "MiuvwPYcmWf2nLaAS2UDM",
  "confidence": 4.04,
  "response": "doCategoryDiff"
}, {
  "type": "TEXT",
  "contextId": "BKpUH1mTig5TUiycqk4vk",
  "context": "Product_Service_Differentiator",
  "responseId": "Cerj5SWULmzen7WSXY1ej",
  "confidence": 1.9,
  "response": "doProductServiceDiff"
}, {
  "type": "",
  "contextId": "None",
  "context": "None",
  "responseId": "None",
  "confidence": 0.42,
  "response": "None"
}, {
  "type": "TEXT",
  "contextId": "yee~jpp2JwNocNOJUl6V9",
  "context": "Diversity_Differentiator",
  "responseId": "34c6oB_Bkr57l14xk91WF",
  "confidence": 0.36,
  "response": "doDiversityDiff"
}]

let response = [
  {
    "id": "OrgUnit-5193767183187968-5629499534213120",
    "name": "Fabricas Monterrey S.A. de C.V.",
    "websiteURL": "https://www.crowncork.com/",
    "phoneNumber": "267-330-4140",
    "primaryAddress": "Mexico",
    "domains": [
        "famosa.com.mx"
    ],
    "description": "Crown Holdings, Inc. is a leading supplier of beverage packaging, food packaging, aerosol packaging, metal closures, and specialty packaging products to consumer marketing companies around the world.",
    "diversity": [],
    "security": [],
    "quality": [],
    "food": [],
    "sustainability": [],
    "tags": [
        "Beverage cans",
        "Aluminum cans",
        "Beverage Packaging",
        "Metal Packaging",
        "metal packaging formats",
        "Innovative packaging",
        "La Boite Boisson",
        "Sustainability of Metal Packaging"
    ],
    "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-5193767183187968-5629499534213120",
    "logo": {
        "location": "https://logo.clearbit.com/famosa.com.mx",
        "expiry": "2021-06-01T19:19:29+00:00"
    },
    "relationship": {},
    "offerings": [
        "Beverage cans",
        "Aluminum cans",
        "Beverage Packaging",
        "Metal Packaging",
        "metal packaging formats",
        "Innovative packaging",
        "La Boite Boisson",
        "Sustainability of Metal Packaging",
        "packaging sustainability",
        "metal packaging recycling rates",
        "Innovations in Metal Packaging",
        "Transit Packaging Division",
        "Transit Packaging Team",
        "transit packaging products",
        "metal food packaging",
        "Consumer Associations",
        "Food Packaging Design",
        "Transitioning to Metal Packaging",
        "Food Packaging",
        "packaging material use",
        "Innovations in Promotional Packaging",
        "creative packaging design",
        "Promotional Packaging Plant Locations",
        "consumer loyalty"
    ]
},
{
    "id": "OrgUnit-6753582487568384-5693809608491008",
    "name": "Crown",
    "websiteURL": "https://www.crowncork.com/",
    "phoneNumber": "267-330-4140",
    "primaryAddress": "770 Township Line Road, Yardley, Pennsylvania, United States, 19067",
    "domains": [
        "fabricasmonterrey.mx"
    ],
    "description": "Crown Holdings, Inc., through its subsidiaries, is a leading global supplier of rigid packaging products to consumer marketing companies, as well as transit and protective packaging products, equipment and services to a broad range of end markets.",
    "diversity": [],
    "security": [],
    "quality": [],
    "food": [],
    "sustainability": [],
    "tags": [
        "Innovative packaging",
        "Sustainable Packaging",
        "creative packaging",
        "Food Packaging Design",
        "Luxury Packaging",
        "Sustainability of Metal Packaging",
        "packaging sustainability",
        "Innovations in Metal Packaging"
    ],
    "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-6753582487568384-5693809608491008",
    "logo": {
        "location": "https://logo.clearbit.com/fabricasmonterrey.mx",
        "expiry": "2021-06-01T19:19:29+00:00"
    },
    "relationship": {},
    "offerings": [
        "Innovative packaging",
        "Sustainable Packaging",
        "creative packaging",
        "Food Packaging Design",
        "Luxury Packaging",
        "Sustainability of Metal Packaging",
        "packaging sustainability",
        "Innovations in Metal Packaging",
        "metal packaging formats",
        "Metal packaging",
        "metal food packaging",
        "premium metal packaging",
        "Transit Packaging Division",
        "Consumer Associations",
        "consumer loyalty",
        "Innovations in Aerosol Packaging",
        "Innovations in Promotional Packaging",
        "food packaging",
        "eye-catching beverage packaging designs",
        "Metal is sustainable",
        "rigid packaging products",
        "Tin Cans"
    ]
},
{
    "id": "OrgUnit-4975614788370432-5629499534213120",
    "name": "Nestle Adriatic S",
    "websiteURL": "nestle.rs",
    "phoneNumber": "+229 97 97 24 01",
    "primaryAddress": "Serbia",
    "domains": [
        "nestle.rs"
    ],
    "description": "All our manufacturing facilities, wherever they are in the world, are designed to ensure we prepare our products to the highest quality and safety standards.",
    "diversity": [],
    "security": [],
    "quality": [],
    "food": [],
    "sustainability": [],
    "tags": [
        "Pump parts and accessories",
        "Dock equipment",
        "Clutch parts and accessories",
        "Actuators",
        "Pneumatic cylinders and components",
        "Carpentry",
        "Compressors",
        "Clutches"
    ],
    "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-4975614788370432-5629499534213120",
    "logo": {
        "location": "https://logo.clearbit.com/nestle.rs",
        "expiry": "2021-06-01T19:19:29+00:00"
    },
    "relationship": {},
    "offerings": [
        "Pump parts and accessories",
        "Dock equipment",
        "Clutch parts and accessories",
        "Actuators",
        "Pneumatic cylinders and components",
        "Carpentry",
        "Compressors",
        "Clutches",
        "Air fittings and connectors",
        "Conveyors and accessories",
        "Painting and paper hanging",
        "Masonry and stonework and tile setting",
        "Pumps",
        "Water pollution",
        "Drive components",
        "Pneumatic tools",
        "Lifting equipment and accessories",
        "Plumbing and heating and air conditioning",
        "Utilities structures",
        "Batteries and cells and accessories",
        "Industrial trucks",
        "Truck tractors",
        "Electrical services",
        "Water treatment and supply equipment",
        "Uniforms",
        "Transport structures",
        "Power generators",
        "Pest control",
        "Environmental safety services",
        "Fire fighting equipment",
        "General goods storage",
        "Kinetic power transmission",
        "Safety control devices",
        "Coating and caulking and weather and water and fireproofing",
        "Fire prevention",
        "Transportation engineering",
        "Interior finishing",
        "Straps",
        "Product and material transport vehicles",
        "Concrete work",
        "Roofing and siding and sheet metal work",
        "Currency vending machines",
        "Boilers",
        "Specialized warehousing and storage",
        "Electrical and electronic engineering",
        "Automation control connectivity devices",
        "Gears",
        "Mechanical engineering",
        "Wiring harness",
        "Piece and part vending machines",
        "Power tools",
        "Ladders and scaffolding",
        "Ice makers",
        "Warehousing equipment and supplies",
        "Product and material trailers",
        "Mechanical cable",
        "Site preparation services",
        "Chocolate and sugars and sweetening products",
        "Liquid vending machines",
        "Industrial freezers",
        "Mechanical wire",
        "Refuse treatment",
        "Programmable logic controllers",
        "Cooling",
        "Industrial refrigerators",
        "Programmable logic controller subsystems",
        "Liquid waste treatment",
        "Instant mixes and supplies",
        "Control indicating and signaling devices",
        "Ventilation",
        "Nonhazardous waste disposal",
        "Herbs and spices and extracts",
        "Security wire",
        "Industrial structures",
        "Bearings",
        "Automotive chassis",
        "Electrical cable and accessories",
        "Industrial wheels",
        "Refuse collection and disposal",
        "Coffee and tea",
        "Cleaning equipment",
        "Confectionary products",
        "Sprockets",
        "Commercial or industrial construction",
        "Bushings",
        "Shelving and storage",
        "Mixer parts and accessories",
        "Humidity control",
        "Electrical wire",
        "Switches and controls and relays and accessories",
        "Continuous mixers",
        "Batch mixers",
        "Electrical variable speed drives",
        "Chains",
        "Gaskets",
        "Water and sewer utilities",
        "Seals",
        "Food preparation machinery",
        "Lamp ballasts and lamp transformers",
        "Disinfection",
        "Oil and gas utilities",
        "Packings and glands",
        "Food cutting machinery",
        "Wrenches and drivers",
        "Cleaning and disinfecting solutions",
        "Food cooking and smoking machinery",
        "Electric utilities",
        "Ropes",
        "Industrial beverage processing machinery",
        "Robot components",
        "Industrial braking systems",
        "Refurbishing services",
        "Flooring service",
        "Civil engineering",
        "Hazardous waste disposal",
        "Heating equipment and parts and accessories",
        "nestle",
        "Chocolate confectionery",
        "Nestle Supplier Code",
        "coffee communities food banks",
        "new ingredients",
        "Enhancing biomedical science",
        "Nesquik Global",
        "compliance record",
        "safe food products",
        "Chocolate & confectionery",
        "milk chocolate",
        "coffee machines",
        "Anglo-Swiss Milk Company",
        "food preservation",
        "food allergies",
        "Reusable packaging solutions",
        "Safety by design in R D",
        "Nesquik Cereals Italy",
        "Animal Products Processing",
        "Processing of perishable animal products"
    ]
},
{
    "id": "OrgUnit-6600838393364480-5629499534213120",
    "name": "Swiss Miss",
    "websiteURL": "https://www.conagrabrands.com/",
    "phoneNumber": "+1 312-549-5000",
    "primaryAddress": "Chicago, Illinois, United States",
    "domains": [
        "conagrabrands.com"
    ],
    "description": "Promote, as appropriate, the provisions of Conagra Brands' Code of Conduct relating to the reporting by employees of improper accounting or financial reporting without fear of retaliation.",
    "diversity": [],
    "security": [],
    "quality": [],
    "food": [
        {
            "category": "food",
            "type": "gfsi",
            "typeName": "Global Food Safety Initiative",
            "source": "The Safe Quality Food (SQF) Program",
            "sourceURL": "https://www.ac.parkcitygroup.com/application/vwavecgi/public/register.cgi/search/blcares?id=40825",
            "dateAdded": "2020-10-21T15:30:40+00:00",
            "expiryDate": "2021-09-10T11:00:00+00:00",
            "lastChecked": "2020-10-21T15:30:40+00:00"
        },
        {
            "category": "food",
            "type": "organic",
            "typeName": "Certified Organic",
            "source": "",
            "sourceURL": "https://organic.ams.usda.gov/Integrity/",
            "dateAdded": "2020-05-27T13:01:42+00:00",
            "expiryDate": "2021-05-25T15:33:04+00:00",
            "lastChecked": "2020-05-27T13:01:42+00:00"
        }
    ],
    "sustainability": [
        {
            "category": "sustainability",
            "type": "emissionReduction",
            "typeName": "Emission Reduction",
            "source": "Science Based Targets Initiative (SBTI)",
            "sourceURL": "https://sciencebasedtargets.org/",
            "dateAdded": "2021-04-08T16:19:45+00:00",
            "expiryDate": "",
            "lastChecked": "2021-04-08T16:19:45+00:00"
        }
    ],
    "tags": [
        "Conagra Brands Disclosure Information",
        "Supply Chain Disclosure",
        "Dividend Information",
        "Packaged Food",
        "Prepared And Preserved Food",
        "Snack Foods",
        "Frozen Foods",
        "CONAGRA FOODS INC"
    ],
    "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-6600838393364480-5629499534213120",
    "logo": {
        "location": "https://logo.clearbit.com/conagrabrands.com",
        "expiry": "2021-06-01T19:19:29+00:00"
    },
    "relationship": {},
    "offerings": [
        "Conagra Brands Disclosure Information",
        "Supply Chain Disclosure",
        "Dividend Information",
        "Packaged Food",
        "Prepared And Preserved Food",
        "Snack Foods",
        "Frozen Foods",
        "CONAGRA FOODS INC",
        "CONAGRA FOODS",
        "CONAGRA FOODS FOUNDATION",
        "conagra company",
        "Conagra Nutrition",
        "conagra com",
        "Pinnacle Foods shareholders",
        "Supplier Code of Conduct",
        "PASSION FOR FOOD",
        "Brands Supplier Diversity program",
        "Conagra common stock",
        "QUALIFICATION FOR OUR SUPPLIER DIVERSITY PROGRAM",
        "Conagra Innovation",
        "existing products",
        "Stock Chart & Information",
        "RTE popcorn",
        "Packaged Foods",
        "Food and Beverage Processing",
        "BEEF",
        "Packaged food products",
        "Waffle Contract Manufacturers",
        "Frozen breakfast",
        "Canned Meals/Noodles",
        "Frozen meals",
        "Canned pasta"
    ]
},
{
    "id": "OrgUnit-5996976753737728-4523792904880128",
    "name": "Crown",
    "websiteURL": "https://www.crowncork.com/",
    "phoneNumber": "267-330-4140",
    "primaryAddress": "770 Township Line Road, Yardley, Pennsylvania, United States, 19067",
    "domains": [
        "fabricasmty.mx"
    ],
    "description": "Crown Holdings, Inc. is a leading supplier of beverage packaging, food packaging, aerosol packaging, metal closures, and specialty packaging products to consumer marketing companies around the world.",
    "diversity": [],
    "security": [],
    "quality": [],
    "food": [],
    "sustainability": [],
    "tags": [
        "Sustainable Packaging",
        "Innovative packaging",
        "Food Packaging Design",
        "creative packaging",
        "Sustainability of Metal Packaging",
        "Consumer Associations",
        "Transitioning to Metal Packaging",
        "packaging sustainability"
    ],
    "link": "https://dev.tealbook.com/client/suppliers/OrgUnit-5996976753737728-4523792904880128",
    "logo": {
        "location": "https://logo.clearbit.com/fabricasmty.mx",
        "expiry": "2021-06-01T19:19:29+00:00"
    },
    "relationship": {},
    "offerings": [
        "Sustainable Packaging",
        "Innovative packaging",
        "Food Packaging Design",
        "creative packaging",
        "Sustainability of Metal Packaging",
        "Consumer Associations",
        "Transitioning to Metal Packaging",
        "packaging sustainability",
        "Innovations in Metal Packaging",
        "metal food packaging",
        "metal packaging",
        "unique packaging designs",
        "Transit Packaging Team",
        "Transit Packaging Division",
        "Food Packaging",
        "metal and plastic packaging",
        "Tin Cans",
        "consumer preference",
        "unique smart packaging",
        "consumer loyalty"
    ]
}
]

// ==================================== DATA FILTERING =================================
console.log("response ", response);
console.log("luis one data: " + JSON.stringify(LUIS1.topAnswers))
// loop through top answers
function getTopAnswer(){
  keys_.forEach((key) => {
    // console.log(key, key == topIntent)
    if (key == data.topIntent.toLowerCase()) {
      // console.log(NEW_OBJ[key])
      data.topIntentScore = NEW_OBJ[key];
    }
  });
}
let data = {};
let intents = nlpMeta.meta.prediction.intents;
let topIntent = nlpMeta.meta.prediction.topIntent
data.topIntent = topIntent;
console.log(nlpMeta.meta)
console.log(nlpData.meta)
// console.log(topIntent)

function checksGeography() {
  // check if key SupplierNameEntity exists
  const hasKey = 'geographyV2' in nlpMeta.meta.prediction.entities;

  if (hasKey) {
    console.log('The key exists.');
    data.isGeographyV2Mentioned = true;
    data.geographyV2 = nlpMeta.meta.prediction.entities.geographyV2[0].value;
  } else {
    console.log('The key does not exist.');
    data.isGeographyV2Mentioned = false;
    data.geographyV2 = undefined;
  }
}

function checksSupplierNameEntity() {
  // check if key SupplierNameEntity exists
  const hasKey = 'supplierNameListEntity' in nlpMeta.meta.prediction.entities;

  if (hasKey) {
    console.log('The key exists.');
    data.isSupplierMentioned = true;
    data.supplierName = nlpMeta.meta.prediction.entities.supplierNameListEntity[0];
  } else {
    console.log('The key does not exist.');
    data.isSupplierMentioned = false;
    data.supplierName = undefined;
  }
}

function checksCatergoryEntity() {
  // check if key SupplierNameEntity exists
  const hasKey = 'categoryNameListEntity' in nlpMeta.meta.prediction.entities;

  if (hasKey) {
    console.log('The key exists.');
    data.isCategoryMentioned = true;
    data.category = nlpMeta.meta.prediction.entities.categoryNameListEntity[0];
  } else {
    console.log('The key does not exist.');
    data.isCategoryMentioned = false;
    data.category = undefined;
  }
}

function checkTopIntentScore() {
  // get the object, make all keys lower case
  let key, keys = Object.keys(intents);
  let n = keys.length;
  let NEW_OBJ = {};
  while (n--) {
    key = keys[n];
    NEW_OBJ[key.toLowerCase()] = intents[key];
  }
  // console.log(NEW_OBJ)

  // Get all keys, loop and check IF the key were looking for exists
  let keys_ = Object.keys(NEW_OBJ);

  data.nlp_key = key;
  // console.log(keys_)

  keys_.forEach((key) => {
    // console.log(key, key == topIntent)
    if (key == data.topIntent.toLowerCase()) {
      // console.log(NEW_OBJ[key])
      data.topIntentScore = NEW_OBJ[key];
    }
  });
}

checksGeography()
checkTopIntentScore()
checksCatergoryEntity()
checksSupplierNameEntity()

console.log(data)

let checkNLPMetaData = {
  "appId": "9cad0cc0-ea48-407b-b9dd-15de13182b62",
  "subKey": "eda7b4bc404d461e88d6a8182e54cddb",
  "searchterm": "find me a beverage can supplier in mexico ",
  "topIntent": "A - Supplier Shortlisting",
  "keyPhrase": "",
  "entities": null,
  "supplierName": "undefined",
  "supplierReqUUID": "null",
  "meta": {
    "query": "find me a beverage can supplier in mexico",
    "prediction": {
      "topIntent": "A - Supplier Shortlisting",
      "intents": {
        "A - Supplier Shortlisting": {
          "score": 0.9669634
        },
        "NoneSpecificRiskIntent": {
          "score": 0.009048935
        },
        "AdverseMediaRiskIntent": {
          "score": 0.008963352
        },
        "PriceWithFocusAreaIntent": {
          "score": 0.0012182295
        },
        "None": {
          "score": 0.0012109679
        },
        "A - Supplier Risk": {
          "score": 0.0005654773
        },
        "PriceIntent": {
          "score": 0.0005390856
        },
        "NoneIntent": {
          "score": 0.00046438148
        },
        "CategoryDifferentiator": {
          "score": 0.00039090708
        },
        "SupplierNoneSpecificRiskIntent": {
          "score": 0.00031541882
        },
        "GeoPoliticRiskIntent": {
          "score": 0.00020289017
        },
        "FinancialRiskIntent": {
          "score": 0.0001676687
        },
        "SupplierDifferentiatorIntent": {
          "score": 0.000028228735
        }
      },
      "entities": {
        "shortlistingSynonymsEntity": ["find me a"],
        "categoryNameListEntity": [
          ["beverage cans"]
        ],
        "geographyV2": [{
          "value": "mexico",
          "type": "countryRegion"
        }],
        "$instance": {
          "shortlistingSynonymsEntity": [{
            "type": "shortlistingSynonymsEntity",
            "text": "find me a",
            "startIndex": 0,
            "length": 9,
            "score": 0.9738165,
            "modelTypeId": 1,
            "modelType": "Entity Extractor",
            "recognitionSources": ["model"]
          }],
          "categoryNameListEntity": [{
            "type": "categoryNameListEntity",
            "text": "beverage can",
            "startIndex": 10,
            "length": 12,
            "modelTypeId": 5,
            "modelType": "List Entity Extractor",
            "recognitionSources": ["model"]
          }],
          "geographyV2": [{
            "type": "builtin.geographyV2.countryRegion",
            "text": "mexico",
            "startIndex": 35,
            "length": 6,
            "modelTypeId": 2,
            "modelType": "Prebuilt Entity Extractor",
            "recognitionSources": ["model"]
          }]
        }
      }
    }
  },
  "isSupplierMentioned": "false",
  "category": "beverage cans",
  "categoryUUID": "undefined",
  "isCategoryMentioned": "true",
  "userUUID": "null",
  "topIntentScore": 0.9669634,
  "geographyV2": "[object Object]",
  "isGeographyV2Mentioned": "true"
}
console.log(checkNLPMetaData)

let testDAte = Date.now()
new Date(Date.now())
console.log(new Date(Date.now()))

let countryLIst = ["Fabricas Monterrey S.A. de C.V.","Crown","Nestle Adriatic S","Swiss Miss","Crown","Crown Envases México S.A. de C.V.","Nestle Hungaria Kft.","Pactiv","Guhring Mexicana SA DE CV","Nestle Mexico S.A. de C.V."];
console.log(countryLIst)