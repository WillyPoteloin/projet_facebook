FbApp.FriendView = Backbone.View.extend({
	className: "friend-item span4",
	tmpl: _.template($('#friendsTmpl').html()),
	initialize: function(){},
	render: function(){
		this.$el.html(this.tmpl(this.model.toJSON()));
		return this;
	}
});