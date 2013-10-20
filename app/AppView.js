var AppView = Backbone.View.extend({
	events: {
		'click #byName':'sortByName',
		'click #byBirthday':'sortByBirthday',
		'keyup #filtrer':'filtrer',
		'click #stat':'notifyChange',
	},
	initialize: function(options,friends) {
		_.extend(this, options || {});
		this.modifColl.reset(getFriends());
		this.modifColl.trigger('change');
		this.modifColl.on('reset',this.render,this);
		this.collection.on('reset',this.render,this);
		this.$friendList = this.$el.find('.friend-list');
	},
	sortByName: function() {
		this.modifColl.sortByName();
	},
	sortByBirthday: function() {
		this.modifColl.sortByBirthday();
	},
	filtrer: function(e) {
		this.modifColl.models = this.collection.filtrer(e.currentTarget.value);
	},
	notifyChange: function(){
		this.modifColl.trigger('change');
	},
	render: function(collection){

		this.$friendList.empty();
		// on declare une div en dehors du DOM pour éviter l'affichage à chaque nouveau model dans la vue
		var $container = $('<div/>');
		collection.forEach(function(friend){
			var view = new FbApp.FriendView({model: friend});
			// on ajoute les model d'ami dans le div en dehors du DOM
			$container.append(view.render().$el);
		},this);

		// on met les amis dans notre liste qui est dans le DOM
		this.$friendList.html($container);
	}
});