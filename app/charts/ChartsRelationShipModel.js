FbApp.ChartsRelationShipModel = FbApp.ChartModel.extend({
	processData : function() {
		var values = {};

		this.collection.each(function(item) {
			values[item.attributes['relationship_status']] ? values[item.attributes['relationship_status']]++ : values[item.attributes['relationship_status']] = 1;
		});

		var chartData = JSON.stringify(values);
	}
});