<?php
	// on load le SDK
	require_once("fbSdk/facebook.php");

	// on renseigne les ID de l'app
	$config = array();
	$config['appId'] = '203651863118894';
	$config['secret'] = '501d2e20cbd373bd0337f7d5cfdee499';
	$config['cookie'] = false;

	// on instancie l'objet facebook
	$facebook = new Facebook($config);

	// on récupère les url de connexion et de deconnexion
	$loginParams = array(
		'redirect_uri' => 'http://localhost/projet_facebook'
	);

	$logoutParams = array(
		'next' => 'http://localhost/projet_facebook'
	);

	$loginUrl = $facebook->getLoginUrl($loginParams);
	$logoutUrl  = $facebook->getLogoutUrl($logoutParams);

	
	// on récupère l'utilisateur courant si il existe
	$currentUser = $facebook->getUser();
	 
	if($currentUser)
	{
	    try
	    {
	        $friendsProfile = $facebook->api('/me/friends/?fields=id,name,birthday,relationship_status,picture,first_name,username,last_name,mutualfriends');
	        // var_dump($friendsProfile);
	    }
	    catch (FacebookApiException $e)
	    {
	        print_r($e);
	        $user = null;
	    }
	}

?>