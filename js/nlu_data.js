let NLU_data = {
  "result": {
    "type": "TEXT",
    "contextId": "EhMu97JgQnZGDyvxindfz",
    "context": "Supplier",
    "topAnswers": [{
        "type": "TEXT",
        "contextId": "EhMu97JgQnZGDyvxindfz",
        "context": "Supplier",
        "confirmationPhrase": null,
        "responseId": "PxfTVLt9eMFxB3PWcnKoN",
        "confidence": 99.88,
        "response": "skillSupplierLookUp"
      },
      {
        "type": "TEXT",
        "contextId": "EhMu97JgQnZGDyvxindfz",
        "context": "Supplier",
        "responseId": "6vPzCem4U75ZLH_I9AsOj",
        "confidence": 0.19,
        "response": "skillSupplierRisk"
      },
      {
        "type": "",
        "contextId": "None",
        "context": "None",
        "responseId": "None",
        "confidence": 0.16,
        "response": "None"
      }
    ],
    "entities": [{
        "parsedValue": [],
        "value": "women owned",
        "entity": "DiversityEntity",
        "detailedType": "DiversityEntity",
        "startPos": 5,
        "endPos": 16,
        "confidence": 79.78920000000001
      },
      {
        "parsedValue": [],
        "value": "beverage can",
        "entity": "ProperNounEntity",
        "detailedType": "ProperNounEntity",
        "startPos": 17,
        "endPos": 29,
        "confidence": 98.39339
      },
      {
        "parsedValue": [
          "beverage cans"
        ],
        "value": "beverage can",
        "entity": "CategoryListEntity",
        "detailedType": "CategoryListEntity",
        "startPos": 17,
        "endPos": 29,
        "confidence": 100
      },
      {
        "parsedValue": "suppliers",
        "value": "suppliers",
        "entity": "SupplierKeyWord",
        "detailedType": "SupplierKeyWord",
        "startPos": 30,
        "endPos": 39,
        "confidence": 76.83611
      },
      {
        "parsedValue": "India",
        "value": "India",
        "entity": "geographyV2",
        "detailedType": "countryRegion",
        "startPos": 43,
        "endPos": 48,
        "confidence": 100
      }
    ],
    "question": "find women owned beverage can suppliers in India",
    "phrase": "find women owned beverage can suppliers in India",
    "response": "skillSupplierLookUp",
    "responseId": "PxfTVLt9eMFxB3PWcnKoN",
    "parsedResponse": "skillSupplierLookUp",
    "contextQueryId": "480dce29-0877-425b-b3b6-3ba8b69fbe5a",
    "confidence": 99.88,
    "topResponses": [{
        "type": "TEXT",
        "contextId": "EhMu97JgQnZGDyvxindfz",
        "context": "Supplier",
        "confirmationPhrase": null,
        "responseId": "PxfTVLt9eMFxB3PWcnKoN",
        "confidence": 99.88,
        "response": "skillSupplierLookUp",
        "parsedResponse": "skillSupplierLookUp"
      },
      {
        "type": "TEXT",
        "contextId": "EhMu97JgQnZGDyvxindfz",
        "context": "Supplier",
        "responseId": "6vPzCem4U75ZLH_I9AsOj",
        "confidence": 0.19,
        "response": "skillSupplierRisk",
        "parsedResponse": "skillSupplierRisk"
      },
      {
        "type": "",
        "contextId": "None",
        "context": "None",
        "responseId": "None",
        "confidence": 0.16,
        "response": "None",
        "parsedResponse": "None"
      }
    ]
  }
}
console.log(NLU_data)

let data = {};

NLU_data.result.entities.forEach(r => {
  if (r.entity == "geographyV2") {
    data.geographyV2 = {
      "entity": r.entity,
      "value": r.value,
      "parsedValue": r.parsedValue
    }
  }
  if (r.entity == "DiversityEntity") {
    data.DiversityEntity = {
      "entity": r.entity,
      "value": r.value,
      "parsedValue": r.parsedValue
    }
  }
  if (r.entity == "CategoryListEntity") {
    data.CategoryListEntity = {
      "entity": r.entity,
      "value": r.value,
      "parsedValue": r.parsedValue
    }
  }
  if (r.entity == "ProperNounEntity") {
    data.ProperNounEntity = {
      "entity": r.entity,
      "value": r.value,
      "parsedValue": r.parsedValue
    }
  }
})

// return data;
console.log(data)

let result = {};
let ent = [];
NLU_data.result.entities.forEach(k => {

  if (k.entity == "DetailRequest") {
    ent.push(k)
  }
  if (k.entity == "SupplierListEntity") {
    ent.push(k)
    result.name = k.value
  }
  if (k.entity == "CategoryListEntity") {
    ent.push(k)
    result.name = k.value
  }

  ent.forEach(m => {
    console.log(m.entity)
    let tempArr = [];
    tempArr.push(m.entity)
    if (tempArr.includes("CategoryListEntity")) {
      console.log("it includes")
      result.detail_intent = "category_detail"
    }
    if (tempArr.includes("SupplierListEntity")) {
      console.log("it includes")
      result.detail_intent = "supplier_detail"
    }
  })

})

result.entities = ent;
// console.log(result)

// return result;
console.log(result)



let entitiesParsed = [{
  "parsedValue": [],
  "value": "minority owned",
  "entity": "DiversityEntity",
  "detailedType": "DiversityEntity",
  "startPos": 5,
  "endPos": 19,
  "confidence": 73.881465
}, {
  "parsedValue": [],
  "value": "beverage can",
  "entity": "ProperNounEntity",
  "detailedType": "ProperNounEntity",
  "startPos": 20,
  "endPos": 32,
  "confidence": 86.07816
}, {
  "parsedValue": ["beverage cans"],
  "value": "beverage can",
  "entity": "CategoryListEntity",
  "detailedType": "CategoryListEntity",
  "startPos": 20,
  "endPos": 32,
  "confidence": 100
}]

console.log(entitiesParsed)
let res = {};
res.supplierName = null;
res.risks = {}
res.riskMentioned = null;
res.risks.FinancialRiskEntity = null;
res.risks.GeoPoliticalRisk = null;
res.risks.SustainabilityRiskEntity = null;
res.risks.AdverseMediaRiskEntity = null;
res.risks.CyberSecurityRisk = null;

entitiesParsed.forEach(k => {
  console.log(k.entity)
  if (k.entity == 'SupplierListEntity') {
    res.supplierName = k.value
  }
  if (k.entity == 'GeoPoliticalRisk') {
    res.risks.supplierName = k.value
  }
  if (k.entity == 'AdverseMediaRiskEntity') {
    res.risks.AdverseMediaRiskEntity = k.value
  }
  if (k.entity == 'FinancialRiskEntity') {
    res.risks.FinancialRiskEntity = k.value
  }
  if (k.entity == 'SustainabilityRiskEntity') {
    res.risks.SustainabilityRiskEntity = k.value
  }
  if (k.entity == 'CyberSecurityRisk') {
    res.risks.CyberSecurityRisk = k.value
  }
})

let riskMentions = !Object.values(res.risks).every(o => o === null);

console.log(riskMentions);
res.riskMentioned = riskMentions;
console.log(res)

let jsRisks = {
  "supplierName": "cisco",
  "risks": {
    "FinancialRiskEntity": null,
    "GeoPoliticalRisk": null,
    "SustainabilityRiskEntity": null,
    "AdverseMediaRiskEntity": null,
    "CyberSecurityRisk": "Cyber Security Risk"
  },
  "riskMentioned": true
}

console.log(jsRisks)