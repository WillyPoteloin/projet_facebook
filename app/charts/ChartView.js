FbApp.ChartView = Backbone.View.extend({
	initialize : function(options) {
		_.extend(this, options || {});
		this.collection.on('reset', this.renderData, this);
		this.renderData();
	},

	renderData : function() {

	}
});