FbApp.ChartsAgeModel = FbApp.ChartModel.extend({
	processData : function() {
		var values = {};

		this.collection.each(function(item) {
			var champ = item.attributes['birthday'];
			if(champ == '' || champ == undefined || champ == null || champ == 'N/A') {
				champ = 'N/A';
			}
			else {
				var date = champ.split("/");

				if(date[2] == undefined) {
					champ = 'N/A';
				}
				else {
					champ = date[2];
				}
			}
			values[champ] ? values[champ]++ : values[champ] = 1;

		});

		this.chartData = _.pairs(values);

		// on met les valeurs récupérées sur 100
		for(var i=0;i<this.chartData.length;i++) {
			this.chartData[i][1] = (this.chartData[i][1] * 100)/this.collection.length;
			this.chartData[i][1] = parseFloat(this.chartData[i][1].toFixed(2));
		}

		this.trigger('change');
	}
});