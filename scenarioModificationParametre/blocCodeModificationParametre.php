//Scénario de modification de paramètre d'une commande
// 2 paramètrages possibles pour les tags à passer au scénario (par id ou nom de commande) :
// - idCommande (id de la commande info), nomParametre (nom du paramètre), valeurParametre (valeur du paramètre)
// - nomCommande (nom de la commande info), nomParametre (nom du paramètre), valeurParametre (valeur du paramètre)
//
// !! IMPORTANT !! : pour le nom de la commande, ne pas mettre les # : mettre sous forme [Objet][Equipement][Commande]
//
// développé par @noodom, merci à @salvialf pour le code permettant de modifier un paramètre de commande

// Récupération des tags passés en paramètres.
$tags = $scenario->getTags();

// initialisation de variables locales
$tags['#erreur#'] = "";

if ((!empty($tags['#idCommande#']) || !empty($tags['#nomCommande#'])) && !empty($tags['#nomParametre#']) && !empty($tags['#valeurParametre#'])) {
  $scenario->setLog("- Modification du paramètre ".$tags['#nomParametre#']." de la commande ".$tags['#nomCommande#']." : ".$tags['#valeurParametre#']);

  // Récupération de la commande en fonction de son id ou de son nom passés en paramètre
  try {
      if ($tags['#idCommande#'] != "") {
          $scenario->setLog("Récupération de la commande d'id ".$tags['#idCommande#']);
          $cmd=cmd::byId($tags['#idCommande#']);
        if (!is_object($cmd)) {
          // Commande non trouvée
          $tags['#erreur#'] = "Commande non trouvée !";
          $scenario->setTags($tags);
        }
      }
      else {
          $scenario->setLog("Récupération de la commande #".$tags['#nomCommande#']."#");
          $cmd=cmd::byString('#'.$tags['#nomCommande#'].'#');
      }
  }
  catch (Exception $e) {
      // Commande non trouvée
      $tags['#erreur#'] = "Erreur de récupération de commande !";
  }

  if ($tags['#erreur#'] == "") {
    // Log de la valeur de la commande
    $valeurCommande=$cmd->execCmd();
    $scenario->setLog("- Valeur de la commande : ".$valeurCommande);
    // Mise à jour du paramètre
    $arr = $cmd->getDisplay('parameters');
    $scenario->setLog("- Mise à jour du paramètre ".$tags['#nomParametre#']." : ".$tags['#valeurParametre#']);
    $arr[$tags['#nomParametre#']] = $tags['#valeurParametre#'];
    $cmd->setDisplay('parameters', $arr);
    $cmd->save();
  }
}
else {
  $tags['#erreur#'] = "Pas de nom, ni d'id de commande ou pas de nom de paramètre ou pas de valeur de paramètre";
}

if ($tags['#erreur#'] != "") {
  // Erreur de modification de paramètre
  $scenario->setLog("*** ERREUR de modification de paramètre (".$tags['#erreur#'].") : "
  	."nomCommande=".$tags['#nomCommande#']
    .", idCommande=".$tags['#idCommande#']
    .", nomParametre=".$tags['#nomParametre#']
    .", valeurParametre=".$tags['#valeurParametre#']);
}
else {
  // Pas d'erreur de modification
  $scenario->setLog("*** MODIFICATION OK avec les paramètres : "
  	."nomCommande=".$tags['#nomCommande#']
    .", idCommande=".$tags['#idCommande#']
    .", nomParametre=".$tags['#nomParametre#']
    .", valeurParametre=".$tags['#valeurParametre#']);
}
$scenario->setTags($tags);