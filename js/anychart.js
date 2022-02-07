anychart.onDocumentReady(function () {
    var chart = anychart.column();

    var series = chart.column([
        { x: "January", value: 2 },
        { x: "February", value: 5 },
        { x: "March", value: 3 },
        { x: "April", value: 9 },
        { x: "May", value: 4 },
    ]);

    // Set series color
    series.color("#684BD9");

    chart.title("Set series color");
    chart.container("container");
    chart.draw();

    function drawBar(dataObj) {
        console.log("dataObj >>>>> ", dataObj);
        let new_data = [];
        let data_to_collect = {};
        dataObj.forEach((el, index) => {
            data_to_collect.unit = el["Unit"];
            data_to_collect.Currency = el["Currency"];
            data_to_collect.Name_of_Sub_Category = el["Name_of_Sub_Category"];
            let temp = [];
            temp.push(`${el["Name_of_Sub_Category"]} ${el["Actual_Period"]}`);
            temp.push(`${parseInt(el["Price_Point"])}`);
            console.log(temp);
            if (temp.length == 1) {
                console.log(new_data);

                temp = [];
            }
            new_data.push(temp);
            console.log(data_to_collect);
        });

        console.log(new_data);

        // create data
        var data = [
            ["John", 10000],
            ["Jake", 12000],
            ["Peter", 13000],
            ["James", 10000],
            ["Mary", 9000],
        ];

        // create a chart
        chart = anychart.column();

        // set the chart title
        chart.title(`Price Stats for ${data_to_collect.Name_of_Sub_Category}`);

        // set the titles of the axes
        // chart.xAxis().title("Manager");
        chart
            .yAxis()
            .title(
                `Price in ${data_to_collect.Currency}/${data_to_collect.unit}`
            );

        // create a column series and set the data
        var series = chart.column(new_data);
        series.name(`Price`);

        // set the container id
        chart.container("barContainer");

        // initiate drawing the chart
        chart.draw();
    }

    if (price_data_gql) {
        drawBar(price_data_gql);
    }
});
