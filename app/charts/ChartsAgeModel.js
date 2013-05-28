FbApp.ChartsAgeModel = FbApp.ChartModel.extend({
	processData : function() {
		var values = {};

		this.collection.each(function(item) {
			var champ = item.attributes['birthday_date'];
			if(champ == '' || champ == undefined || champ == null) {
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
		this.trigger('change');
	}
});