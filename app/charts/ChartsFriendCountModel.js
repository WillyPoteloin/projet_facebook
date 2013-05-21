FbApp.ChartsFriendCountModel = FbApp.ChartModel.extend({
	processData : function() {
		var values = {};

		this.collection.each(function(item) {
			if(item.attributes['friend_count'] == '' || item.attributes['friend_count'] == undefined) {
				item.attributes['friend_count'] = 'N/A';
			}
			values[item.attributes['friend_count']] ? values[item.attributes['friend_count']]++ : values[item.attributes['friend_count']] = 1;
		});

		this.chartData = _.pairs(values);
	}
});