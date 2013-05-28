FbApp.ChartView = Backbone.View.extend({
	events: {
		'click #stat':'render',
	},
	initialize : function(options) {
		_.extend(this, options || {});
		this.model.on('change', this.render, this);
	},
	render : function() {

	}
});