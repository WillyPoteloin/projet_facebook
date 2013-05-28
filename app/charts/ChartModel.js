FbApp.ChartModel = Backbone.Model.extend({

	defaults : {
		chartData : [],
	},

	initialize : function(options) {
		_.extend(this, options || {});
		this.collection.on('change', this.processData, this);
	},

	processData : function() {
		var values = {};
		var recherche = this.search;

		this.collection.each(function(item) {
			var champ = item.attributes[recherche];
			if(champ == '' || champ == undefined) {
				champ = 'N/A';
			}
			values[champ] ? values[champ]++ : values[champ] = 1;
		});

		this.chartData = _.pairs(values);
		this.trigger('change');
	}
});