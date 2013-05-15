FbApp.ChartModel = Backbone.Model.extend({
	initialize : function(options) {
		_.extend(this, options || {});
		this.collection.on('reset', this.processData, this);
	},

	processData : function() {
		
	}
});