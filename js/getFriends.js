function getFriends () {

	// requête ajax pour récupéré la liste des amis au format JSON
	var friendsRequest = $.ajax({
			url: 'php/getFriends.php',
			// pas bien...
			async: false,
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

	return JSON.parse(friendsRequest.responseText);
}