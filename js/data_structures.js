// get NLU data
// let paramsObj = await this.mergeFields['apiShortlist'].get({
//     path: 'params'
//   });
  let paramsObj = {
    "flowId": "api shortlist",
    "isSync": false,
    "qualification": "state",
    "qualificationSubFilter": "India::Karnataka::Maharashtra",
    "location": "India",
    "diversity": "",
    "supplierName": "",
    "narrowSearchExit": "true",
    "eventId": "sszQUpMpo4WHMRPMizygV1"
  }
  let params = {};
  let qual = `{${paramsObj.qualification} : ${paramsObj.qualification}}`;
  
  function getLocation() {
    if (paramsObj.location != 'null' ) {
      params.location = [{
        "zipCode": "",
        "country": `${paramsObj.location}`,
        "state": "",
        "city": ""
      }]
      if(paramsObj.qualification == 'state'){
        params.location = [{
            "zipCode": "",
            "country": `${paramsObj.location}`,
            "state": `${paramsObj.qualificationSubFilter.replace(/^[^_]*::/,'')}`,
            "city": ""
          }]
      }
      if(paramsObj.qualification == 'city'){
        params.location = [{
            "zipCode": "",
            "country": `${paramsObj.location}`,
            "state": "",
            "city": `${paramsObj.qualificationSubFilter.replace(/^[^_]*::/,'')}`
          }]
      }
    }
    else {
      params.location = [{
        "zipCode": "",
        "country": "",
        "state": "",
        "city": ""
      }];
    }
  }
  
  // {
  //   "flowId": "api shortlist",
  //   "isSync": false,
  //   "qualification": "null",
  //   "location": "null",
  //   "diversity": "",
  //   "narrowSearchExit": "",
  //   "subfilters": "",
  //   "SupplierOrCategoryName": "ball Corp",
  //   "eventId": "5NFU887TK8dT8UYRw97fTZ"
  // }
  
  function getQual() {
    params.qualification = [];
   if (paramsObj.qualification !== 'city' && paramsObj.qualification !== 'state') {
     let key = paramsObj.qualification;
     let val = paramsObj.qualificationSubFilter
     if (key !== null) {
       let parameter = {};
       parameter[key] = val;
       console.log(parameter)
       params.qualification.push(parameter)
     } else {
       params.qualification = [];
     }
   } else {
       params.qualification = [];
     }
 }
  function getCatOrSupName() {
    if ("SupplierOrCategoryName" in paramsObj && paramsObj.SupplierOrCategoryName !== 'undefined') {
      params.SupplierOrCategoryName = `${paramsObj.SupplierOrCategoryName}`
    } else {
      params.SupplierOrCategoryName = null;;
    }
  }
  function getSupplierName() {
    if ("supplierName" in paramsObj && paramsObj.supplierName !== '') {
      params.supplierName = `${paramsObj.supplierName}`
    } else {
      params.supplierName = null;;
    }
  }
  
  getLocation();
  getQual();
  // getSupplierName();
  getCatOrSupName();
  
//   return params;
console.log(params)

let test_string = "India::Karnataka::Maharashtra";

console.log(test_string.replace(/::/g,'/'))

// =================================================

const fib = (n) => {
    if(n <= 2) return 1; 
    let test =  fib(n-1) + fib(n-2);
    console.log(test)
    return fib(n-1) + fib(n-2);
   
}

console.log(fib(7)) 