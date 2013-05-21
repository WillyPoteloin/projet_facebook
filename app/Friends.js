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

	contains : function(obj, value) {
		
		// on remet tous les tableau à plat
		// on élimine les valeurs null false 0 ''
		var valeurs = _.compact(_.flatten(obj));
		
		// on boucle sur les valeurs de l'objet afin de les tester
		for(var i=0; i<valeurs.length;i++) {
			
			if (_.isString(valeurs[i]) && valeurs[i].toLowerCase().indexOf(value.toLowerCase()) != -1) {
				// si value est trouvé dans un des champs de l'ami on retourne true et on met fin à la boucle
				return true;
			}

			// est-ce que c'est un objet ?
			// on rappelle notre fonction avec le nouveau tableau de valeur qui est débarassé de notre objet
			if (_.isObject(valeurs[i]) && this.contains(valeurs[i], value)) {
				return true;
			}
		}

		return false;
		
	},

	filtrer: function(value) {
		console.time('search');
		var i = 0;
		var sortedColl;
		sortedColl = this.filter(function(item) {
			// on appelle notre fonction avec le tableau de valeurs de notre ami
			return this.contains(item.attributes, value);
		}, this);
		console.timeEnd('search');
		this.trigger('reset', sortedColl);
		
	},
	
});