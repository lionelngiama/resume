var chart;
var legend;

var chartData = [{
		country: "javascript",
		value: 200
	},
	{
		country: "HTML5,CSS3",
		value: 340
	},
	{
		country: "photoshop",
		value: 230
	},
	{
		country: "flutter and dark",
		value: 250
	},
	{
		country: "WordPress",
		value: 150
	},
	{
		country: "python",
		value: 200
	}
];

AmCharts.ready(function () {
	// PIE CHART
	chart = new AmCharts.AmPieChart();
	chart.dataProvider = chartData;
	chart.titleField = "country";
	chart.valueField = "value";
	chart.outlineColor = "";
	chart.outlineAlpha = 0.8;
	chart.outlineThickness = 2;
	// this makes the chart 3D
	chart.depth3D = 20;
	chart.angle = 30;

	// WRITE
	chart.write("chartdiv");
});