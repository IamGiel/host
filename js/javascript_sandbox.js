let string_to_replace = "s that s microprocessors";
let result = string_to_replace.replace(/ s |s that|of |my | in|supplier|supplies| the|\/|provide|provides|for|who|non|mbb| suppliers in.*$| supplier | suppliers |supplier |suppliers | suppliers|from |from|the |with.*$|in the .*$|from .*$ /gmi, '').trim();
console.log(result)




let num = 123123333;
console.log(num.toLocaleString());

let nlp_data =  {
  "result": {
    "type": "TEXT",
    "contextId": "f1sDcueppaxFeI8QIQObr",
    "context": "ToAnalyst",
    "topAnswers": [
      {
        "type": "TEXT",
        "contextId": "f1sDcueppaxFeI8QIQObr",
        "context": "ToAnalyst",
        "responseId": "ExKAgTDGfdkRn01hdQD9S",
        "confidence": 11.01,
        "response": "toAnalyst"
      },
      {
        "type": "TEXT",
        "contextId": "ab59YuBQmQRC0DGV6ksWC",
        "context": "SupplierDetails",
        "responseId": "yDGBx3df5unUP9L6ROMul",
        "confidence": 2.83,
        "response": "skillSupplierDetail"
      },
      {
        "type": "TEXT",
        "contextId": "EcvYWvPDIii6OSB1AeeJ7",
        "context": "Supplier",
        "responseId": "~E7uU7dIaun4BcuXxHENn",
        "confidence": 1.03,
        "response": "skillSupplierRisk"
      },
      {
        "type": "",
        "contextId": "None",
        "context": "None",
        "responseId": "None",
        "confidence": 0,
        "response": "None"
      },
      {
        "type": "TEXT",
        "contextId": "EcvYWvPDIii6OSB1AeeJ7",
        "context": "Supplier",
        "confirmationPhrase": null,
        "responseId": "3gZHgJpAphyp49gS_r3tf",
        "confidence": 0,
        "response": "skillSupplierLookUp"
      }
    ],
    "entities": [
      {
        "parsedValue": "dum",
        "value": "dum",
        "entity": "KeyNameEntity",
        "detailedType": "KeyNameEntity",
        "startPos": 0,
        "endPos": 3,
        "confidence": 100
      }
    ],
    "question": "dum ",
    "phrase": "dum ",
    "response": "toAnalyst",
    "responseId": "ExKAgTDGfdkRn01hdQD9S",
    "parsedResponse": "toAnalyst",
    "contextQueryId": "b2c05af5-8fbf-45e4-af88-694335a50605",
    "confidence": 11.01,
    "topResponses": [
      {
        "type": "TEXT",
        "contextId": "f1sDcueppaxFeI8QIQObr",
        "context": "ToAnalyst",
        "responseId": "ExKAgTDGfdkRn01hdQD9S",
        "confidence": 11.01,
        "response": "toAnalyst",
        "parsedResponse": "toAnalyst"
      },
      {
        "type": "TEXT",
        "contextId": "ab59YuBQmQRC0DGV6ksWC",
        "context": "SupplierDetails",
        "responseId": "yDGBx3df5unUP9L6ROMul",
        "confidence": 2.83,
        "response": "skillSupplierDetail",
        "parsedResponse": "skillSupplierDetail"
      },
      {
        "type": "TEXT",
        "contextId": "EcvYWvPDIii6OSB1AeeJ7",
        "context": "Supplier",
        "responseId": "~E7uU7dIaun4BcuXxHENn",
        "confidence": 1.03,
        "response": "skillSupplierRisk",
        "parsedResponse": "skillSupplierRisk"
      },
      {
        "type": "",
        "contextId": "None",
        "context": "None",
        "responseId": "None",
        "confidence": 0,
        "response": "None",
        "parsedResponse": "None"
      },
      {
        "type": "TEXT",
        "contextId": "EcvYWvPDIii6OSB1AeeJ7",
        "context": "Supplier",
        "confirmationPhrase": null,
        "responseId": "3gZHgJpAphyp49gS_r3tf",
        "confidence": 0,
        "response": "skillSupplierLookUp",
        "parsedResponse": "skillSupplierLookUp"
      }
    ]
  }
}

console.log(nlp_data)

console.log(nlp_data.result.entities.length)
nlp_data.result.entities.forEach(k=> {
  if(k.detailedType == "KeyNameEntity" && nlp_data.result.confidence < 85) {
    console.log("are you searching for " + `"${k.value}"` + " supplier ?" );
  }
  
})
// if(nlp_data.result.entities.length == 1)

