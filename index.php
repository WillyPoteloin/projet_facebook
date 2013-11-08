<?php 
include('php/fb.php');
include('php/getFriends.php');
?>
<html lang="fr">
<head>
	<title>Test SDK PHP FACEBOOK !</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

	<?php if($currentUser) : ?>

		<img src="<?= $currentProfile['picture']['data']['url'] ?>" alt="Photo de profil"> <?= $currentProfile['name'] ?><br>
		Nombre d'amis : <?= sizeof($friendsProfile['data'])  ?>

		<a class='fbLogout' href="<?= $logoutUrl ?>">Deconnexion Facebook</a>

		<!-- <?php foreach ($friendsProfile['data'] as $friend): ?>
			<br>
			<img src="<?= $friend['picture']['data']['url'] ?>" alt="<?= $friend['name'] ?>"> <?= $friend['name'] ?>
			<br>
			Date de naissance : 

			<?php if(isset($friend['birthday'])): ?>
				<?= $friend['birthday'] ?>
			<?php else: ?>
				non définie
			<?php endif; ?>

			<br>
			Status relationnel : 

			<?php if(isset($friend['relationship_status'])): ?>
				<?= $friend['relationship_status'] ?>
			<?php else: ?>
				non définie
			<?php endif; ?>
		
		<?php endforeach; ?> -->

	<?php else : ?>

		<a class='fbLogin' href="<?= $loginUrl ?>">Connexion Facebook</a>

	<?php endif; ?>
	
</body>
</html>