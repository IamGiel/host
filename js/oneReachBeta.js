return {
    template: {
      template: `<div>
        <div id="chart" style="width: 100%; height: 600px;"></div>
      </div>`,
      data() {
        return {
        //   testData: 'test data'
        countries: [
            ["San-Francisco (1906)", 1500],
            ["Messina (1908)", 87000],
            ["Ashgabat (1948)", 175000],
            ["Chile (1960)", 10000],
            ["Tian Shan (1976)", 242000],
            ["Armenia (1988)", 25000],
            ["Iran (1990)", 50000]
        ],
        headers: ["Name", "Death toll"]
        }
      },
      props: [],
      methods: {
        send(msg) {
          /**
           * `message` field will be sent as user reply and will NOT be stored in mergeField
           * `myData` field will be stored in mergeField
           **/
          this.sendMessage({
            message: msg,
            myData: msg
          });
        },
      },
      mounted () {
        console.log(45454)
            // set the data
            var data = {
              header: this.headers,
              rows: this.countries
            };
            // create the chart
            var chart = anychart.bar();
            // add the data
            chart.data(data);
            // set the chart title
            chart.title("The deadliest earthquakes in the XXth century");
            // draw
            chart.container("chart");
            chart.draw();
      },
      computed: {}
    },
    "showComponentInMessage": true // if true component will be shown in the message bubble
  }