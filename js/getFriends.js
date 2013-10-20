function getFriends () {

	// requête ajax pour récupéré la liste des amis au format JSON
	var friendsRequest = $.ajax({
			url: 'php/getFriends.php',
			type: 'post',
			data: {},
			success: function (data) {
				return data;
			},
			error: function(data) {
				return data;
			},
			complete: function(data) {
				return data;
			}
		});

	// callback différé
	return $.when(friendsRequest).done(function(){
		return friendsRequest.responseText;
	});
}