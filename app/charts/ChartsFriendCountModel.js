FbApp.ChartsFriendCountModel = FbApp.ChartModel.extend({
	processData : function() {
		var values = {};

		this.collection.each(function(item) {
			values[item.attributes['friend_count']] ? values[item.attributes['friend_count']]++ : values[item.attributes['friend_count']] = 1;
		});

		var chartData = JSON.stringify(values);
	}
});