let jsPriceDetails = [{
  "grade_name": "Brent",
  "actual_period_str": "Oct-2021",
  "data_ts": "2021-10-04T15:12:08Z",
  "author_id": "AU20",
  "dtype": "price_direct",
  "actual_period": "2021-10-01T00:00:00Z",
  "feedstock": "",
  "feedstock_id": "",
  "indirects_price_forecast": "NO",
  "billing_rate_forecast": "NO",
  "unit": "Barrel",
  "sources": "EIA",
  "market_overview": "Brent crude oil prices averaged 70.7 USD/bbl in Aug-21 decreasing by 5.7% with overall upward momentum decreasing significantly as OPEC announced production cuts rollover with 0.4 mbpd increase planned on a month on months basis. OPEC is expected to contribute 0.25 mbpd of the overall production increase with rest coming majorly from Russia and other nations.\nGlobal consumption post increasing strongly to 98.5 mbpd had stabilized around 98.7 mbpd in Jul-21 and has persisted similar trend in Agu-21 creating uncertainty over OPEC persisting with the current production cut rollover plans and hence has resulted in major volatility in prices in recent weeks. Negative correction in the US Dollar with global stock markets trending positively has further raised optimism over demand growth supporting recent positive trend in oil prices.",
  "sub_category_name": "Crude oil",
  "location_id": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
  "fc_id": "310f9fa4-0d53-3c53-9625-db9eb4eccf3d",
  "guidance": "FOB Europe, Contract Prices",
  "sub_category_data_ts": "2021-10-04T15:12:16Z",
  "sub_category_uuid": "756ac8e1-ea7f-11ea-acc0-0a730e7eabfe",
  "grade_data_ts": "2021-10-04T15:12:08Z",
  "grade_type_id": "GT01",
  "region": "Europe",
  "percentage_change": -2.8,
  "currency": "USD",
  "input_cost": "NO",
  "cost_structure": "NO",
  "price_id": "A001-01_AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK_Oct-2021",
  "category_name": "Energy",
  "hovering_indicator": "",
  "location_data_ts": "2021-10-04T15:12:17Z",
  "price_point": 70,
  "sub_category_id": "A001",
  "related_sub_category_id": "D335",
  "grade_id": "A001-01",
  "grade_type_name": "Grade",
  "author_name": "Siddhartha Shaurabh, Category Lead - Energy & Utilities",
  "accuracy_3_months": 95,
  "substitute": "",
  "indices": "NO",
  "related_sub_category": "Natural Gas",
  "country": "AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK",
  "category_id": "58",
  "accuracy_6_months": 90,
  "price_forecast": "YES",
  "market_outlook": "Crude oil prices are expected to average around 72 USD/bbl in Sep-21 increasing by 1.8% on a M-o-M basis. Oil prices are expected to increase as global inventories have witnessed decrease reflecting recovery in demand and hence lower prices is expected to further stimulate demand. Increase in Chinese imports is expected to extend in upcoming months.\nUncertainty over OPEC production cut rollover implementation on future expected global oil consumption rate slowing down can further result in volatility in oil prices.\n;\nCrude oil prices are expected to average around 72.5 USD/bbl in Q3 2021. Prices are expected to decrease marginally to around 69 USD/bbl in Q4 2021 as covid-19 restrictions can result in demand growth slowing down in upcoming months. Overall demand has reached close to pre covid-19 levels and hence risks of slowdown have increased. Uncertainty over easing of sanctions on Iran with geo-political tensions can further result in volatility in oil prices with overall trend stable.\nExpected additional increase in oil supply by 0.4 mbpd can witness delays as global consumption growth rate can witness slowdown and hence provide support to oil prices.\n;\nCrude oil prices are expected to increase to 80-90 USD/bbl range in H1 2022 as global demand levels are expected to improve further to pre-covid levels of around 98-100 mbpd. However, by mid 2022, demand growth rate is expected to slowdown as global economic activity can witness slowdown with major economies raising interest rates on rising inflation. Compliance challenges can increase at higher oil prices resulting in OPEC increase production levels which can result in negative correction in oil prices by mid to end of 2022.\nUS Dollar can witness significant appreciation in 2022 with stock markets witnessing negative correction on slowdown relative to 2021 and hence can correspond to lower oil prices",
  "period_frequency": "Monthly",
  "accuracy_12_months": 85,
  "substitute_id": ""
}]

console.log(jsPriceDetails)

// this is the price of --- 

let price = `${jsPriceDetails[0].price_point}/${jsPriceDetails[0].unit}`

// here is an overview of the market price... 
let market_overview = jsPriceDetails[0].market_overview;

// there is a `percent_change` in the last  `period_frequency`
let percent_change = jsPriceDetails[0].percentage_change
let period_frequency = jsPriceDetails[0].period_frequency;

// would you like to know about market forecast for this category ? 
let market_outlook = jsPriceDetails[0].market_outlook;


let test = "{\"region\":\"NG\",\"datetimeV2\":\"null\",\"start_time\":\"2021-10-01\",\"KeyNameEntity\":\"crude oil\",\"end_time\":\"2021-10-26\",\"geographyV2\":\"Nigeria\",\"type\":\"A001-01\",\"data_availability\":{\"gradeID\":\"A001\",\"location_types\":[],\"grade_types\":[\"A001-03\",\"A001-01\",\"A001-02\"],\"frequencies\":null,\"no_cost_structure_data\":null,\"location_type\":\"country\",\"category_name\":\"Crude oil\",\"dropdown_loc\":[{\"label\":\"United Arab Emirates\",\"value\":\"AE\"},{\"label\":\"United Kingdom\",\"value\":\"GB\"},{\"label\":\"Nigeria\",\"value\":\"NG\"},{\"label\":\"USA\",\"value\":\"US\"},{\"label\":\"Europe\",\"value\":\"AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK\"},{\"label\":\"Europe\",\"value\":\"AX,AL,AD,AT,BY,BE,BA,BG,HR,CZ,DK,EE,FO,FI,FR,DE,GI,GR,GG,VA,HU,IS,IE,IM,IT,JE,LV,LI,LT,LU,MT,MD,MC,ME,NL,MK,NO,PL,PT,RO,RU,SM,RS,SK,SI,ES,SJ,SE,CH,UA,GB,XK\"}],\"dropdown_grade\":[{\"label\":\"A001-03\",\"value\":\"A001-03\"},{\"label\":\"A001-01\",\"value\":\"A001-01\"},{\"label\":\"A001-02\",\"value\":\"A001-02\"}]}}"
console.log(JSON.parse(test))


let test_data = {
  "result": {
    "type": "TEXT",
    "contextId": "6zC7Hlxj0dU7GZLZxV5q6",
    "context": "PriceCostInfo",
    "topAnswers": [{
        "type": "TEXT",
        "contextId": "6zC7Hlxj0dU7GZLZxV5q6",
        "context": "PriceCostInfo",
        "responseId": "9vuoLVJ9zZgyulfpJZgBm",
        "confidence": 99.16,
        "response": "skillPriceCost",
        "stringResponse": "skillPriceCost",
        "parsedResponse": "skillPriceCost"
      },
      {
        "type": "TEXT",
        "contextId": "nNW7rcIUTBALlw3OW9xF7",
        "context": "NoneIntent",
        "responseId": "_SNxhxA7vx3eU7qNnj4iO",
        "confidence": 0.9,
        "response": "skillNone",
        "stringResponse": "skillNone",
        "parsedResponse": "skillNone"
      },
      {
        "type": "TEXT",
        "contextId": "EtIBjmv5d~pr2alEWkMvj",
        "context": "SupplierDetails",
        "responseId": "QkpJbSgjd9~wE5ZQ13y2X",
        "confidence": 0,
        "response": "skillSupplierDetail",
        "stringResponse": "skillSupplierDetail",
        "parsedResponse": "skillSupplierDetail"
      },
      {
        "type": "TEXT",
        "contextId": "4cFMLiGkbqU7scSrnerdT",
        "context": "Supplier",
        "confirmationPhrase": null,
        "responseId": "w5ZvpajwGIN6j1rXRGsDQ",
        "confidence": 0,
        "response": "skillSupplierLookUp",
        "stringResponse": "skillSupplierLookUp",
        "parsedResponse": "skillSupplierLookUp"
      },
      {
        "type": "TEXT",
        "contextId": "4cFMLiGkbqU7scSrnerdT",
        "context": "Supplier",
        "responseId": "AyCsn5sgd3VjAhl~zKyDW",
        "confidence": 0,
        "response": "skillSupplierRisk",
        "stringResponse": "skillSupplierRisk",
        "parsedResponse": "skillSupplierRisk"
      }
    ],
    "entities": [{
        "parsedValue": "what is the",
        "value": "what is the",
        "entity": "DetailRequest",
        "detailedType": "DetailRequest",
        "startPos": 0,
        "endPos": 11,
        "entityName": "DetailRequest",
        "confidence": 99.99624
      },
      {
        "parsedValue": "price of",
        "value": "price of",
        "entity": "PriceKeyWordEntity",
        "detailedType": "PriceKeyWordEntity",
        "startPos": 12,
        "endPos": 20,
        "entityName": "PriceKeyWordEntity",
        "confidence": 99.99869
      },
      {
        "parsedValue": "crude oil",
        "value": "crude oil",
        "entity": "KeyNameEntity",
        "detailedType": "KeyNameEntity",
        "startPos": 21,
        "endPos": 30,
        "entityName": "KeyNameEntity",
        "confidence": 100
      }
    ],
    "question": "what is the price of crude oil",
    "phrase": "what is the price of crude oil",
    "response": "skillPriceCost",
    "stringResponse": "skillPriceCost",
    "responseId": "9vuoLVJ9zZgyulfpJZgBm",
    "parsedResponse": "skillPriceCost",
    "contextName": "PriceCostInfo",
    "contextQueryId": "445bb9a2-a00a-4dd4-8fa3-50ed31f54235",
    "confidence": 99.16,
    "topResponses": [{
        "type": "TEXT",
        "contextId": "6zC7Hlxj0dU7GZLZxV5q6",
        "context": "PriceCostInfo",
        "responseId": "9vuoLVJ9zZgyulfpJZgBm",
        "confidence": 99.16,
        "response": "skillPriceCost",
        "stringResponse": "skillPriceCost",
        "parsedResponse": "skillPriceCost"
      },
      {
        "type": "TEXT",
        "contextId": "nNW7rcIUTBALlw3OW9xF7",
        "context": "NoneIntent",
        "responseId": "_SNxhxA7vx3eU7qNnj4iO",
        "confidence": 0.9,
        "response": "skillNone",
        "stringResponse": "skillNone",
        "parsedResponse": "skillNone"
      },
      {
        "type": "TEXT",
        "contextId": "EtIBjmv5d~pr2alEWkMvj",
        "context": "SupplierDetails",
        "responseId": "QkpJbSgjd9~wE5ZQ13y2X",
        "confidence": 0,
        "response": "skillSupplierDetail",
        "stringResponse": "skillSupplierDetail",
        "parsedResponse": "skillSupplierDetail"
      },
      {
        "type": "TEXT",
        "contextId": "4cFMLiGkbqU7scSrnerdT",
        "context": "Supplier",
        "confirmationPhrase": null,
        "responseId": "w5ZvpajwGIN6j1rXRGsDQ",
        "confidence": 0,
        "response": "skillSupplierLookUp",
        "stringResponse": "skillSupplierLookUp",
        "parsedResponse": "skillSupplierLookUp"
      },
      {
        "type": "TEXT",
        "contextId": "4cFMLiGkbqU7scSrnerdT",
        "context": "Supplier",
        "responseId": "AyCsn5sgd3VjAhl~zKyDW",
        "confidence": 0,
        "response": "skillSupplierRisk",
        "stringResponse": "skillSupplierRisk",
        "parsedResponse": "skillSupplierRisk"
      }
    ]
  }
}


// console.log(data)

let test2 = {
  "messages": [

    {
      "stepId": "e39631e9-6a1b-4c0c-b6b2-59d1f314858f",
      "id": "8f9d7c98-b5d6-4211-84b4-e29ac9307766",
      "message": "Im ABI173.  Ask me.  I will return the NLU entities extracted from your question.",
      "medias": [],
      "useCustomAnswer": false,
      "userAnswerFunction": null,
      "userAnswerVariables": [],
      "userAnswerFunctionParams": {
        "userReply": "String"
      },
      "answerComponent": {
        "component": "or-textbox",
        "vBind": {
          "name": "or-textbox",
          "placeholder": "",
          "textInputType": "text"
        },
        "showComponentInMessage": false
      },
      "additionalContent": {
        "additionalScript": ""
      },
      "isSuggestionInput": true,
      "placeholder": "",
      "suggestionsType": "emty",
      "time": 1635433219574
    },
    {
      "answer": {
        "message": "asdasd",
        "userReply": "asdasd",
        "userText": "asdasd",
        "preventContinueFlow": false,
        "messageId": null,
        "type": "sync",
        "expire": 1635436756659,
        "name": "H7Ie6ebyvHcCGVQ=",
        "id": "Y6Btfo5xeiesVTOC4x5xs",
        "v": 0,
        "callback": {
          "type": "sync",
          "expire": 1635436756659,
          "name": "H7Ie6ebyvHcCGVQ=",
          "id": "Y6Btfo5xeiesVTOC4x5xs",
          "v": 0
        }
      },
      "time": 1635433225654,
      "id": "2e212f48-3f88-4345-8774-d9ee7dbf0dc2"
    },
    {
      "message": "skillNone\n\nasdasd\n\n4.78\n\nENTITIES: \n\n[\n  {\n    \"parsedValue\": \"asdasd\",\n    \"value\": \"asdasd\",\n    \"entity\": \"KeyNameEntity\",\n    \"detailedType\": \"KeyNameEntity\",\n    \"startPos\": 0,\n    \"endPos\": 6,\n    \"entityName\": \"KeyNameEntity\",\n    \"confidence\": 100\n  }\n]\n\n\nTEST RES:\n{\n  \"geo_type\": \"KeyNameEntity\",\n  \"KeyNameEntity\": \"asdasd\"\n}\n\nLocation: \n\n",
      "stepId": "db374707-0ecc-4a5e-9656-c34204557a0d",
      "id": "d1de4c8c-2e9a-4c67-95b3-6e7cad53bdec",
      "time": 1635433226984
    },
    {
      "stepId": "15160918-d313-4172-8d7a-875342b70194",
      "id": "fa1356c9-b703-4083-b50e-dc8a9d265d38",
      "message": "Creating your chat transcript...",
      "medias": [],
      "userAnswerFunction": null,
      "userAnswerVariables": [],
      "userAnswerFunctionParams": {},
      "answerComponent": {
        "component": "custom",
        "vBind": {
          "name": "custom",
          "vars": [{
            "varName": "headerLogo",
            "varValue": "https://onereach.ai/wp-content/uploads/2017/09/LogoMaster_Oct29_18_LargeForNav-e1571323917293.png"
          }, {
            "varName": "chatId",
            "varValue": "0vj6cud"
          }, {
            "varName": "chatTitle",
            "varValue": ""
          }, {
            "varName": "iconBot",
            "varValue": "https://www.beroeinc.com/assets/images/beroe-live-v3/abi.gif"
          }, {
            "varName": "iconUser",
            "varValue": "https://image.flaticon.com/icons/svg/145/145867.svg"
          }, {
            "varName": "timeLocaleFormat",
            "varValue": "en-GB"
          }, {
            "varName": "nameBot",
            "varValue": "Abi-p151"
          }, {
            "varName": "nameUser",
            "varValue": "User"
          }],
          "templateType": "html",
          "hideAfterSubmit": false,
          "showBotIcon": false,
          "autoSubmit": false,
          "css": ".custom-component-ecdc6ef73f004d738f6f2d074d0cdb0c {\n  /*\n  not required\n*/ }\n",
          "cssWrapperClassName": "custom-component-ecdc6ef73f004d738f6f2d074d0cdb0c",
          "scripts": [],
          "html": "<!--not required",
          "javascript": "////////////////////////////////////////////////////////////////////\r\n//TRANSCRIBE LOCAL STORAGE CACHE\r\n\r\n\r\n//get current conversation from localstorage\r\nconst tmprwcls = JSON.parse(localStorage.getItem('__rwc'));\r\nconst rwcls = _.values(tmprwcls[chatId]).sort((a, b) => b.timestamp - a.timestamp);\r\nconst convo = rwcls[0];\r\n//\r\n\r\nconsole.log(\"this is gel \",  JSON.stringify(convo));\r\n\r\n//step ui inputs\r\nconst IMAGE_HEADER = headerLogo \r\nconst CHAT_TITLE = chatTitle\r\nconst NAME_BOT = nameBot\r\nconst NAME_USER = nameUser\r\nconst ICON_BOT = iconBot\r\nconst ICON_USER = iconUser\r\nconst SIDE_BOT = 'left'\r\nconst SIDE_USER = 'right'\r\nconst TIME_FORMAT = timeLocaleFormat\r\n//\r\n\r\n//create transcription array and html\r\nvar chatStartTime = new Date(convo.timestamp); \r\nvar chatArray = [];\r\nvar chatHtml = '';\r\n\r\nchatArray.push(`Chat Title: ${CHAT_TITLE}`)\r\nchatArray.push(`Chat Time: ${chatStartTime}`)\r\n\r\nchatHtml += `<!DOCTYPE html><html><head>\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> \r\n<style> \r\n:root { --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); --msger-bg: #fff; --border: 2px solid #ddd; --left-msg-bg: #ececec; --right-msg-bg: #579ffb; }\r\nhtml { box-sizing: border-box; }\r\n*, *:before, *:after { margin: 0; padding: 0; box-sizing: inherit; }\r\nbody { display: flex; justify-content: center; align-items: center; /*height: 100vh; remove scrolling for pdf*/ background-image: var(--body-bg); font-family: Helvetica, sans-serif; }\r\n.msger { display: flex; flex-flow: column wrap; justify-content: space-between; width: 100%; max-width: 867px; margin: 25px 10px; height: calc(100% - 50px); border: var(--border); border-radius: 5px; background: var(--msger-bg); box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2); }\r\n.msger-header { align-items: flex-end;justify-content: space-between; padding: 10px; border-bottom: var(--border); background: #eee; color: #666; }\r\n.msger-chat { flex: 1; overflow-y: auto; padding: 10px; } .msger-chat::-webkit- scrollbar { width: 6px; } .msger-chat::-webkit-scrollbar-track { background: #ddd; } .msger-chat::-webkit-scrollbar-thumb { background: #bdbdbd; } .msg { display: flex; align-items: flex-end; margin-bottom: 10px; } .msg:last-of-type { margin: 0; } .msg-img { width: 50px; height: 50px; margin-right: 10px; background: #ddd; background-repeat: no-repeat; background-position: center; background-size: cover; border-radius: 50%; } .msg-bubble { max-width: 450px; padding: 15px; border-radius: 15px; background: var(--left-msg-bg); } .msg-info { display: flex; justify-content: space-between; align-items: center; margin- bottom: 10px; } .msg-info-name { margin-right: 10px; font-weight: bold; } .msg- info-time { font-size: 0.85em; }\r\n.left-msg .msg-bubble { border-bottom-left-radius: 0; }\r\n.right-msg { flex-direction: row-reverse; } .right-msg .msg-bubble { background: var(--right-msg-bg); color: #fff; border-bottom-right-radius: 0; } .right-msg .msg-img { margin: 0 0 0 10px; }\r\n.msger-chat { background-color: #fcfcfe; } \r\n</style> </head>\r\n<body><section class=\"msger\">\r\n  <header class=\"msger-header\">\r\n    <img src=\"${IMAGE_HEADER}\" >\r\n    <div class=\"msger-header-title\">${CHAT_TITLE}</div>\r\n    <div class=\"msger-header-title\">${chatStartTime}</div>\r\n  </header>\r\n  <main class=\"msger-chat\">\r\n  `;\r\n\r\n\r\n\r\n_.forEach(convo.messages, component => {\r\n\r\n  if(component.message){\r\n    appendMessage(NAME_BOT, ICON_BOT, SIDE_BOT, component)\r\n  }\r\n  else if (component.answer){\r\n    appendMessage(NAME_USER, ICON_USER, SIDE_USER, createMessageText(component))\r\n  } \r\n\r\n})\r\n\r\nchatHtml += `</main></section></body></html>`;\r\n//\r\n\r\n//functions \r\nfunction createMessageText(component){\r\n\r\n  //RATING RESPONSE\r\n  //cannot trust answerComponent as its not on some other component responses. ?!?\r\n  //message does not exist so we'll create it.\r\n  if(component.answer.rating){\r\n    component.message = `Rating: ${component.answer.rating}, Feedback: `\r\n      component.answer.feedback\r\n    if(typeof component.answer.feedback !== 'undefined')\r\n      component.message += component.answer.feedback\r\n  }\r\n\r\n  //SLIDER RESPONSE\r\n  //no answerComponent\r\n  //message does exist but contains html, we will override the message with clean\r\n  else if(component.answer.value && component.answer.units)  //this might be risky if other components have same, but no other option\r\n    component.message = `${component.answer.value} ${component.answer.units}`\r\n\r\n  //LOCATION RESPONSE\r\n  //has answer component !?!\r\n  //no message, lets create it and handle displaying the image in append func.\r\n  else if(component.answer.location){\r\n    component.message = `Latitude: ${component.answer.location.lat}, Longitude: ${component.answer.location.lng}`\r\n    component.image = component.answer.image\r\n  }\r\n  \r\n  \r\n  else // handle text answer\r\n    component.message = component.answer.message\r\n\r\nreturn component\r\n}\r\n\r\n\r\nfunction appendMessage(name, img, side, component) {\r\n  \r\n  //handle location as its the only message that contains extra div (currently?!?)\r\n  if(typeof component.image === \"undefined\"){\r\n    chatHtml += `\r\n      <div class=\"msg ${side}-msg\">\r\n        <div class=\"msg-img\" style=\"background-image: url(${img})\"></div>\r\n        <div class=\"msg-bubble\">\r\n          <div class=\"msg-info\">\r\n            <div class=\"msg-info-name\">${name}</div>\r\n            <div class=\"msg-info-time\">${formatTime(component.time)}</div>\r\n          </div>\r\n          <div class=\"msg-text\">\r\n            ${component.message}          \r\n            </div>\r\n        </div>\r\n      </div>\r\n    `;\r\n    \r\n    chatArray.push(`Bot: ${component.message}`)\r\n  }\r\n  else {\r\n     chatHtml += `\r\n      <div class=\"msg ${side}-msg\">\r\n        <div class=\"msg-img\" style=\"background-image: url(${img})\"></div>\r\n        <div class=\"msg-bubble\">\r\n          <div class=\"msg-info\">\r\n            <div class=\"msg-info-name\">${name}</div>\r\n            <div class=\"msg-info-time\">${formatTime(component.time)}</div>\r\n          </div>\r\n          <div class=\"msg-location\">\r\n            <img src=\"${component.image}\" alt=\"Location\">\r\n          </div>\r\n          <div class=\"msg-text\">\r\n            ${component.message}          \r\n            </div>\r\n        </div>\r\n      </div>\r\n    `;\r\n    \r\n    chatArray.push(`Bot: ${component.message}`)\r\n  }\r\n  \r\n}\r\n\r\nfunction formatTime(date) {\r\n  return new Date(date).toLocaleTimeString(timeLocaleFormat) \r\n}\r\n//\r\n\r\n//console logging\r\nconsole.log(chatArray)\r\nconsole.log(chatHtml)\r\n//\r\n\r\n\r\n//return myData to rwc\r\n// sendMessage({ \r\n//     message: ``, \r\n//     myData: {\"chatArray\":chatArray, \"html\":chatHtml}\r\n//   })\r\nsendMessage({ \r\n    message: ``, \r\n    myData: \"tmprwcls\"\r\n  })\r\n\r\n\r\n/////////////////////////////////////////////////////////////////\r\n\r\n"
        },
        "showComponentInMessage": true
      },
      "additionalContent": {
        "additionalScript": ""
      },
      "time": 1635433227401
    }

  ],
}

console.log(test2.messages)

test2.messages.forEach(k => {
  if(k.message){
    console.log(k.message)
  }
  if(k.answer){
    console.log(k.answer.message)
  }
})

let tmprwcls = {
  "QiC7gddOSUCn_ioPnrE17g": {
      "globalCommandsStepInitialized": false,
      "messages": [
          {
              "message": "Looking into it. One moment please...",
              "stepId": "f01af9ff-9953-4373-876b-642d4121d548",
              "id": "712c8a7b-7666-446d-a9ce-d12cf9dc7f5f",
              "time": 1635475217677
          },
          {
              "stepId": "8904738e-1492-4f50-85d5-83e1397b3478",
              "id": "fe5ecf02-a885-4216-91b9-71e4e738229a",
              "message": "Did you mean, \"Crude Oil\" ?",
              "medias": [],
              "useCustomAnswer": false,
              "userAnswerFunction": null,
              "userAnswerVariables": [],
              "userAnswerFunctionParams": {
                  "label": "String",
                  "value": "String"
              },
              "answerComponent": {
                  "component": "rwc-buttons-list",
                  "vBind": {
                      "name": "rwc-buttons-list",
                      "options": [
                          {
                              "label": "`Yes`",
                              "value": "`yes`",
                              "buttonStyle": "default",
                              "vforkey": "85bd157f-cb3c-4a92-bf54-c6763a29141d"
                          },
                          {
                              "label": "`No`",
                              "value": "`no`",
                              "buttonStyle": "default",
                              "vforkey": "82819a94-7f8e-4df0-a2d0-c0a6c885af58"
                          }
                      ]
                  },
                  "showComponentInMessage": false
              },
              "additionalContent": {
                  "additionalScript": ""
              },
              "time": 1635475223834
          }
      ],
      "timestamp": 1635475223518
  },
  "NBdf7kWkSJmitZnnHBf7Jw": {
      "globalCommandsStepInitialized": false,
      "messages": [
          {
              "message": "Looking into it. One moment please...",
              "stepId": "f01af9ff-9953-4373-876b-642d4121d548",
              "id": "d5088fde-20b4-4ace-9f6b-03f2d1370523",
              "time": 1635475711106
          },
          {
              "stepId": "8904738e-1492-4f50-85d5-83e1397b3478",
              "id": "28b99ac3-9c88-49f7-94b8-4db5f0e2ab5c",
              "message": "Did you mean, \"ABS\" ?",
              "medias": [],
              "useCustomAnswer": false,
              "userAnswerFunction": null,
              "userAnswerVariables": [],
              "userAnswerFunctionParams": {
                  "label": "String",
                  "value": "String"
              },
              "answerComponent": {
                  "component": "rwc-buttons-list",
                  "vBind": {
                      "name": "rwc-buttons-list",
                      "options": [
                          {
                              "label": "`Yes`",
                              "value": "`yes`",
                              "buttonStyle": "default",
                              "vforkey": "85bd157f-cb3c-4a92-bf54-c6763a29141d"
                          },
                          {
                              "label": "`No`",
                              "value": "`no`",
                              "buttonStyle": "default",
                              "vforkey": "82819a94-7f8e-4df0-a2d0-c0a6c885af58"
                          }
                      ]
                  },
                  "showComponentInMessage": false
              },
              "additionalContent": {
                  "additionalScript": ""
              },
              "time": 1635475717027
          },
          {
              "answer": {
                  "message": "No",
                  "value": "no",
                  "label": "No",
                  "messageId": null,
                  "type": "sync",
                  "expire": 1635479295479,
                  "name": "H8wVjeWvvHcCIQw=",
                  "id": "bD2IR8KUQadOz-IdCBOvi",
                  "v": 0,
                  "callback": {
                      "type": "sync",
                      "expire": 1635479295479,
                      "name": "H8wVjeWvvHcCIQw=",
                      "id": "bD2IR8KUQadOz-IdCBOvi",
                      "v": 0
                  }
              },
              "time": 1635475722193,
              "id": "df2c5340-b030-4647-88ad-b7b576f81c13"
          },
          {
              "message": "This category does not exist in your account.",
              "stepId": "a459b86f-b019-4ea5-964f-6597ea5e8c27",
              "id": "7f1dbc71-fad3-4ace-8fae-36aa963d37b2",
              "time": 1635475722684
          },
          {
              "stepId": "c411dbc3-d514-49fc-b60f-2096689adfff",
              "id": "f4f1c9f8-81e8-49c2-8be8-0084b73fe247",
              "message": "Would you like me to connect you with an analyst?",
              "medias": [],
              "useCustomAnswer": false,
              "userAnswerFunction": null,
              "userAnswerVariables": [],
              "userAnswerFunctionParams": {
                  "label": "String",
                  "value": "String"
              },
              "answerComponent": {
                  "component": "rwc-buttons-list",
                  "vBind": {
                      "name": "rwc-buttons-list",
                      "options": [
                          {
                              "label": "`Yes, connect me!`",
                              "value": "`yes`",
                              "buttonStyle": "default",
                              "vforkey": "4e8bca3a-9fa1-4296-a619-1df246d48152"
                          },
                          {
                              "label": "`No, thanks.`",
                              "value": "`no`",
                              "buttonStyle": "default",
                              "vforkey": "7c31f9c8-713f-4d4b-9947-6ac66ece6b41"
                          }
                      ]
                  },
                  "showComponentInMessage": false
              },
              "additionalContent": {
                  "additionalScript": ""
              },
              "time": 1635475723105
          },
          {
              "answer": {
                  "message": "No, thanks.",
                  "value": "no",
                  "label": "No, thanks.",
                  "messageId": null,
                  "type": "sync",
                  "expire": 1635479295479,
                  "name": "H8wVjeWvvHcCIQw=",
                  "id": "PUfNH1dWLsz9onzxq3SVF",
                  "v": 0,
                  "callback": {
                      "type": "sync",
                      "expire": 1635479295479,
                      "name": "H8wVjeWvvHcCIQw=",
                      "id": "PUfNH1dWLsz9onzxq3SVF",
                      "v": 0
                  }
              },
              "time": 1635475729049,
              "id": "4f5e8c37-4eb2-4609-98b9-f01f7d2da2db"
          },
          {
              "stepId": "a02ff1c9-c39b-40f3-ab79-29c1bfec37ea",
              "id": "c3a55ac4-7d7b-4486-8519-15ef9d9bbe01",
              "message": "Saving chat transcripts...",
              "medias": [],
              "userAnswerFunction": null,
              "userAnswerVariables": [],
              "userAnswerFunctionParams": {},
              "answerComponent": {
                  "component": "custom",
                  "vBind": {
                      "name": "custom",
                      "vars": [
                          {
                              "varName": "headerLogo",
                              "varValue": "https://onereach.ai/wp-content/uploads/2017/09/LogoMaster_Oct29_18_LargeForNav-e1571323917293.png"
                          },
                          {
                              "varName": "chatId",
                              "varValue": "undefined"
                          },
                          {
                              "varName": "chatTitle",
                              "varValue": "undefined"
                          },
                          {
                              "varName": "iconBot",
                              "varValue": "https://www.beroeinc.com/assets/images/beroe-live-v3/abi.gif"
                          },
                          {
                              "varName": "iconUser",
                              "varValue": "https://image.flaticon.com/icons/svg/145/145867.svg"
                          },
                          {
                              "varName": "timeLocaleFormat",
                              "varValue": "en-GB"
                          },
                          {
                              "varName": "nameBot",
                              "varValue": "Abi-p151"
                          },
                          {
                              "varName": "nameUser",
                              "varValue": "User"
                          }
                      ],
                      "templateType": "html",
                      "hideAfterSubmit": false,
                      "showBotIcon": false,
                      "autoSubmit": false,
                      "css": ".custom-component-ecdc6ef73f004d738f6f2d074d0cdb0c {\n  /*\n  not required\n*/ }\n",
                      "cssWrapperClassName": "custom-component-ecdc6ef73f004d738f6f2d074d0cdb0c",
                      "scripts": [],
                      "html": "<!--not required",
                      "javascript": "////////////////////////////////////////////////////////////////////\r\n//TRANSCRIBE LOCAL STORAGE CACHE\r\n\r\n\r\n//get current conversation from localstorage\r\nconst tmprwcls = JSON.parse(localStorage.getItem('__rwc')).abi_v3;\r\nconst rwcls = _.values(tmprwcls[chatId]).sort((a, b) => b.timestamp - a.timestamp);\r\nconst convo = rwcls[0];\r\n//\r\nconsole.log(\"this is tmprwcls \", tmprwcls);\r\nconsole.log(\"this is rwcls \",  rwcls);\r\nconsole.log(\"this is gel \",  JSON.stringify(convo));\r\n\r\n\r\n\r\n\r\n//return myData to rwc\r\nsendMessage({ \r\n    message: ``, \r\n    myData: convo\r\n  })\r\n\r\n\r\n\r\n/////////////////////////////////////////////////////////////////\r\n\r\n"
                  },
                  "showComponentInMessage": true
              },
              "additionalContent": {
                  "additionalScript": ""
              },
              "time": 1635475730969
          }
      ],
      "timestamp": 1635475730718
  }
}

let newArr = Object.values(tmprwcls);
console.log(newArr)




newArr.sort(function(a, b) {
var keyA = new Date(a.timestamp),
  keyB = new Date(b.timestamp);
if (keyA > keyB) {return -1;}
if (keyA < keyB) {return 1;}
return 0;
});

console.log(newArr);
console.log(newArr[0].messages);

let test4 = {"intent":{"question":"what is the price of electricity","response":"skillPriceCost","contextName":"PriceCostInfo","date":"1635509836701"},"transcripts":{"id":1,"data":[{"message":"Looking into it. One moment please...","stepId":"f01af9ff-9953-4373-876b-642d4121d548","id":"02697508-a219-455f-b2f2-fb63a38649de","time":1635509837307},{"stepId":"8904738e-1492-4f50-85d5-83e1397b3478","id":"57b8c27f-f3e5-439d-bcd5-084a54d34402","message":"Did you mean, \"4PL Services\" ?","medias":[],"useCustomAnswer":false,"userAnswerFunction":null,"userAnswerVariables":[],"userAnswerFunctionParams":{"label":"String","value":"String"},"answerComponent":{"component":"rwc-buttons-list","vBind":{"name":"rwc-buttons-list","options":[{"label":"`Yes`","value":"`yes`","buttonStyle":"default","vforkey":"85bd157f-cb3c-4a92-bf54-c6763a29141d"},{"label":"`No`","value":"`no`","buttonStyle":"default","vforkey":"82819a94-7f8e-4df0-a2d0-c0a6c885af58"}]},"showComponentInMessage":false},"additionalContent":{"additionalScript":""},"time":1635509839903},{"answer":{"message":"No","value":"no","label":"No","messageId":null,"type":"sync","expire":1635513432987,"name":"H-DrZdXmvHcCGXw=","id":"RJxvQtyeXSFuWr_bayDaM","v":0,"callback":{"type":"sync","expire":1635513432987,"name":"H-DrZdXmvHcCGXw=","id":"RJxvQtyeXSFuWr_bayDaM","v":0}},"time":1635510033329,"id":"2a3fe936-c116-46f5-9bca-109b899e1562"},{"message":"This category does not exist in your account.","stepId":"a459b86f-b019-4ea5-964f-6597ea5e8c27","id":"828c1566-2e2c-481d-97f1-3bf889ddff23","time":1635510033858},{"stepId":"c411dbc3-d514-49fc-b60f-2096689adfff","id":"ced7b05a-afc2-4d82-a3f3-61895a938345","message":"Would you like me to connect you with an analyst?","medias":[],"useCustomAnswer":false,"userAnswerFunction":null,"userAnswerVariables":[],"userAnswerFunctionParams":{"label":"String","value":"String"},"answerComponent":{"component":"rwc-buttons-list","vBind":{"name":"rwc-buttons-list","options":[{"label":"`Yes, connect me!`","value":"`yes`","buttonStyle":"default","vforkey":"4e8bca3a-9fa1-4296-a619-1df246d48152"},{"label":"`No, thanks.`","value":"`no`","buttonStyle":"default","vforkey":"7c31f9c8-713f-4d4b-9947-6ac66ece6b41"}]},"showComponentInMessage":false},"additionalContent":{"additionalScript":""},"time":1635510034281},{"answer":{"message":"No, thanks.","value":"no","label":"No, thanks.","messageId":null,"type":"sync","expire":1635513432987,"name":"H-DrZdXmvHcCGXw=","id":"8x14pDAN8TQeiLghZUlBv","v":0,"callback":{"type":"sync","expire":1635513432987,"name":"H-DrZdXmvHcCGXw=","id":"8x14pDAN8TQeiLghZUlBv","v":0}},"time":1635510040373,"id":"2b1b542e-ec34-47d1-a4b6-8fd69e59162f"},{"stepId":"a02ff1c9-c39b-40f3-ab79-29c1bfec37ea","id":"1e08b4fe-20b0-4f14-b525-68f94fffd4fa","message":"Saving chat transcripts...","medias":[],"userAnswerFunction":null,"userAnswerVariables":[],"userAnswerFunctionParams":{},"answerComponent":{"component":"custom","vBind":{"name":"custom","vars":[{"varName":"headerLogo","varValue":"https://onereach.ai/wp-content/uploads/2017/09/LogoMaster_Oct29_18_LargeForNav-e1571323917293.png"},{"varName":"chatId","varValue":"undefined"},{"varName":"chatTitle","varValue":"undefined"},{"varName":"iconBot","varValue":"https://www.beroeinc.com/assets/images/beroe-live-v3/abi.gif"},{"varName":"iconUser","varValue":"https://image.flaticon.com/icons/svg/145/145867.svg"},{"varName":"timeLocaleFormat","varValue":"en-GB"},{"varName":"nameBot","varValue":"Abi-p151"},{"varName":"nameUser","varValue":"User"}],"templateType":"html","hideAfterSubmit":true,"showBotIcon":true,"autoSubmit":false,"css":".custom-component-ecdc6ef73f004d738f6f2d074d0cdb0c {\n /*\n not required\n*/ }\n","cssWrapperClassName":"custom-component-ecdc6ef73f004d738f6f2d074d0cdb0c","scripts":[],"html":"<!--not required","javascript":"////////////////////////////////////////////////////////////////////\r\n//TRANSCRIBE LOCAL STORAGE CACHE\r\n\r\n\r\n//get current conversation from localstorage\r\nconst tmprwcls = JSON.parse(localStorage.getItem('__rwc')).abi_v3;\r\n\r\nlet newArr = Object.values(tmprwcls);\r\nconsole.log(newArr)\r\n\r\n\r\n\r\n\r\nnewArr.sort(function(a, b) {\r\nvar keyA = new Date(a.timestamp),\r\n keyB = new Date(b.timestamp);\r\nif (keyA > keyB) {return -1;}\r\nif (keyA < keyB) {return 1;}\r\nreturn 0;\r\n});\r\n\r\nconsole.log(\"gels newarr >>> \", newArr);\r\nconsole.log(\"gels newarr mesages[0] >>> \", newArr[0].messages);\r\n\r\n\r\n//return myData to rwc\r\nsendMessage({ \r\n message: ``, \r\n myData: newArr[0].messages\r\n })\r\n\r\n\r\n\r\n/////////////////////////////////////////////////////////////////\r\n\r\n"},"showComponentInMessage":true},"additionalContent":{"additionalScript":""},"time":1635510040943}]}}
console.log(test4)

var jsonList = { ref: "TEST1", inventory: [{ id: "a1", date: 1431462270 }, { id: "a2", date: 1414836094 }] },
    sorted = jsonList.inventory.sort(function(a, b) {
        return a.date - b.date;
    });

document.write('<pre>' + JSON.stringify(sorted, 0, 4) + '</pre>');

// replace "11-01-2021" 4th -> 7th character of the string

let string_to_test = "11-22-2021";

function editDateString(date_string){
  console.log(date_string)
}


// remove a certain character from a string and replace it with something else
function setCharAt(str,index,chr) {
  if(index > str.length-1) return str;
  // console.log("str.substring(0,index): ", str.substring(0,index))
  // console.log("chr: ", chr)
  // console.log("str.substring(index+1): ", str.substring(index+2))
  return str.substring(0,index) + chr + str.substring(index+2);
}

console.log("this is startTime: ", setCharAt(string_to_test, 3, '01'))
console.log("this is endTime: ", setCharAt(string_to_test, 3, '28'))

let st_time = setCharAt(string_to_test, 3, '01')
let en_time = setCharAt(string_to_test, 3, '28')

// reverse a string 
function reverse(s) {
  return s.split('').reverse().join('');
}

console.log(reverse(st_time))
console.log(reverse(en_time))

// reconstruct order of string

function reconstructStringDate(date, index){
  // console.log(date)
  // console.log(index)
  // console.log("======")
  // console.log("year: ", date.substring(index+2))
  // console.log("month: ", date.substring(0,2))
  // console.log("day: ", date.substring(3,5))
  let year = date.substring(index+2);
  let month = date.substring(0,2);
  let day = date.substring(3,5);
  let res = `${year}-${month}-${day}`
  return res;
}

console.log(reconstructStringDate(st_time, 4))
console.log(reconstructStringDate(en_time, 4))



