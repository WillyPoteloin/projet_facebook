<?php
	// on load le SDK
	require_once("fbSdk/facebook.php");

	// on renseigne les ID de l'app
	$config = array();
	$config['appId'] = '203651863118894';
	$config['secret'] = '501d2e20cbd373bd0337f7d5cfdee499';
	$config['cookie'] = true;

	// on instancie l'objet facebook
	$facebook = new Facebook($config);

	// on regarde si un utilisateur est connecté
	$currentUser = $facebook->getUser();
	if($currentUser) {
		try {
			// on récupère l'utilisateur courant si il existe
			$currentProfile = $facebook->api('/me/?fields=id,name,picture,birthday');
	    	$friendsProfile = $facebook->api('/me/friends/?fields=id,name,birthday,relationship_status,picture,first_name,username,last_name,mutualfriends');
	        // var_dump($friendsProfile);
		}
		catch (Exception $e) {
			error_log($e);
		}

		// on prend le lien de logout
	    $logoutParams = array(
			'next' => 'http://localhost/projet_facebook/php/logout.php',
		);

		$logoutUrl  = $facebook->getLogoutUrl($logoutParams);
	}
	else {
		$params = array('scope' => 'user_about_me,user_birthday,user_relationships,user_relationship_details,friends_about_me,friends_activities,friends_birthday,friends_education_history,friends_hometown,friends_website,read_mailbox' );
		$loginUrl = $facebook->getLoginUrl($params);
	}

?>