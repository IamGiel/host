const http = new XMLHttpRequest()

http.open("GET", "https://sdkapi.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/component-data");
http.send()

http.onload = () => {
    var someObj = JSON.parse(http.responseText)
    console.log(http.responseText)
    console.log(someObj);
    console.log(someObj.data);
    console.log(typeof (http.responseText))
    console.log(http.responseText['data'])

    // userName: null,
    // jobTitleName: null,
    // companyName: null,
    // totalSanctionAppearances: null,
    // totalSpend: null,
    // totalSuppliers: null,
    // totalsupplierDisruptions: null,
    // totalAdverseMediaAppearances: null
    // testData: 'test data',
    // apiURL: 'https://sdkapi.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/component-data'

    this.userName = `This is ${someObj.data.apiAccount.fullName}'s data`;
    this.jobTitleName = someObj.data.apiAccount.jobTitle.name;
    this.companyName = someObj.data.apiAccount.company.name;

    this.totalSanctionAppearances = someObj.data.dashboardAPI.totalSanctionAppearances;
    this.totalSpend = someObj.data.dashboardAPI.totalSpend;
    this.totalSuppliers = someObj.data.dashboardAPI.totalSuppliers;
    this.totalsupplierDisruptions = someObj.data.dashboardAPI.totalsupplierDisruptions;
    this.totalAdverseMediaAppearances = someObj.data.dashboardAPI.totalAdverseMediaAppearances;

    console.log(someObj.data.apiCategory.userCategories.content);

    someObj.data.apiCategory.userCategories.content.forEach(element => {
        console.log(element.name)
        this.categories.push(element.name);
    });

    
}

// someObj = {
//     "data": {
//         "helpfulLinks": {
//             "pptLink": "https://docs.google.com/presentation/d/1Q7678wI9PQz6CzPS0L6wXyu9cuKYXPHHRKM-ZbSFP0A/edit?usp=sharing",
//             "helpUrl2": "undefined",
//             "helpUrl1": "undefined"
//         },
//         "TAT": "",
//         "apiSupplier": {
//             "data": [{
//                 "supplierName": "OCCIDENTAL GROUP INVESTMENTS, LLC",
//                 "ratingResponse": [{
//                     "rating-type": "Financial",
//                     "value-text": null,
//                     "rating": "dnb.ser",
//                     "value-numeric": null
//                 }, {
//                     "rating-type": "Financial",
//                     "value-text": "NOT_AVAILABLE",
//                     "rating": "financial.risk",
//                     "value-numeric": null
//                 }],
//                 "requestCount": null,
//                 "userSupplierMappingUuid": "55ca5f285a874f348e9a559638e9841f",
//                 "supplierCountry": "USA",
//                 "requestUUID": "483cb35f2fec45f19d536a719c8552d0",
//                 "userSubscriptionDetialsId": 125,
//                 "disruptionStatus": null,
//                 "categoryName": null,
//                 "lastUpdatedDate": "2020-11-20T20:05:09.000+0000",
//                 "spend": null,
//                 "supplierState": "Delaware",
//                 "id": 180,
//                 "requestedDate": "2020-11-20T20:04:21.000+0000",
//                 "riskStatus": "NOT_AVAILABLE",
//                 "providerKey": {
//                     "DUNSNUMBER": "113206967"
//                 },
//                 "categoryUUID": null,
//                 "userCompanyUUID": "2fadaf0b-be08-4468-bace-cc9c3df3325e",
//                 "status": "ACTIVE"
//             }],
//             "totalCounts": 1
//         },
//         "apiAccount": {
//             "country": {
//                 "name": "United States",
//                 "iso2Code": "null",
//                 "uuid": "530e0344-ea7f-11ea-acc0-0a730e7eabfe"
//             },
//             "firstName": "Gary",
//             "lastName": "Turner",
//             "jobTitle": {
//                 "name": "Category Analyst / Consultant",
//                 "uuid": "602c179f-ea7d-11ea-acc0-0a730e7eabfe"
//             },
//             "contactNumber": "null",
//             "fullName": "Gary Turner",
//             "industry": "null",
//             "company": {
//                 "name": "P&G",
//                 "uuid": "2fadaf0b-be08-4468-bace-cc9c3df3325e"
//             },
//             "userOnboardingCompleted": "true",
//             "email": "sw.test@beroe-inc.com"
//         },
//         "apiCategory": {
//             "userCategories": {
//                 "number": 0,
//                 "last": true,
//                 "numberOfElements": 3,
//                 "size": 25,
//                 "totalPages": 1,
//                 "pageable": {
//                     "paged": true,
//                     "pageNumber": 0,
//                     "offset": 0,
//                     "pageSize": 25,
//                     "unpaged": false,
//                     "sort": {
//                         "unsorted": true,
//                         "sorted": false,
//                         "empty": true
//                     }
//                 },
//                 "sort": {
//                     "unsorted": true,
//                     "sorted": false,
//                     "empty": true
//                 },
//                 "content": [{
//                     "categoryMappingUuid": "02799128f8d94a71a97ded3d5195ace5",
//                     "name": "Caustic Soda",
//                     "uuid": "756acabd-ea7f-11ea-acc0-0a730e7eabfe"
//                 }, {
//                     "categoryMappingUuid": "8db989d82211423e82609be2d569569e",
//                     "name": "Soda Ash",
//                     "uuid": "756acaab-ea7f-11ea-acc0-0a730e7eabfe"
//                 }, {
//                     "categoryMappingUuid": "290551d0bb4e4514a638301575aba64a",
//                     "name": "Sodium Bicarbonate (NaHCO3)",
//                     "uuid": "756acb73-ea7f-11ea-acc0-0a730e7eabfe"
//                 }],
//                 "first": true,
//                 "totalElements": 3,
//                 "empty": false
//             },
//             "message": "Categories found"
//         },
//         "dashboardAPI": {
//             "totalSanctionAppearances": 0,
//             "totalSpend": 20000000,
//             "totalSuppliers": 2,
//             "totalsupplierDisruptions": null,
//             "totalAdverseMediaAppearances": 0
//         }
//     },
//     "id": "123"
// }