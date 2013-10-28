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

	$facebook->destroySession();

	header('Location: http://localhost/projet_facebook/index.php');


?>