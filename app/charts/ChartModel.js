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
			if(champ == '' || champ == undefined || champ == 'N/A') {
				champ = 'N/A';
			}
			values[champ] ? values[champ]++ : values[champ] = 1;
		});
		
		this.chartData = _.pairs(values);

		// on met les valeurs récupérées sur 100
		for(var i=0;i<this.chartData.length;i++) {
			this.chartData[i][1] = (this.chartData[i][1] * 100)/this.collection.length;
			this.chartData[i][1] = parseFloat(this.chartData[i][1].toFixed(2));
		}
		
		this.trigger('change');
	}
});