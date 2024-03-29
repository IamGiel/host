let jsonData = require("../assets/supplierLists.json");

var jsonObject = JSON.stringify(jsonData);

console.log(jsonData);

// JSON to CSV Converter
function downloadCSVFromJson(filename, arrayOfJson) {
    // convert JSON to CSV
    const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
    const header = Object.keys(arrayOfJson);
    let csv = arrayOfJson.map((row) =>
        header
            .map((fieldName) => JSON.stringify(row[fieldName], replacer))
            .join(",")
    );
    csv.unshift(header.join(","));
    csv = csv.join("\r\n");

    // Create link and download
    var link = document.createElement("a");
    link.setAttribute(
        "href",
        "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURIComponent(csv)
    );
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

downloadCSVFromJson("myConvertedFile", jsonData);
