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

	// on récupère l'utilisateur courant si il existe
	$currentUser = $facebook->getUser();

	// var_dump($currentUser);
	 
	if($currentUser)
	{
	    try
	    {
	    	$friendsProfile = $facebook->api('/me/friends/?fields=id,name,birthday,relationship_status,picture,first_name,username,last_name,mutualfriends');
	        echo json_encode($friendsProfile['data']);
	    }
	    catch (FacebookApiException $e)
	    {
	        print_r($e);
	        echo null;
	    }
	}
?>