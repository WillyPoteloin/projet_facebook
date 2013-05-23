FbApp.ChartsSexView = FbApp.ChartView.extend({
	renderData : function() {

		var donnees = this.chartData;

		$(this.$el).highcharts({

			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false
			},
			title: {
				text: 'Répartition des sexes'
			},
			tooltip: {
				valueDecimals: 0,
				valueSuffix: '%'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '{point.name}: <b>{y}%</b>'
					},
					showInLegend: true
				}
			},
			series: [{
				type: 'pie',
				name: 'Répartition des sexes',
				data: donnees
			}]
		});
	}
});