
// {
//   "luisGeo": {
//     "location_type": "countryRegion",
//     "location": "usa"
//   },
//   "jsGeo": {}
// }


// {
//   "luisGeo": {
//     "location_type": "countryRegion",
//     "location": "usa"
//   },
//   "jsGeo": {
//     "location_": "usa",
//     "location_type": "countryRegion"
//   }
// }


// let test_res = {
//   "geography": {
//     "entity": "geographyV2",
//     "value": [{
//       "value": "mexico",
//       "type": "countryRegion"
//     }],
//     "parsedValue": [{
//       "value": "mexico",
//       "type": "countryRegion"
//     }],
//     "geo": true
//   },
//   "mentions_diversity": "true",
//   "keyname": "shoe",
//   "total": "12",
//   "pluralize": "results",
//   "diversityEntity": "women owned"
// }


let data = {};



// let mentions_diversity = await this.mergeFields['storeNluEntities'].get({
//   path: 'mentionsDiversity'
// });
// let keyName = await this.mergeFields['storeNluEntities'].get({
//   path: 'keyNameEntity'
// });
// let hasSubfilter = await this.mergeFields['selectSubfilter'].get({path:"myData"})
// let totalResponse = parseInt(await this.mergeFields['apiShortlistResponse'].get({path: 'total'})).toLocaleString();
// let diversityEntity = await this.mergeFields['storeNluEntities'].get({path: 'diversityEntity'});
// let luisGeo = await this.mergeFields['storeNluEntities'].get({path: 'geographyV2.location'})

function valid(input) {
  switch (input) {
    case undefined:
      return false;
      break;

    case "undefined":
      return false;
      break;

    case null:
      return false;
      break;

    default:
      return true;
  }
}

function pluralize(word, stringNum) {
  if (parseInt(stringNum) > 1) {
    switch (word) {
      case "is":
        return "are";
        break;
      case word:
        return word + "s"
        break;
      default:
        return;
    }
  }

  if (parseInt(stringNum) <= 1) {
    switch (word) {
      case "are":
        return "is";
        break;
      default:
        return word;
    }
  }
}



// // TEST 

data.mentions_diversity = true;
data.keyname = "cans";
data.location_ = "usa";
data.total = "4";
data.pluralize = pluralize("result", data.total);
data.diversityEntity = null;

// // end 

let message_obj = {
  "withLocWithDiversity":`I found ${data.total} ${pluralize("result", data.total)} for "${data.diversityEntity}" and "${data.keyname}" in ${data.location_}. Here ${pluralize("is",data.total)} the top ${pluralize("result",data.total)}: `,
  "withLocWithoutDiversity":`I found ${data.total} ${pluralize("result", data.total)} for "${data.keyname}" in ${data.location_}. Here ${pluralize("is",data.total)} the top ${pluralize("result",data.total)}: `,
  "withoutLocWithDiversity":`I found ${data.total} ${pluralize("result", data.total)} for "${data.diversityEntity}" and "${data.keyname}". Here ${pluralize("is",data.total)} the top ${pluralize("result",data.total)}: `,
  "withoutLocWithoutDiversity":`I found ${data.total} ${pluralize("result", data.total)} for "${data.keyname}". Here ${pluralize("is",data.total)} the top ${pluralize("result",data.total)}: `,

}

function resolveMessage(loc, diversity) {

  console.log(loc)
  console.log(diversity)
  let message;
  if(loc && diversity){
    message = message_obj.withLocWithDiversity;
  }
  if(loc && !diversity){
    message = message_obj.withLocWithoutDiversity;
  }
  if(!loc && diversity){
    message = message_obj.withoutLocWithDiversity;
  }
  if(!loc && !diversity){
    message = message_obj.withoutLocWithoutDiversity;
  }
  return message;
}

console.log(resolveMessage(data.location_, data.diversityEntity))

return resolveMessage(data.location_, data.diversityEntity);



