<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="styleserie.css" />
	<title> Série</title>
</head>
<body>

	<!--    réparage des données :
	        remplacement des données par données php : -->

	<h2><?php echo utf8_encode($series['nom']); ?></h2>
	<p><?php echo utf8_encode($series['synopsis']); ?></p>

    <p>Informations</p>
	<ul>
	  <li>Créateur : <?php echo utf8_encode($series['createur']); ?></li>
	  <li> Genre : <?php echo utf8_encode($series['genre']); ?></li>
      <li> Date de sortie : <?php echo utf8_encode($series['dateSortie']); ?></li>
	</ul>
	<p>Mon avis</p>
	<ul>
	  <li>Ce que je pense de la série : <?php echo utf8_encode($series['avis']); ?></li>
	  <li>La note sur 5 que je mets à la série : <?php echo utf8_encode($series['note']); ?></li>

	</ul>

   
	
</body>
</html>