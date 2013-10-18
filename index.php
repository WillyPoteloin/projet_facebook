<?php 
include('php/fb.php');
?>
<html lang="fr">
<head>
	<title>Test SDK PHP FACEBOOK</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

	<?php if($currentUser) : ?>

		Nom : <?= $friendsProfile['data'][0]['name']; ?><br>
		Nombre d'amis : <?= sizeof($friendsProfile['data']);  ?>

		<a class='fbLogout' href="<?= $logoutUrl ?>">Deconnexion Facebook</a>

	<?php else : ?>

		<a class='fbLogin' href="<?= $loginUrl ?>">Connexion Facebook</a>

	<?php endif; ?>
	
</body>
</html>