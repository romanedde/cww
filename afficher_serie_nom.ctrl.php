<?php
$nom = filter_input(INPUT_GET, 'nom', FILTER_SANITIZE_STRING);

// ajout des % sql pour rechercher le mot dans le titre :
$nom = '"%'.$nom.'%"';
// connexion à la BD
include('connexion.inc.php');
// requête
$sql  = "SELECT nom, genre, createur, synopsis, avis, dateSortie, note
    FROM series
    WHERE nom LIKE $nom ";
    
// préparation de la requête
$requetePreparee = $bd->prepare($sql);
// passage du paramètre à la requête
$requetePreparee->BindParam(1, $nom);
// exécution de la requête
$requetePreparee->execute();
// lecture de la ligne retournée
$series = $requetePreparee->fetch(PDO::FETCH_ASSOC);



// clôture de la connexion
$bd = NULL;
include('serie.vue.php');

?>