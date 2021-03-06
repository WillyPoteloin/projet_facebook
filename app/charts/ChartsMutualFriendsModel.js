FbApp.ChartsMutualFriendsModel = FbApp.ChartModel.extend({
	processData : function() {
		var values = [];

		this.collection.each(function(item) {
			var name = item.attributes['first_name']+' '+item.attributes['last_name'];
			values.push([name,parseFloat(item.attributes['mutualfriends'])]);
		});

		this.chartData = values;
		this.trigger('change');
	}
});