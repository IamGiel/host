let data1 = {};
let data2 = null;
let data3 = undefined;
let data4;
let data5 = '';
let data6 = 'string';


function valid(item) {
    if (item == null || item == undefined) {
        return null;
    } else {
        return item;
    }
}

    
console.log(valid(data1));
console.log(valid(data2));
console.log(valid(data3));
console.log(valid(data4));
console.log(valid(data5));
console.log(valid(data6));