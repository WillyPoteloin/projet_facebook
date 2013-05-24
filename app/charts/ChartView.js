FbApp.ChartView = Backbone.View.extend({
	initialize : function(options) {
		_.extend(this, options || {});
		this.model.on('change:chartData', this.render, this);
		this.render();
	},

	render : function() {

	}
});