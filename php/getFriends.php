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
	    	$friendsProfile = $facebook->api('/me/friends/?fields=id');
	    	// une fois la liste des ami(e)s récupéré on boucle sur chaque ami(e)s et l'on créer notre propre JSON avec les informations voulu
	    	foreach ($friendsProfile['data'] as $friend) {
	    		$friendProfile = $facebook->api('/'.$friend['id'].'/?fields=id,name,gender,picture,birthday,username,last_name,first_name,relationship_status,mutualfriends,hometown,education,link,about,political,religion,website,bio,sports,address');
	    		// création du JSON

	    		$tab['id'] = (isset($friendProfile['id'])? $friendProfile['id'] : 'N/A');
	    		$tab['name'] = (isset($friendProfile['name'])? $friendProfile['name'] : 'N/A');
	    		$tab['username'] = (isset($friendProfile['username'])? $friendProfile['username'] : 'N/A');
	    		$tab['gender'] = (isset($friendProfile['gender'])? $friendProfile['gender'] : 'N/A');
	    		$tab['picture'] = (isset($friendProfile['picture'])? $friendProfile['picture']['data']['url'] : 'N/A');
	    		$tab['birthday'] = (isset($friendProfile['birthday'])? $friendProfile['birthday'] : 'N/A');
	    		$tab['first_name'] = (isset($friendProfile['first_name'])? $friendProfile['first_name'] : 'N/A');
	    		$tab['last_name'] = (isset($friendProfile['last_name'])? $friendProfile['last_name'] : 'N/A');
	    		$tab['relationship_status'] = (isset($friendProfile['relationship_status'])? $friendProfile['relationship_status'] : 'N/A');
	    		$tab['mutualfriends'] = (isset($friendProfile['mutualfriends'])? sizeof($friendProfile['mutualfriends']['data']) : 'N/A');
	    		$tab['hometown'] = (isset($friendProfile['hometown'])? $friendProfile['hometown'] : 'N/A');
	    		$tab['education'] = (isset($friendProfile['education'])? $friendProfile['education'] : 'N/A');
	    		$tab['link'] = (isset($friendProfile['link'])? $friendProfile['link'] : 'N/A');
	    		$tab['about'] = (isset($friendProfile['about'])? $friendProfile['about'] : 'N/A');
	    		$tab['political'] = (isset($friendProfile['political'])? $friendProfile['political'] : 'N/A');
	    		$tab['religion'] = (isset($friendProfile['religion'])? $friendProfile['religion'] : 'N/A');
	    		$tab['bio'] = (isset($friendProfile['bio'])? $friendProfile['bio'] : 'N/A');
	    		$tab['website'] = (isset($friendProfile['website'])? $friendProfile['website'] : 'N/A');
	    		$tab['sports'] = (isset($friendProfile['sports'])? $friendProfile['sports'] : 'N/A');
	    		$tab['address'] = (isset($friendProfile['address'])? $friendProfile['address'] : 'N/A');
	    		$JSON[]=$tab;
	    	}
	    	echo json_encode($JSON);
	        // echo json_encode($friendsProfile['data']);
	    }
	    catch (FacebookApiException $e)
	    {
	        print_r($e);
	        echo null;
	    }
	}
?>