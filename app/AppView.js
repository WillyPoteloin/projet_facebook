var AppView = Backbone.View.extend({
	events: {
		'click #byName':'sortByName',
		'click #byBirthday':'sortByBirthday',
		'click #stats':'stats',
		'keyup #filtrer':'filtrer',
	},
	initialize: function(friends) {
		this.collection.on('reset',this.render,this);
		this.$friendList = this.$el.find('.friend-list');
	},
	sortByName: function() {
		this.collection.sortByName();
	},
	sortByBirthday: function() {
		this.collection.sortByBirthday();
	},
	stats: function() {
		this.collection.stats();
	},
	filtrer: function(e) {
		this.collection.filtrer(e.currentTarget.value);
	},
	render: function(collection){

		this.$friendList.empty();
		// on declare une div en dehors du DOM pour éviter l'affichage à chaque nouveau model dans la vue
		var $container = $('<div/>');
		collection.forEach(function(friend){
			var view = new FbApp.FriendView({model: friend});
			// ion ajoute les model d'ami dans le div en dehors du DOM
			$container.append(view.render().$el);
		},this);

		// on met le dans notre le liste de contenu du div en dehors du DOM
		this.$friendList.html($container);
	}
});