FbApp.Friends = Backbone.Collection.extend({
	model: FbApp.Friend,
	sortByName : function() {
		var sortedArray = this.sortBy(function(friend){
			return friend.get("name");
		});

		this.trigger('reset', sortedArray);
	},
	sortByBirthday : function() {
		var sortedArray = this.sortBy(function(friend){
			return Date.parse(friend.get("birthday_date"));
		});

		this.trigger('reset', sortedArray);
	},
	filtrer : function(valeur) {
		valeur = valeur.toLowerCase();
		var sortedArray = this.filter(function(friend){
			return friend.get("name").toLowerCase().indexOf(valeur) != -1;
		});

		this.trigger('reset', sortedArray);
	}
});