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

// ==================================== DATA FILTERING =================================

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