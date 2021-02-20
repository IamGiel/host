// google key: AIzaSyBWE-FwSOln73eCNv1hZsQVbqitL9XNBh0

// =============== ONE REACH API ===========

// fetch('https://sdkapi.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/supplier-lists', {
//     method: 'get',
//     headers: {
//       'content-type': 'application/json',
//       'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37'
//     },
//     // body: JSON.stringify(data),
//   })
//   .then(response => response.json())
//   .then(data => {
//     data.items.forEach(e => {
//       console.log(e._source.supplier_name)
//     });
//   });

// let sampleData = [{
//   "id": "1",
//   "supplier_name": "Tesla"
// }, {
//   "id": "2",
//   "supplier_name": "Lithium Americas"
// }, {
//   "id": "3",
//   "supplier_name": "Raytheon"
// }];

// let ent = {
//   "entities": {
//     "geographyV2": [{
//       "value": "tesla",
//       "type": "poi"
//     }],
//     "keyPhrase": [
//       "tesla"
//     ],
//     "SupplierNameEntity": [
//       [
//         "tesla"
//       ]
//     ],
//     "FinRiskEntity": [
//       "financially"
//     ],
//     "$instance": {
//       "geographyV2": [{
//         "type": "builtin.geographyV2.poi",
//         "text": "tesla",
//         "startIndex": 3,
//         "length": 5,
//         "modelTypeId": 2,
//         "modelType": "Prebuilt Entity Extractor",
//         "recognitionSources": [
//           "model"
//         ]
//       }],
//       "keyPhrase": [{
//         "type": "builtin.keyPhrase",
//         "text": "tesla",
//         "startIndex": 3,
//         "length": 5,
//         "modelTypeId": 2,
//         "modelType": "Prebuilt Entity Extractor",
//         "recognitionSources": [
//           "model"
//         ]
//       }],
//       "SupplierNameEntity": [{
//         "type": "SupplierNameEntity",
//         "text": "tesla",
//         "startIndex": 3,
//         "length": 5,
//         "modelTypeId": 5,
//         "modelType": "List Entity Extractor",
//         "recognitionSources": [
//           "model"
//         ]
//       }],
//       "FinRiskEntity": [{
//         "type": "FinRiskEntity",
//         "text": "financially",
//         "startIndex": 9,
//         "length": 11,
//         "score": 0.909937441,
//         "modelTypeId": 1,
//         "modelType": "Entity Extractor",
//         "recognitionSources": [
//           "model"
//         ]
//       }]
//     }
//   }
// }


// // let res = Object.entries(sampleData).map(([value, label]) => ({value, ...label}));

// // console.log(res);

// let tempArray = Object.keys(ent['entities']).map((item, key) => {
//   return {

//     index: key,
//     type: item,
//     keyPhrase: ent['entities'][item][0]
//     // "label": ent['entities'][item] // etc, a structure what you want
//   };
// })

// console.log(ent['entities'].hasOwnProperty('FinRiskEntityasd'));

// let ress = tempArray.map(a => a.value);
// console.log(ress)

// let tempArray = Object.keys(ent['entities']).map((item, key) => {
//   return {
//       "value": item,
//       "label": ent['entities'][item] // etc, a structure what you want
//   };
// })

// console.log(tempArray);

// var transformed = sampleData.map(function (obj) {
//   var result = {
//     key: obj.key,
//     values: []
//   }

//   for (var key in obj) {
//     if (obj.hasOwnProperty(key) && key !== "id") {
//       result.values.push([key, obj[key]]);
//     }
//   }
//   return result;
// });

// console.log(transformed);

// fetch('https://sdkapi.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/component-data', {
//     method: 'GET', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37'
//     },
//     // body: JSON.stringify(data),
//   })
//   .then(response => response.json())
//   .then(data => {
//       var riskScore = data.items[0]._source['data'].dow_SER.SER.SER['riskScore'];
//       var supplierName = data.items[0]._source['data'].apiSupplier.data[0].supplierName;
//       var catArr = data.items[0]._source['data'].apiCategory.userCategories.content;

//       var dataSetArr = [];
//       var arr0 = [];
//       var arr1 = [];
//       var arr2 = [];


//       catArr.forEach((element, index) => {
//         if(index === 0){
//           arr0.push(element.name)
//           arr0.push(1)

//         } else if(index === 1){
//           arr1.push(element.name)
//           arr1.push(1)

//         } else if(index === 2){
//           arr2.push(element.name)
//           arr2.push(1)

//         }

//     });
//     if(arr0.length > 0 && arr1.length > 0 && arr2.length > 0)
//       dataSetArr.push(arr0);
//       dataSetArr.push(arr1);
//       dataSetArr.push(arr2);
//   });


// ============== OPEN WEATHER API =================

// let button = document.getElementById("get-location");
// let latText = document.getElementById("latitude");
// let longText = document.getElementById("longitude");

// function getLocation() {
//   navigator.geolocation.getCurrentPosition(function (position) {

//     console.log(position)
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;

//     console.log("this is latitude: ", lat)
//     console.log("this is longitude: ", long)


//   })
// };


// getLocation();



// var settings = {
//   "url": "http://api.openweathermap.org/data/2.5/weather?lat=90&lon=34&appid=f57ea824e89edda25200ba98c9cf0c82",
//   "method": "GET",
//   "timeout": 0,
// };

// $.ajax(settings).done(function (response) {
//   console.log(response);
//   console.log(response.weather[0].description);
//   console.log(response.main.feels_like);
// });


// // convert UC/UNIX time stamp to day of the week
// var timestamp = 1608256800; // UNIX timestamp in seconds
// var dt = new Date();
// dt.setTime(timestamp * 1000); // javascript timestamps are in milliseconds
// document.write(dt);

// let ts = 1549312452;
// let time = (new Date(ts * 1000) + '').slice(16, 24);
// let time2 = (new Date(ts * 1000) + '').slice(0, 15);

// console.log("time >>>>>>> ", time);
// console.log("time2 >>>>>>> ", time2);
// document.write(dt.getDay());


// ============= LUIS API ==================


// let appID = "9cad0cc0-ea48-407b-b9dd-15de13182b62";
// let subscriptionKey = "eda7b4bc404d461e88d6a8182e54cddb";
// let queryHere = "should i sell the house?";

// fetch(`https://eastus.api.cognitive.microsoft.com/luis/prediction/v3.0/apps/${appID}/slots/production/predict?subscription-key=${subscriptionKey}&verbose=true&show-all-intents=true&log=true&query=${queryHere}`, {
//     method: 'GET', // or 'PUT'
//     headers: {
//       "Ocp-Apim-Subscription-Key": subscriptionKey
//       // 'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37'
//     },
//     // body: JSON.stringify(data),
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     console.log("prediction.topIntent: ", data.prediction.topIntent)
//     console.log("prediction.entities: ", data.prediction.entities.keyPhrase)
//     console.log(data.prediction.topIntent);
//   });

// $( () => {




//   $.ajax({
//       url: `https://eastus.api.cognitive.microsoft.com/luis/prediction/v3.0/apps/${appID}/slots/production/predict?subscription-key=${subscriptionKey}&verbose=true&show-all-intents=true&log=true&query=${queryHere}`,
//       beforeSend: function (xhrObj) {
//         // Request headers
//         xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", `${subscriptionKey}`);
//       },
//       type: "GET",
//       // Request body
//       data: "{body}",
//     })
//     .done(function (data) {
//       alert("success");

//       console.log(data.prediction.topIntent);

//     })
//     .fail(function () {
//       alert("error");
//     });
// });

// ===== How to check if a string contains text from an array of substrings in JavaScript?

// const substrings = ["weather", "buy", "sell", "price"]; 
// // await this.mergeFields['storeHumor'].get({path: 'userMsg'})
// let x = "await this.mergeFields['storeHumor'].get({path: 'userMsg'})";
// let str = `this is x: ${x}`;
// let val;



// const checker = (st) => {

//   if (substrings.some(v => st.includes(v))) {
//     val = true;
//   } else {
//     val = false;
//   }
//   // console.log(val)
//   return val;
// };

// return checker(str);

// console.log(checker(str));

// supplier-list + id
// let supObject = {
//   "SER": {
//     "SER": null,
//     "responseDate": "2020-10-07T14:35:21.000+0000"
//   },
//   "DOW_JONES_ADVANCE": {
//     "SUPPLIER_KEY": "NOT AVAILABLE",
//     "DOWJones": [{
//         "issueName": "Regulatory",
//         "allegations": {
//           "Corruption Issues": [],
//           "Regulatory Issues": [],
//           "Fraud Issues": [],
//           "Sanctions": []
//         },
//         "totalCount": 0
//       },
//       {
//         "issueName": "Environment/Production",
//         "allegations": {
//           "Product/Service Issues": [],
//           "Production/Supply Chain Issues": [],
//           "Environmental Issues": []
//         },
//         "totalCount": 0
//       },
//       {
//         "issueName": "Social/Labour",
//         "allegations": {
//           "Workforce Disputes": [],
//           "Discrimination/Workforce Rights Issues": [],
//           "Workforce Health/Safety Issues": [],
//           "Human Rights Issues": []
//         },
//         "totalCount": 0
//       }
//     ],
//     "responseDate": "2020-12-06T01:00:02.000+0000"
//   },
//   "CREDIT_SAFE_RATING": {
//     "CreditSafe": {
//       "providerValue": "73",
//       "commonValue": "B",
//       "providerDescription": "Business dealings permissible with moderate risk of default.",
//       "dataAvailable": true
//     },
//     "responseDate": "2020-10-08T07:57:42.000+0000"
//   },
//   "REQUEST_DETAILS": {
//     "STATUS": "ACTIVE",
//     "SUBSCRIPTION_END_DATE": "2021-09-19T00:50:49.000+0000",
//     "SUPPLIER_DETAILS": {
//       "employees": null,
//       "headQuaters": null,
//       "phoneNumber": null,
//       "duns_number": null,
//       "sales": null,
//       "established": null,
//       "summary": null,
//       "chief_executive_officer_name": null,
//       "cfo": null,
//       "vicePresident": null,
//       "website": null,
//       "facebook": null,
//       "linkedIn": null,
//       "sic_1_description": null,
//       "sic_2_description": null,
//       "sic_3_description": null,
//       "sic_4_description": null,
//       "sic_5_description": null,
//       "sic_6_description": null,
//       "naics_1_code": null,
//       "mailing_city_name": null,
//       "status_code": null,
//       "us_1987_sic_5": null,
//       "naics_1_code_description": null,
//       "naics_6_code": null,
//       "physical_street_address": null,
//       "mailing_state_province_abbreviat": null,
//       "version": null,
//       "national_identification_number": null,
//       "mailing_state_province_name": null,
//       "naics_4_code_description": null,
//       "physical_city_name": null,
//       "filler_dup": null,
//       "dias_code": null,
//       "naics_3_code_description": null,
//       "physical_country_name": null,
//       "dnb_mailing_continent_code": null,
//       "mailing_address": null,
//       "subsidiary_indicator": null,
//       "global_ultimate": null,
//       "timestamp": null,
//       "dnb_mailing_country_code": null,
//       "hierarchy_code": null,
//       "global_ultimate_business_name": null,
//       "business_name": null,
//       "dnb_mailing_state_province_code": null,
//       "us_1987_sic_4": null,
//       "mailing_postal_code": null,
//       "naics_3_code": null,
//       "national_identification_type_cod": null,
//       "mailing_country_name": null,
//       "us_1987_sic_2": null,
//       "naics_4_code": null,
//       "transaction_indicator": null,
//       "dnb_mailing_city_code": null,
//       "us_1987_sic_3": null,
//       "filler": null,
//       "naics_2_code_description": null,
//       "naics_5_code_description": null,
//       "naics_5_code": null,
//       "physical_state_province_name": null,
//       "us_1987_sic_6": null,
//       "chief_executive_officer_title": null,
//       "naics_6_code_description": null,
//       "naics_2_code": null,
//       "extended_gu_duns_number": null,
//       "extended_gu_business_name": null,
//       "us_1987_sic_1": null
//     },
//     "LATEST_RESPONSE_DATE": "2020-12-06T01:00:02.000+0000",
//     "SUPPLIER_NAME": "CISCO SYSTEMS"
//   },
//   "DOW_JONES_SANCTIONS": {
//     "SUPPLIER_KEY": "NOT AVAILABLE",
//     "DOWJones": [{
//       "issueName": "Sanctions Control and Ownership",
//       "allegations": {
//         "Category": [],
//         "Identification": [],
//         "Source": []
//       },
//       "totalCount": 0
//     }],
//     "responseDate": "2020-12-06T01:00:02.000+0000"
//   }
// }

// let supOBj2 = {
//   "SER": {
//     "SER": null,
//     "responseDate": "2020-10-07T14:35:21.000+0000"
//   },
//   "DOW_JONES_ADVANCE": {
//     "SUPPLIER_KEY": "NOT AVAILABLE",
//     "DOWJones": [{
//       "issueName": "Regulatory",
//       "allegations": {
//         "Corruption Issues": [],
//         "Regulatory Issues": [],
//         "Fraud Issues": [],
//         "Sanctions": []
//       },
//       "totalCount": 0
//     }, {
//       "issueName": "Environment/Production",
//       "allegations": {
//         "Product/Service Issues": [],
//         "Production/Supply Chain Issues": [],
//         "Environmental Issues": []
//       },
//       "totalCount": 0
//     }, {
//       "issueName": "Social/Labour",
//       "allegations": {
//         "Workforce Disputes": [],
//         "Discrimination/Workforce Rights Issues": [],
//         "Workforce Health/Safety Issues": [],
//         "Human Rights Issues": []
//       },
//       "totalCount": 0
//     }],
//     "responseDate": "2020-12-06T01:00:02.000+0000"
//   },
//   "CREDIT_SAFE_RATING": {
//     "CreditSafe": {
//       "providerValue": "73",
//       "commonValue": "B",
//       "providerDescription": "Business dealings permissible with moderate risk of default.",
//       "dataAvailable": true
//     },
//     "responseDate": "2020-10-08T07:57:42.000+0000"
//   },
//   "REQUEST_DETAILS": {
//     "STATUS": "ACTIVE",
//     "SUBSCRIPTION_END_DATE": "2021-09-19T00:50:49.000+0000",
//     "SUPPLIER_DETAILS": {
//       "employees": null,
//       "headQuaters": null,
//       "phoneNumber": null,
//       "duns_number": null,
//       "sales": null,
//       "established": null,
//       "summary": null,
//       "chief_executive_officer_name": null,
//       "cfo": null,
//       "vicePresident": null,
//       "website": null,
//       "facebook": null,
//       "linkedIn": null,
//       "sic_1_description": null,
//       "sic_2_description": null,
//       "sic_3_description": null,
//       "sic_4_description": null,
//       "sic_5_description": null,
//       "sic_6_description": null,
//       "naics_1_code": null,
//       "mailing_city_name": null,
//       "status_code": null,
//       "us_1987_sic_5": null,
//       "naics_1_code_description": null,
//       "naics_6_code": null,
//       "physical_street_address": null,
//       "mailing_state_province_abbreviat": null,
//       "version": null,
//       "national_identification_number": null,
//       "mailing_state_province_name": null,
//       "naics_4_code_description": null,
//       "physical_city_name": null,
//       "filler_dup": null,
//       "dias_code": null,
//       "naics_3_code_description": null,
//       "physical_country_name": null,
//       "dnb_mailing_continent_code": null,
//       "mailing_address": null,
//       "subsidiary_indicator": null,
//       "global_ultimate": null,
//       "timestamp": null,
//       "dnb_mailing_country_code": null,
//       "hierarchy_code": null,
//       "global_ultimate_business_name": null,
//       "business_name": null,
//       "dnb_mailing_state_province_code": null,
//       "us_1987_sic_4": null,
//       "mailing_postal_code": null,
//       "naics_3_code": null,
//       "national_identification_type_cod": null,
//       "mailing_country_name": null,
//       "us_1987_sic_2": null,
//       "naics_4_code": null,
//       "transaction_indicator": null,
//       "dnb_mailing_city_code": null,
//       "us_1987_sic_3": null,
//       "filler": null,
//       "naics_2_code_description": null,
//       "naics_5_code_description": null,
//       "naics_5_code": null,
//       "physical_state_province_name": null,
//       "us_1987_sic_6": null,
//       "chief_executive_officer_title": null,
//       "naics_6_code_description": null,
//       "naics_2_code": null,
//       "extended_gu_duns_number": null,
//       "extended_gu_business_name": null,
//       "us_1987_sic_1": null
//     },
//     "LATEST_RESPONSE_DATE": "2020-12-06T01:00:02.000+0000",
//     "SUPPLIER_NAME": "CISCO SYSTEMS"
//   },
//   "DOW_JONES_SANCTIONS": {
//     "SUPPLIER_KEY": "NOT AVAILABLE",
//     "DOWJones": [{
//       "issueName": "Sanctions Control and Ownership",
//       "allegations": {
//         "Category": [],
//         "Identification": [],
//         "Source": []
//       },
//       "totalCount": 0
//     }],
//     "responseDate": "2020-12-06T01:00:02.000+0000"
//   }
// }


// let supArr = Object.values(supObject);

// console.log(supArr)

// let dataKeyDash = {
//   "contentId": "181be4f4bab84c43bc58993558ef6168",
//   "categoryId": "756ac9be-ea7f-11ea-acc0-0a730e7eabfe",
//   "userContentStatistics": null,
//   "portfolio": "Rigid Packaging",
//   "categoryName": "Beverage Cans",
//   "description": "Global beverage can market is expected to grow at 1-2 percent CAGR during 2019-2024, to reach ~460 billion units driven by growing demand for specialty can formats such as slim and sleek within CSD and beer segment. Beverage Cans are experiencing significant inflections in 2020, with changing demand patterns in conventional demand channels. This report covers a deep analysis of Beverage Cans market by region",
//   "title": "BEVERAGE CANS",
//   "documentType": "CategoryIntelligenceReport",
//   "uploadedDate": "2020-08-27T00:00:00.000+0000",
//   "version": 11,
//   "thumbnailPath": "/marketintelligence/thumbnail/3559650954408207/Beverage_Cans_Thumbnail_Image.jpg",
//   "authorName": "Beroe",
//   "flipBookPath": "/marketintelligence/flipbook/3559650954408207/Beverage_Cans/index.html",
//   "published": true,
//   "source": "Beroe",
//   "externalLinks": null,
//   "contentType": "pdf",
//   "sectionDetails": null,
//   "preferencedCategory": true
// }

// let someData = {
//   "supplierSearchKeyword": "",
//   "filters": {
//       "similarSuppliers": [],
//       "locations": [{
//           "zipCode": "",
//           "country": "United States",
//           "state": "",
//           "city": ""
//       }],
//       "qualifications": [],
//       "classificationCodes": []
//   }
// }
// console.log("im here")
// console.log(someData.filters.locations[0].country)

let apiDataCollection = {
  "apiAccount": {
      "email": "suneel.pasupulati@beroe-inc.com",
      "userOnboardingCompleted": true,
      "industry": null,
      "country": {
          "name": "United States",
          "uuid": "530e0344-ea7f-11ea-acc0-0a730e7eabfe",
          "iso2Code": null
      },
      "company": {
          "name": "Beroe Inc",
          "uuid": "c0a6b8fb-1292-4ffb-b327-a90638836dfb"
      },
      "jobTitle": {
          "name": "Category Manager / Strategic Sourcing Manager",
          "uuid": "602fd915-ea7d-11ea-acc0-0a730e7eabfe"
      },
      "fullName": "Suneel Pasupulati",
      "contactNumber": null,
      "firstName": "Suneel",
      "lastName": "Pasupulati"
  },
  "apiCategory": {
      "userCategories": {
          "content": [{
              "name": "Beverage Cans",
              "uuid": "756ac9be-ea7f-11ea-acc0-0a730e7eabfe",
              "categoryMappingUuid": "6b28f0b1631345309b658b3c0c719db2"
          }, {
              "name": "Aerosol Cans",
              "uuid": "756ac9c4-ea7f-11ea-acc0-0a730e7eabfe",
              "categoryMappingUuid": "e5042034ff1b4e2886012754c0b8581d"
          }],
          "pageable": {
              "sort": {
                  "unsorted": true,
                  "sorted": false,
                  "empty": true
              },
              "pageNumber": 0,
              "pageSize": 25,
              "offset": 0,
              "unpaged": false,
              "paged": true
          },
          "totalElements": 2,
          "last": true,
          "totalPages": 1,
          "first": true,
          "sort": {
              "unsorted": true,
              "sorted": false,
              "empty": true
          },
          "numberOfElements": 2,
          "size": 25,
          "number": 0,
          "empty": false
      },
      "message": "Categories found"
  },
  "apiSupplier": {
      "data": [{
          "id": 11,
          "requestUUID": "349f31aba6c64fe69fd0e5d217277145",
          "supplierName": "PEPSICO, INC.",
          "providerKey": {
              "DUNSNUMBER": "001287762",
              "ID": "SG-X-199001029D"
          },
          "userCompanyUUID": "c0a6b8fb-1292-4ffb-b327-a90638836dfb",
          "requestCount": null,
          "status": "ACTIVE",
          "lastUpdatedDate": "2021-01-30T01:00:12.000+0000",
          "supplierState": "New York",
          "supplierCountry": "USA",
          "requestedDate": "2020-09-20T14:28:39.000+0000",
          "categoryName": "Aluminum",
          "spend": "50000.0",
          "userSupplierMappingUuid": "76ac35c4184c462e8e186efc89004a91",
          "disruptionStatus": null,
          "riskStatus": "NOT_AVAILABLE",
          "ratingResponse": [{
              "rating-type": "DowJonesTotalAMECount",
              "value-text": null,
              "rating": "dj.totalAmeCount",
              "value-numeric": "92"
          }, {
              "rating-type": "Regulatory",
              "value-text": null,
              "rating": "dj.regulatory",
              "value-numeric": "20"
          }, {
              "rating-type": "Environmental",
              "value-text": null,
              "rating": "dj.environmental",
              "value-numeric": "57"
          }, {
              "rating-type": "Labor",
              "value-text": null,
              "rating": "dj.social",
              "value-numeric": "15"
          }, {
              "rating-type": "Regulatory",
              "value-text": null,
              "rating": "dj.sanctions",
              "value-numeric": "0"
          }, {
              "rating-type": "Financial",
              "value-text": null,
              "rating": "dnb.ser",
              "value-numeric": null
          }, {
              "rating-type": "Financial",
              "value-text": "NOT_AVAILABLE",
              "rating": "financial.risk",
              "value-numeric": null
          }],
          "categoryUUID": "756ac8f0-ea7f-11ea-acc0-0a730e7eabfe",
          "userSubscriptionDetialsId": 20
      }, {
          "id": 278,
          "requestUUID": "f982a27ad3d74203a0274f386f51d3b6",
          "supplierName": "CISCO SYSTEMS",
          "providerKey": null,
          "userCompanyUUID": "c0a6b8fb-1292-4ffb-b327-a90638836dfb",
          "requestCount": null,
          "status": "ACTIVE",
          "lastUpdatedDate": "2021-01-19T03:16:31.000+0000",
          "supplierState": null,
          "supplierCountry": null,
          "requestedDate": null,
          "categoryName": "Big Data Solutions",
          "spend": "123333.0",
          "userSupplierMappingUuid": "8bd72b4daf774a19b336f1644834a0b0",
          "disruptionStatus": null,
          "riskStatus": "LOW",
          "ratingResponse": [{
              "rating-type": "Financial",
              "value-text": null,
              "rating": "dnb.ser",
              "value-numeric": null
          }, {
              "rating-type": "Financial",
              "value-text": "NOT_AVAILABLE",
              "rating": "financial.risk",
              "value-numeric": null
          }, {
              "rating-type": "DowJonesTotalAMECount",
              "value-text": null,
              "rating": "dj.totalAmeCount",
              "value-numeric": "0"
          }, {
              "rating-type": "Regulatory",
              "value-text": null,
              "rating": "dj.regulatory",
              "value-numeric": "0"
          }, {
              "rating-type": "Environmental",
              "value-text": null,
              "rating": "dj.environmental",
              "value-numeric": "0"
          }, {
              "rating-type": "Labor",
              "value-text": null,
              "rating": "dj.social",
              "value-numeric": "0"
          }, {
              "rating-type": "Regulatory",
              "value-text": null,
              "rating": "dj.sanctions",
              "value-numeric": "0"
          }, {
              "rating-type": "DowJonesTotalAMECount",
              "value-text": null,
              "rating": "dj.totalAmeCount",
              "value-numeric": "0"
          }, {
              "rating-type": "Financial",
              "value-text": "LOW",
              "rating": "financial.risk",
              "value-numeric": null
          }, {
              "rating-type": "Financial",
              "value-text": "B",
              "rating": "creditSafe.commonRating",
              "value-numeric": null
          }, {
              "rating-type": "Financial",
              "value-text": null,
              "rating": "creditSafe.providerRating",
              "value-numeric": "73"
          }],
          "categoryUUID": "756ad43b-ea7f-11ea-acc0-0a730e7eabfe",
          "userSubscriptionDetialsId": 20
      }, {
          "id": 113,
          "requestUUID": "272164a4dd26471eadee69e236a1f99b",
          "supplierName": "CISCO SYSTEMS",
          "providerKey": null,
          "userCompanyUUID": "c0a6b8fb-1292-4ffb-b327-a90638836dfb",
          "requestCount": null,
          "status": "ACTIVE",
          "lastUpdatedDate": "2021-02-04T01:00:05.000+0000",
          "supplierState": null,
          "supplierCountry": null,
          "requestedDate": null,
          "categoryName": "Big Data Solutions",
          "spend": "123333.0",
          "userSupplierMappingUuid": "8bd72b4daf774a19b336f1644834a0b0",
          "disruptionStatus": null,
          "riskStatus": "LOW",
          "ratingResponse": [{
              "rating-type": "Financial",
              "value-text": null,
              "rating": "dnb.ser",
              "value-numeric": null
          }, {
              "rating-type": "Financial",
              "value-text": "NOT_AVAILABLE",
              "rating": "financial.risk",
              "value-numeric": null
          }, {
              "rating-type": "Financial",
              "value-text": "LOW",
              "rating": "financial.risk",
              "value-numeric": null
          }, {
              "rating-type": "Financial",
              "value-text": "B",
              "rating": "creditSafe.commonRating",
              "value-numeric": null
          }, {
              "rating-type": "Financial",
              "value-text": null,
              "rating": "creditSafe.providerRating",
              "value-numeric": "73"
          }, {
              "rating-type": "DowJonesTotalAMECount",
              "value-text": null,
              "rating": "dj.totalAmeCount",
              "value-numeric": "0"
          }, {
              "rating-type": "Regulatory",
              "value-text": null,
              "rating": "dj.regulatory",
              "value-numeric": "0"
          }, {
              "rating-type": "Environmental",
              "value-text": null,
              "rating": "dj.environmental",
              "value-numeric": "0"
          }, {
              "rating-type": "Labor",
              "value-text": null,
              "rating": "dj.social",
              "value-numeric": "0"
          }, {
              "rating-type": "Regulatory",
              "value-text": null,
              "rating": "dj.sanctions",
              "value-numeric": "0"
          }, {
              "rating-type": "DowJonesTotalAMECount",
              "value-text": null,
              "rating": "dj.totalAmeCount",
              "value-numeric": "0"
          }],
          "categoryUUID": "756ad43b-ea7f-11ea-acc0-0a730e7eabfe",
          "userSubscriptionDetialsId": 20
      }, {
          "id": 307,
          "requestUUID": "d961ffb8d794474ead47a89f776ba633",
          "supplierName": "CISCO SYSTEMS",
          "providerKey": null,
          "userCompanyUUID": "c0a6b8fb-1292-4ffb-b327-a90638836dfb",
          "requestCount": null,
          "status": "ACTIVE",
          "lastUpdatedDate": "2021-02-05T01:54:05.000+0000",
          "supplierState": null,
          "supplierCountry": null,
          "requestedDate": null,
          "categoryName": "Big Data Solutions",
          "spend": "123333.0",
          "userSupplierMappingUuid": "8bd72b4daf774a19b336f1644834a0b0",
          "disruptionStatus": null,
          "riskStatus": "NOT_AVAILABLE",
          "ratingResponse": [],
          "categoryUUID": "756ad43b-ea7f-11ea-acc0-0a730e7eabfe",
          "userSubscriptionDetialsId": 20
      }, {
          "id": 308,
          "requestUUID": "e52f0e4526744fdd8102e32432aff9ae",
          "supplierName": "CISCO SYSTEMS",
          "providerKey": null,
          "userCompanyUUID": "c0a6b8fb-1292-4ffb-b327-a90638836dfb",
          "requestCount": null,
          "status": "ACTIVE",
          "lastUpdatedDate": "2021-02-05T03:31:27.000+0000",
          "supplierState": null,
          "supplierCountry": null,
          "requestedDate": null,
          "categoryName": "Big Data Solutions",
          "spend": "123333.0",
          "userSupplierMappingUuid": "8bd72b4daf774a19b336f1644834a0b0",
          "disruptionStatus": null,
          "riskStatus": "LOW",
          "ratingResponse": [],
          "categoryUUID": "756ad43b-ea7f-11ea-acc0-0a730e7eabfe",
          "userSubscriptionDetialsId": 20
      }],
      "totalCounts": 5
  },
  "dashboardAPI": {
      "totalSuppliers": 5,
      "totalSpend": 385333,
      "totalSanctionAppearances": 0,
      "totalAdverseMediaAppearances": 828,
      "totalsupplierDisruptions": null
  },
  "dow_SER": {
      "statusCode": 200,
      "body": {
          "DOW_JONES_ADVANCE": {
              "SUPPLIER_KEY": "NOT AVAILABLE",
              "DOWJones": [{
                  "issueName": "Regulatory",
                  "allegations": {
                      "Corruption Issues": [],
                      "Regulatory Issues": [],
                      "Fraud Issues": [],
                      "Sanctions": []
                  },
                  "totalCount": 0
              }, {
                  "issueName": "Environment/Production",
                  "allegations": {
                      "Product/Service Issues": [],
                      "Production/Supply Chain Issues": [],
                      "Environmental Issues": []
                  },
                  "totalCount": 0
              }, {
                  "issueName": "Social/Labour",
                  "allegations": {
                      "Workforce Disputes": [],
                      "Discrimination/Workforce Rights Issues": [],
                      "Workforce Health/Safety Issues": [],
                      "Human Rights Issues": []
                  },
                  "totalCount": 0
              }],
              "responseDate": "2021-02-01T01:00:05.000+0000"
          },
          "SER": {
              "SER": {
                  "riskScore": "6"
              },
              "responseDate": "2021-02-01T01:55:44.000+0000"
          },
          "REQUEST_DETAILS": {
              "STATUS": "ACTIVE",
              "SUBSCRIPTION_END_DATE": "2021-11-19T12:11:44.000+0000",
              "SUPPLIER_DETAILS": {
                  "employees": null,
                  "headQuaters": null,
                  "phoneNumber": null,
                  "duns_number": "113206967",
                  "sales": null,
                  "established": null,
                  "summary": null,
                  "chief_executive_officer_name": "",
                  "cfo": null,
                  "vicePresident": null,
                  "website": null,
                  "facebook": null,
                  "linkedIn": null,
                  "sic_1_description": "Investors, nec",
                  "sic_2_description": "",
                  "sic_3_description": "",
                  "sic_4_description": "",
                  "sic_5_description": "",
                  "sic_6_description": "",
                  "naics_1_code": "523910",
                  "mailing_city_name": "Doral",
                  "status_code": null,
                  "us_1987_sic_5": null,
                  "naics_1_code_description": "Miscellaneous Intermediation",
                  "naics_6_code": "",
                  "physical_street_address": null,
                  "mailing_state_province_abbreviat": "FL",
                  "version": null,
                  "national_identification_number": "",
                  "mailing_state_province_name": "Florida",
                  "naics_4_code_description": "",
                  "physical_city_name": null,
                  "filler_dup": "",
                  "dias_code": "",
                  "naics_3_code_description": "",
                  "physical_country_name": null,
                  "dnb_mailing_continent_code": "6",
                  "mailing_address": "4690 NW 113th Pl",
                  "subsidiary_indicator": null,
                  "global_ultimate": "113206967",
                  "timestamp": null,
                  "dnb_mailing_country_code": "805",
                  "hierarchy_code": "00",
                  "global_ultimate_business_name": "",
                  "business_name": "Occidental Group Investments, LLC",
                  "dnb_mailing_state_province_code": null,
                  "us_1987_sic_4": null,
                  "mailing_postal_code": "331784344",
                  "naics_3_code": "",
                  "national_identification_type_cod": "",
                  "mailing_country_name": "USA",
                  "us_1987_sic_2": null,
                  "naics_4_code": "",
                  "transaction_indicator": null,
                  "dnb_mailing_city_code": "002170",
                  "us_1987_sic_3": null,
                  "filler": "",
                  "naics_2_code_description": "",
                  "naics_5_code_description": "",
                  "naics_5_code": "",
                  "physical_state_province_name": null,
                  "us_1987_sic_6": null,
                  "chief_executive_officer_title": null,
                  "naics_6_code_description": "",
                  "naics_2_code": "",
                  "extended_gu_duns_number": null,
                  "extended_gu_business_name": null,
                  "us_1987_sic_1": "67990000"
              },
              "LATEST_RESPONSE_DATE": "2021-02-01T01:55:44.000+0000",
              "SUPPLIER_NAME": "OCCIDENTAL GROUP INVESTMENTS, LLC"
          },
          "DOW_JONES_SANCTIONS": {
              "SUPPLIER_KEY": "NOT AVAILABLE",
              "DOWJones": [{
                  "issueName": "Sanctions Control and Ownership",
                  "allegations": {
                      "Category": [],
                      "Identification": [],
                      "Source": []
                  },
                  "totalCount": 0
              }],
              "responseDate": "2021-02-01T01:00:05.000+0000"
          }

      }
  }
}
console.log(apiDataCollection)
console.log(apiDataCollection.apiAccount.firstName)

const nlpLUISres = {
  "query": "suppliers risky",
  "prediction": {
    "topIntent": "SupplierRiskIntent",
    "intents": {
      "SupplierRiskIntent": {
        "score": 0.9315069
      },
      "RiskIntent": {
        "score": 0.002147552
      },
      "SupplierDifferentiator": {
        "score": 0.00000277550248
      },
      "None": {
        "score": 7.2e-9
      },
      "AdverseMediaIntent": {
        "score": 8.125e-10
      },
      "GeoPoliticIntent": {
        "score": 4.21428559e-10
      },
      "FinancialRiskIntent": {
        "score": 3.29411776e-10
      }
    },
    "entities": {
      "FinKeyWordEntity": [
        "suppliers"
      ],
      "SupplierKeyWordEntity": [
        "suppliers"
      ],
      "SupplierNameEntity": [
        [
          "tesla"
        ]
      ],
      "RiskEntity": [
        "risky"
      ],
      "RiskKeyWordEntity": [
        "risky"
      ],
      "$instance": {
        "FinKeyWordEntity": [
          {
            "type": "FinKeyWordEntity",
            "text": "suppliers",
            "startIndex": 0,
            "length": 9,
            "score": 0.5902724,
            "modelTypeId": 1,
            "modelType": "Entity Extractor",
            "recognitionSources": [
              "model"
            ]
          }
        ],
        "SupplierKeyWordEntity": [
          {
            "type": "SupplierKeyWordEntity",
            "text": "suppliers",
            "startIndex": 0,
            "length": 9,
            "score": 0.8805536,
            "modelTypeId": 1,
            "modelType": "Entity Extractor",
            "recognitionSources": [
              "model"
            ]
          }
        ],
        "SupplierNameEntity": [
          {
            "type": "SupplierNameEntity",
            "text": "suppliers",
            "startIndex": 0,
            "length": 9,
            "modelTypeId": 5,
            "modelType": "List Entity Extractor",
            "recognitionSources": [
              "model"
            ]
          }
        ],
        "RiskEntity": [
          {
            "type": "RiskEntity",
            "text": "risky",
            "startIndex": 10,
            "length": 5,
            "score": 0.896765947,
            "modelTypeId": 1,
            "modelType": "Entity Extractor",
            "recognitionSources": [
              "model"
            ]
          }
        ],
        "RiskKeyWordEntity": [
          {
            "type": "RiskKeyWordEntity",
            "text": "risky",
            "startIndex": 10,
            "length": 5,
            "score": 0.5802253,
            "modelTypeId": 1,
            "modelType": "Entity Extractor",
            "recognitionSources": [
              "model"
            ]
          }
        ]
      }
    },
    "sentiment": {
      "label": "negative",
      "score": 0.0970206559
    }
  }
}
console.log(nlpLUISres)
let ent = nlpLUISres.prediction.entities;

let tempArray = Object.keys(ent).map((item, key) => {
  return {
      "value": item,
      "label": ent[item] // etc, a structure what you want
  };
})

let test = tempArray.map(a => a.value);
console.log("get ML entity >>> ", test)
console.log("get supplierName >>> ",  nlpLUISres.prediction.entities['SupplierNameEntity'][0][0])


let dolInstance = nlpLUISres.prediction.entities['$instance'];
let entArray = [];

for (const [key, value] of Object.entries(dolInstance)) {
  // console.log(`${key}: ${value}`);
  let type_ = value[0].type;
  let score_ = value[0].score;
  let keyTextPhrase = value[0].text;
  let val = `type: ${type_}, score: ${score_}, keyText: ${keyTextPhrase} `;

  entArray.push(val);
}
console.log(entArray)

// [{label: "`a`",value: "`a`"},{label: "`a`",value: "`a`"}]

let tempArray3 = Object.keys(apiDataCollection['apiSupplier']['data']).map((item, key) => {
  return {
      "value": apiDataCollection['apiSupplier']['data'][key].requestUUID,
      "label": apiDataCollection['apiSupplier']['data'][key].supplierName // etc, a structure what you want
  };
})
console.log(tempArray3)

// let entities = await this.mergeFields['apiToLuis.prediction.entities'].get();
// let supList = await this.mergeFields['restructureSm'].get();
// let supName = await this.mergeFields['getSupplierName'].get();

// let asd = [];

// supList.forEach(item => {
//   console.log(item)
//   if(item.label.indexOf(supName) > -1){
//     console.log(item.value)
//     return asd.push(item.value)
//   }
// })

// console.log(asd.toString())
// return asd.toString()

let SupMonitoringDataPoints = {
  "SER": {
    "SER": null,
    "responseDate": "2020-10-07T14:35:21.000+0000"
  },
  "DOW_JONES_ADVANCE": {
    "SUPPLIER_KEY": "NOT AVAILABLE",
    "DOWJones": [
      {
        "issueName": "Regulatory",
        "allegations": {
          "Corruption Issues": [],
          "Regulatory Issues": [],
          "Fraud Issues": [],
          "Sanctions": []
        },
        "totalCount": 0
      },
      {
        "issueName": "Environment/Production",
        "allegations": {
          "Product/Service Issues": [],
          "Production/Supply Chain Issues": [],
          "Environmental Issues": []
        },
        "totalCount": 0
      },
      {
        "issueName": "Social/Labour",
        "allegations": {
          "Workforce Disputes": [],
          "Discrimination/Workforce Rights Issues": [],
          "Workforce Health/Safety Issues": [],
          "Human Rights Issues": []
        },
        "totalCount": 0
      }
    ],
    "responseDate": "2020-12-06T01:00:02.000+0000"
  },
  "CREDIT_SAFE_RATING": {
    "CreditSafe": {
      "providerValue": "73",
      "commonValue": "B",
      "providerDescription": "Business dealings permissible with moderate risk of default.",
      "dataAvailable": true
    },
    "responseDate": "2020-10-08T07:57:42.000+0000"
  },
  "REQUEST_DETAILS": {
    "STATUS": "ACTIVE",
    "SUBSCRIPTION_END_DATE": "2021-09-19T00:50:49.000+0000",
    "SUPPLIER_DETAILS": {
      "employees": null,
      "headQuaters": null,
      "phoneNumber": null,
      "duns_number": null,
      "sales": null,
      "established": null,
      "summary": null,
      "chief_executive_officer_name": null,
      "cfo": null,
      "vicePresident": null,
      "website": null,
      "facebook": null,
      "linkedIn": null,
      "sic_1_description": null,
      "sic_2_description": null,
      "sic_3_description": null,
      "sic_4_description": null,
      "sic_5_description": null,
      "sic_6_description": null,
      "naics_1_code": null,
      "mailing_city_name": null,
      "status_code": null,
      "us_1987_sic_5": null,
      "naics_1_code_description": null,
      "naics_6_code": null,
      "physical_street_address": null,
      "mailing_state_province_abbreviat": null,
      "version": null,
      "national_identification_number": null,
      "mailing_state_province_name": null,
      "naics_4_code_description": null,
      "physical_city_name": null,
      "filler_dup": null,
      "dias_code": null,
      "naics_3_code_description": null,
      "physical_country_name": null,
      "dnb_mailing_continent_code": null,
      "mailing_address": null,
      "subsidiary_indicator": null,
      "global_ultimate": null,
      "timestamp": null,
      "dnb_mailing_country_code": null,
      "hierarchy_code": null,
      "global_ultimate_business_name": null,
      "business_name": null,
      "dnb_mailing_state_province_code": null,
      "us_1987_sic_4": null,
      "mailing_postal_code": null,
      "naics_3_code": null,
      "national_identification_type_cod": null,
      "mailing_country_name": null,
      "us_1987_sic_2": null,
      "naics_4_code": null,
      "transaction_indicator": null,
      "dnb_mailing_city_code": null,
      "us_1987_sic_3": null,
      "filler": null,
      "naics_2_code_description": null,
      "naics_5_code_description": null,
      "naics_5_code": null,
      "physical_state_province_name": null,
      "us_1987_sic_6": null,
      "chief_executive_officer_title": null,
      "naics_6_code_description": null,
      "naics_2_code": null,
      "extended_gu_duns_number": null,
      "extended_gu_business_name": null,
      "us_1987_sic_1": null
    },
    "LATEST_RESPONSE_DATE": "2020-12-06T01:00:02.000+0000",
    "SUPPLIER_NAME": "CISCO SYSTEMS"
  },
  "DOW_JONES_SANCTIONS": {
    "SUPPLIER_KEY": "NOT AVAILABLE",
    "DOWJones": [
      {
        "issueName": "Sanctions Control and Ownership",
        "allegations": {
          "Category": [],
          "Identification": [],
          "Source": []
        },
        "totalCount": 0
      }
    ],
    "responseDate": "2020-12-06T01:00:02.000+0000"
  }
};

console.log("get AME DATA >>>>> ");
console.log(SupMonitoringDataPoints.DOW_JONES_ADVANCE.DOWJones)

console.log(SupMonitoringDataPoints.DOW_JONES_ADVANCE.DOWJones[0].totalCount)

console.log(SupMonitoringDataPoints.DOW_JONES_ADVANCE.DOWJones[0].issueName)
console.log(SupMonitoringDataPoints.DOW_JONES_ADVANCE.DOWJones[1].issueName)
console.log(SupMonitoringDataPoints.DOW_JONES_ADVANCE.DOWJones[2].issueName)

