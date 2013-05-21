FbApp.ChartsSexModel = FbApp.ChartModel.extend({
	processData : function() {

		var values = {};

		this.collection.each(function(item) {
			if(item.attributes['sex'] == '' || item.attributes['sex'] == undefined) {
				item.attributes['sex'] = 'N/A';
			}
			values[item.attributes['sex']] ? values[item.attributes['sex']]++ : values[item.attributes['sex']] = 1;
		});

		this.chartData = _.pairs(values);
	}
});