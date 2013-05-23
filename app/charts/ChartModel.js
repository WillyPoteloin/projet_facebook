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
		var recherche = this.search;
		this.collection.each(function(item) {
			if(item.attributes[recherche] == '' || item.attributes[recherche] == undefined) {
				item.attributes[recherche] = 'N/A';
			}
			values[item.attributes[recherche]] ? values[item.attributes[recherche]]++ : values[item.attributes[recherche]] = 1;
		});

		this.chartData = _.pairs(values);
	}
});