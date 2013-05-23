FbApp.ChartsAgeModel = FbApp.ChartModel.extend({
	processData : function() {
		var values = {};

		this.collection.each(function(item) {

			if(item.attributes['birthday_date'] == '' || item.attributes['birthday_date'] == undefined || item.attributes['birthday_date'] == null) {
				item.attributes['birthday_date'] = 'N/A';
			}
			else {
				var date = item.attributes['birthday_date'].split("/");

				if(date[2] == undefined) {
					item.attributes['birthday_date'] = 'Année non renseigné';
				}
				else {
					item.attributes['birthday_date'] = date[2];
				}
			}
			values[item.attributes['birthday_date']] ? values[item.attributes['birthday_date']]++ : values[item.attributes['birthday_date']] = 1;
		});

		this.chartData = _.pairs(values);
	}
});