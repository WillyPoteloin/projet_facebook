FbApp.ChartsRelationShipView = FbApp.ChartView.extend({
	renderData : function() {

		var donnees = this.chartData;

		$('#relation').highcharts({

			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false
			},
			title: {
				text: 'Status relationel'
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage}%</b>',
				percentageDecimals: 1
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true
					},
					showInLegend: true
				}
			},
			series: [{
				type: 'pie',
				name: 'Browser share',
				data: donnees
			}]
		});
	}
});