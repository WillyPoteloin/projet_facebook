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
		var valeurs = _.flatten(obj);
		
		// on élimine les valeurs null false 0 ''
		valeurs = _.compact(valeurs);
		// on boucle sur les valeurs de l'objet afin de les tester
		for(i=0; i<valeurs.length;i++) {
			
			if (_.isString(valeurs[i])) {
				// si value est trouvé dans un des champs de l'ami on retourne true et on met fin à la boucle
				if(valeurs[i].toLowerCase().indexOf(value.toLowerCase()) != -1) {
					return true;
				}
				
			}
			// est-ce que c'est un objet ?
			if (_.isObject(valeurs[i])) {
				// on élimine les clé id qui ne nous intéresse pas pour le filtre
				valeurs[i] = _.omit(valeurs[i], ['id','uid','profile_update_time']);
				// on remplace l'objet qui se trouve dans le tableau de valeur par son tableau de valeur
				valeurs[i] = _.values(valeurs[i]);
				// on rappelle notre fonction avec le nouveau tableau de valeur qui est débarassé de notre objet
				return this.contains(valeurs, value);
				// pour améliorer la fonction il faudrait renvoyer ici juste la partie du tableau qui n'a pas déjà été parcourue
			}
		}
		
	},

	filtrer: function(value) {
		var i = 0;
		var sortedColl;
		sortedColl = this.filter(function(item) {
			// on élimine les clé id qui ne nous intéresse pas pour le filtre
			item.attributes = _.omit(item.attributes, ['id','uid','profile_update_time']); 
			// on appelle notre fonction avec le tableau de valeurs de notre ami
			return this.contains( _.values(item.attributes), value);
		}, this);
		this.trigger('reset', sortedColl);
		
	},

	stats: function() {
		var vieux = 0;
		var normal = 0;
		var jeune = 0;
		var free = 0;
		var single = 0;
		var couple = 0;
		var married = 0;
		var divorced =0;
		var hard=0;

		// on créer un JSON avec les stats qui nous intéresses à partir du tableau d'ami(e)s
		this.forEach(function(friend) {

			// si la date n'est pas null on la traite
			if(friend.attributes.birthday_date != null) {
				var date = friend.attributes.birthday_date.split('/');
				// on regarde si l'année a bien été renseignée
				if(date[2] != undefined) {
					if(date[2] < 1990) {
						vieux += 1; 
					}
					else if(date[2]>=1990 && date[2] <= 1995) {
						normal +=1;
					}
					else {
						jeune +=1;
					}
				}
				
			}

			// si le status de la relation n'est pas null on le traite
			if(friend.attributes.relationship_status == 'In a Relationship') {
				couple +=1;
			}
			else if(friend.attributes.relationship_status == null || friend.attributes.relationship_status == 'Single') {
				single +=1;
			}
			else if(friend.attributes.relationship_status == 'In an Open Relationship') {
				free +=1;
			}	
			else if(friend.attributes.relationship_status == 'It\'s Complicated') {
				hard +=1;
			}
			else if(friend.attributes.relationship_status == 'Divorced') {
				divorced +=1;
			}	
			else {
				married +=1;
			}
		});
		var chart;
		var legend;

		var chartData = [
			{
			valeur: "Divorcé",
			pourcentage: divorced},
			{
			valeur: "C'est compliqué",
			pourcentage: hard},
			{
			valeur: "Marrié",
			pourcentage: married},
			{
			valeur: "En couple",
			pourcentage: couple},
			{
			valeur: "Célibataire",
			pourcentage: single},
			{
			valeur: "Relation libre",
			pourcentage: free},
		];

		
	    // PIE CHART
	    chart = new AmCharts.AmPieChart();

	    // title of the chart
	    chart.addTitle("Status relationnel", 16);

	    chart.dataProvider = chartData;
	    chart.titleField = "valeur";
	    chart.valueField = "pourcentage";
	    chart.sequencedAnimation = true;
	    chart.startEffect = "elastic";
	    chart.innerRadius = "30%";
	    chart.startDuration = 2;
	    chart.labelRadius = 15;

	    // the following two lines makes the chart 3D
	    chart.depth3D = 5;
	    chart.angle = 15;
	    // WRITE                                 
	    chart.write("relation");


	    var chartData = [
			{
			valeur: "[- | 1990]",
			pourcentage: vieux},
			{
			valeur: "[1990 | 1995]",
			pourcentage: normal},
			{
			valeur: "[1995 | -]",
			pourcentage: jeune},
		];

		
	    // PIE CHART
	    chart = new AmCharts.AmPieChart();

	    // title of the chart
	    chart.addTitle("Age", 16);

	    chart.dataProvider = chartData;
	    chart.titleField = "valeur";
	    chart.valueField = "pourcentage";
	    chart.sequencedAnimation = true;
	    chart.startEffect = "elastic";
	    chart.innerRadius = "30%";
	    chart.startDuration = 2;
	    chart.labelRadius = 15;

	    // the following two lines makes the chart 3D
	    chart.depth3D = 5;
	    chart.angle = 15;
	    // WRITE                                 
	    chart.write("age");
		

	},
});