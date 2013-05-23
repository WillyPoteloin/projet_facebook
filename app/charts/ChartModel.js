FbApp.ChartModel = Backbone.Model.extend({

	defaults : {
		chartData : [],
	},

	initialize : function(options) {
		_.extend(this, options || {});
		this.collection.on('reset', this.processData, this);
	},

	processData : function() {
		var values = {};

		this.collection.each(function(item) {
			if(item.attributes[this.search] == '' || item.attributes[this.search] == undefined) {
				item.attributes[this.search] = 'N/A';
			}
			values[item.attributes[this.search]] ? values[item.attributes[this.search]]++ : values[item.attributes[this.search]] = 1;
		});

		this.chartData = _.pairs(values);
	}
});