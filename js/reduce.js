const rows = [
    ["a", "b", "c"],
    ["apple", "orange", "banana"],
    ["kiwi", "tomato", "avocado"],
    ["beans", "asparagus", "spinach"],
];

const keys = rows[0];

const result = rows.slice(1).map((values) => {
    // console.log("VALUES: ", values);
    // console.log("rows slice(1): >>>> ", rows.slice(1));
    values.reduce((obj, value, index) => {
        // console.log(
        //     "obj,val,index: >>>>>> ",
        //     obj,
        //     value,
        //     index,
        //     "keys: ",
        //     keys
        // );
        obj[keys[index]] = value;
        return obj;
    }, {});
});

// console.log(result);

let data = {
    result: {
        type: "TEXT",
        contextId: "tWBFOF4ZAauP2KANw5TV5",
        context: "Supplier",
        topAnswers: [
            {
                type: "TEXT",
                contextId: "tWBFOF4ZAauP2KANw5TV5",
                context: "Supplier",
                confirmationPhrase: null,
                responseId: "YjpNcgWbNrw_7hvSIdTVe",
                confidence: 98.15,
                response: "skillSupplierLookUp",
                stringResponse: "skillSupplierLookUp",
                parsedResponse: "skillSupplierLookUp",
            },
            {
                type: "TEXT",
                contextId: "WYgZW9zyEmHYCuDS8L09Q",
                context: "PriceCostInfo",
                responseId: "cKwt1cbdjAahj~QnfCGwy",
                confidence: 1.13,
                response: "skillPriceCost",
                stringResponse: "skillPriceCost",
                parsedResponse: "skillPriceCost",
            },
            {
                type: "TEXT",
                contextId: "tWBFOF4ZAauP2KANw5TV5",
                context: "Supplier",
                responseId: "3Ivb8rm0Nml1V5Pbwia2Z",
                confidence: 1,
                response: "skillSupplierRisk",
                stringResponse: "skillSupplierRisk",
                parsedResponse: "skillSupplierRisk",
            },
            {
                type: "TEXT",
                contextId: "bvl~0puJ8GEJmFz_2qP_7",
                context: "SupplierDetails",
                responseId: "N5MGvhs2HJfAIZKF1wj0S",
                confidence: 0,
                response: "skillSupplierDetail",
                stringResponse: "skillSupplierDetail",
                parsedResponse: "skillSupplierDetail",
            },
            {
                type: "TEXT",
                contextId: "Hnze36Dk2wHKtCOtQLF6y",
                context: "NoneIntent",
                responseId: "OOokFFg3SLNxvnqXLp2H6",
                confidence: 0,
                response: "skillNone",
                stringResponse: "skillNone",
                parsedResponse: "skillNone",
            },
        ],
        entities: [
            {
                parsedValue: "find",
                value: "find",
                entity: "LookUpEntity",
                detailedType: "LookUpEntity",
                startPos: 0,
                endPos: 4,
                entityName: "LookUpEntity",
                confidence: 98.14375600000001,
            },
            {
                parsedValue: "find beverage can suppliers",
                value: "find beverage can suppliers",
                entity: "KeyNameEntity",
                detailedType: "KeyNameEntity",
                startPos: 0,
                endPos: 27,
                entityName: "KeyNameEntity",
                confidence: 100,
            },
            {
                parsedValue: "suppliers",
                value: "suppliers",
                entity: "SupplierKeyWord",
                detailedType: "SupplierKeyWord",
                startPos: 18,
                endPos: 27,
                entityName: "SupplierKeyWord",
                confidence: 92.648387,
            },
            {
                parsedValue: "Germany",
                value: "Germany",
                entity: "geographyV2",
                detailedType: "countryRegion",
                startPos: 31,
                endPos: 38,
                entityName: "geographyV2",
                confidence: 100,
            },
            {
                parsedValue: [
                    {
                        timex: "2021-06",
                        resolution: [
                            {
                                start: "2021-06-01",
                                end: "2021-07-01",
                            },
                        ],
                    },
                ],
                value: "June 2021",
                entity: "datetimeV2",
                detailedType: "daterange",
                startPos: 39,
                endPos: 48,
                entityName: "datetimeV2",
                confidence: 100,
            },
            {
                parsedValue: 2021,
                value: "2021",
                entity: "number",
                detailedType: "number",
                startPos: 44,
                endPos: 48,
                entityName: "number",
                confidence: 100,
            },
        ],
        question: "find beverage can suppliers in Germany June 2021",
        phrase: "find beverage can suppliers in Germany June 2021",
        response: "skillSupplierLookUp",
        stringResponse: "skillSupplierLookUp",
        responseId: "YjpNcgWbNrw_7hvSIdTVe",
        parsedResponse: "skillSupplierLookUp",
        contextName: "Supplier",
        contextQueryId: "d7c1b8d6-a051-4ca2-8a24-2eeea566b0a8",
        confidence: 98.15,
        topResponses: [
            {
                type: "TEXT",
                contextId: "tWBFOF4ZAauP2KANw5TV5",
                context: "Supplier",
                confirmationPhrase: null,
                responseId: "YjpNcgWbNrw_7hvSIdTVe",
                confidence: 98.15,
                response: "skillSupplierLookUp",
                stringResponse: "skillSupplierLookUp",
                parsedResponse: "skillSupplierLookUp",
            },
            {
                type: "TEXT",
                contextId: "WYgZW9zyEmHYCuDS8L09Q",
                context: "PriceCostInfo",
                responseId: "cKwt1cbdjAahj~QnfCGwy",
                confidence: 1.13,
                response: "skillPriceCost",
                stringResponse: "skillPriceCost",
                parsedResponse: "skillPriceCost",
            },
            {
                type: "TEXT",
                contextId: "tWBFOF4ZAauP2KANw5TV5",
                context: "Supplier",
                responseId: "3Ivb8rm0Nml1V5Pbwia2Z",
                confidence: 1,
                response: "skillSupplierRisk",
                stringResponse: "skillSupplierRisk",
                parsedResponse: "skillSupplierRisk",
            },
            {
                type: "TEXT",
                contextId: "bvl~0puJ8GEJmFz_2qP_7",
                context: "SupplierDetails",
                responseId: "N5MGvhs2HJfAIZKF1wj0S",
                confidence: 0,
                response: "skillSupplierDetail",
                stringResponse: "skillSupplierDetail",
                parsedResponse: "skillSupplierDetail",
            },
            {
                type: "TEXT",
                contextId: "Hnze36Dk2wHKtCOtQLF6y",
                context: "NoneIntent",
                responseId: "OOokFFg3SLNxvnqXLp2H6",
                confidence: 0,
                response: "skillNone",
                stringResponse: "skillNone",
                parsedResponse: "skillNone",
            },
        ],
    },
};

console.log(data);

// let somearr = ["apple", "ball", "cat"];
// let res = {};
// somearr.reduce((obj, val, index) => {
//     console.log("obj: ", obj);
//     console.log("val: ", val);
//     console.log("index: ", index);
//     console.log("===========");
//     res[somearr[index]] = val + " test";
//     console.log(res);
// }, {});

// let data_entity = {};
// nlpdata.entities.forEach((key) => {
//     console.log(key.entity);
//     if (key.entity == "geographyV2") {
//         data_entity.geographyV2 = {
//             entity: key.entity,
//             value: key.value,
//             parsedValue: key.value,
//             geo: true,
//             geo_type: val.type,
//         };
//     }
//     if (key.entity == "Unique_NonMBB_Entity") {
//         data_entity.Unique_NonMBB_Entity = {
//             entity: key.entity,
//             value: key.value,
//             parsedValue: key.value,
//             geo: true,
//         };
//     }
//     if (key.entity == "DetailRequest") {
//         data_entity.DetailRequest = {
//             entity: key.entity,
//             value: key.value,
//             parsedValue: key.value,
//         };
//     }
//     if (key.entity == "DiversityEntity") {
//         data_entity.DiversityEntity = {
//             entity: key.entity,
//             value: key.value,
//             parsedValue: key.value,
//         };
//     }
//     if (key.entity == "CategoryListEntity") {
//         data_entity.CategoryListEntity = {
//             entity: key.entity,
//             value: key.value,
//             parsedValue: key.value,
//         };
//     }

//     if (key.entity == "UniqueQueryEntity") {
//         data_entity.UniqueQueryEntity = {
//             entity: key.entity,
//             value: key.value,
//             parsedValue: key.value,
//         };
//     }
//     if (key.entity == "LookupEntity") {
//         data_entity.LookupEntity = {
//             entity: key.entity,
//             value: key.value,
//             parsedValue: key.value,
//         };
//     }
//     if (key.entity == "SupplierKeyWordEntity") {
//         data_entity.SupplierKeyWordEntity = {
//             entity: key.entity,
//             value: key.value,
//             parsedValue: key.value,
//         };
//     }
//     if (key.entity == "datetimeV2") {
//         data_entity.datetimeV2 = {
//             entity: key.entity,
//             value: key.value,
//             parsedValue: key.value,
//         };
//     }
//     if (key.entity == "PriceKeyWordEntity") {
//         data_entity.PriceKeyWordEntity = {
//             entity: key.entity,
//             value: key.value,
//             parsedValue: key.value,
//         };
//     }
//     if (key.entity == "KeyNameEntity" || key.entity == "CategoryListEntity") {
//         data_entity.KeyNameEntity = {
//             entity: key.entity,
//             value: key.value,
//             parsedValue: key.value,
//         };
//     }
// });
// console.log(data_entity);
