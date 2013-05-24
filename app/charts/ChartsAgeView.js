FbApp.ChartsAgeView = FbApp.ChartView.extend({
	render : function() {

		var donnees = this.model.chartData;
		
		$(this.$el).highcharts({

			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false
			},
			title: {
				text: 'Age'
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
				name: 'répartiton des ages',
				data: donnees
			}]
		});
	}
});