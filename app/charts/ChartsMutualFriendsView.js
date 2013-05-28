FbApp.ChartsMutualFriendsView = FbApp.ChartView.extend({
	render : function() {

		var donnees = this.model.chartData;
        
		$(this.$el).highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                showEmpty : false,
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Nombre d\'ami(e)s en communs'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="padding:0"><b>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                shared: false,
                useHTML: true,
                valueDecimals : 0
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    showInLegend: false
                }
               
            },
            series: [{

                data: donnees
    
            }]
        });
    }
});