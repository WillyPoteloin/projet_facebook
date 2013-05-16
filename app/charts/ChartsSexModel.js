FbApp.ChartsSexModel = FbApp.ChartModel.extend({
	processData : function() {

		var values = {};

		this.collection.each(function(item) {
			values[item.attributes['sex']] ? values[item.attributes['sex']]++ : values[item.attributes['sex']] = 1;
		});

		var chartData = JSON.stringify(values);
	}
});