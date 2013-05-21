FbApp.ChartsRelationShipModel = FbApp.ChartModel.extend({
	processData : function() {
		var values = {};

		this.collection.each(function(item) {
			if(item.attributes['relationship_status'] == '' || item.attributes['relationship_status'] == undefined) {
				item.attributes['relationship_status'] = 'N/A';
			}
			values[item.attributes['relationship_status']] ? values[item.attributes['relationship_status']]++ : values[item.attributes['relationship_status']] = 1;
		});

		this.chartData = _.pairs(values);
	}
});