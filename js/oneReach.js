fetch('https://sdkapi.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/component-data', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37'
    },
    // body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
      var riskScore = data.items[0]._source['data'].dow_SER.SER.SER['riskScore'];
      var supplierName = data.items[0]._source['data'].apiSupplier.data[0].supplierName;
      var catArr = data.items[0]._source['data'].apiCategory.userCategories.content;

      var dataSetArr = [];
      var arr0 = [];
      var arr1 = [];
      var arr2 = [];


      catArr.forEach((element, index) => {
        if(index === 0){
          arr0.push(element.name)
          arr0.push(1)

        } else if(index === 1){
          arr1.push(element.name)
          arr1.push(1)

        } else if(index === 2){
          arr2.push(element.name)
          arr2.push(1)

        }
        
    });
    if(arr0.length > 0 && arr1.length > 0 && arr2.length > 0)
      dataSetArr.push(arr0);
      dataSetArr.push(arr1);
      dataSetArr.push(arr2);
  });