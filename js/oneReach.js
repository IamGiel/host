return {
    template: {
      template: `<div>
        <div id="mixChart" style="width: 100%; height: 600px;"></div>
      </div>`,
      data() {
        return {
        //   testData: 'test data;
        }
      },
      props: [],
      methods: {
        send(msg) {
          /**
           * `message` field will be sent as user reply and will NOT be stored in mergeField
           * `myData` field will be stored in mergeField
           **/
          this.sendMessage({});
        }
      },
      mounted () {
        var chart = anychart.line();

  chart.title("Extra Axes Binding Sample");

  // setting yAxis settings
  chart.yAxis(0).title("Basic Y-Axis");
  chart.yAxis(1).title("Extra Y-Axis");

  // setting Grid settings
  chart.xGrid(true);
  chart.yGrid(true);

  // adding extra Y scale
  var extraYScale = anychart.scales.linear();
  extraYScale.minimum(0);
  extraYScale.maximum(100);
  extraYScale.ticks().interval(10);
  extraYScale.minorTicks().interval(2);

  // adding and adjust extra Y axis
  var extraYAxis = chart.yAxis(1);
  extraYAxis.orientation("right");
  extraYAxis.scale(extraYScale);

  // setting first series of data
  var firstSeries = [
    ["A", 637166],
    ["B", 721630],
    ["C", 148662],
    ["D", 78662],
    ["E", 90000]
  ];

  // setting second series of data
  var secondSeries = [
    ["A", 95],
    ["B", 97],
    ["C", 96],
    ["D", 70],
    ["E", 35]
  ];

  // setting and adjusting data visualisation
  var columnSeries = chart.column(firstSeries);
  var lineSeries = chart.line(secondSeries);
  lineSeries.yScale(extraYScale);

  chart.container("mixChart");
  chart.draw();
        this.send();
      
      },
      computed: {}
    },
    "showComponentInMessage": true // if true component will be shown in the message bubble
  }
