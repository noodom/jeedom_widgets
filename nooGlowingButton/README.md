# Widget nooGlowingButton

![](doc/images/nooGlowingButton.gif)

## A récupérer sous /jeedom_widgets/nooGlowingButton/cmd.action.other.nooGlowingButton.html

## Création du widget

Depuis le plugin Pimp My Jeedom :

- Depuis l'onglet 'Général', sélectionner le bouton 'Ajouter un Widget Tiers'
- Saisir le nom nooGlowingButton, la version Dashboard, le type Action et le Sous-Type Défaut puis valider avec le bouton 'Créer'

![](../nooNeonButton/doc/images/pimpWidgetCreation.png)

- Dans la zone de texte 'Edition', coller le code du fichier cmd.action.other.nooGlowingButton.html
- Sélectionner le bouton 'Sauvegarder'

![](../nooNeonButton/doc/images/pimpCodeAdd.png)

>**Note** : Le widget peut évidemment être créé de façon classique comme un widget tiers sans le plugin Pimp my Jeedom
> - Sélectionner le menu Outil -> Widgets,
> - Sélectionner Code, puis Nouveau
> - Saisir le nom nooGlowingButton, la version Dashboard, le type Action et le Sous-Type Défaut puis valider avec le bouton 'Créer'
> - Dans la zone de texte 'Edition', coller le code du fichier cmd.action.other.nooGlowingButton.html
> - Sélectionner le bouton 'Sauvegarder'

## (facultatif) Création d'un virtuel avec commande action

- Si vous souhaitez associer le widget à une commande existante, cette étape n'est pas nécessaire
- Sinon, si vous souhaitez créer un nouveau nooGlowingButton :
	- Créer un virtuel depuis le plugin Virtuel (Plugin -> Programmation -> Virtuel)
	- Ajouter une commande info Etat et de sous-type Binaire
  - Ajouter une commande action à associer à la commande info Etat
  - Saisir pour valeur 'not(#[monObjet][monNooGlowingButton][Etat]#)'

## Association du widget à la commande action

Depuis le plugin Pimp My Jeedom :

![](../nooNeonButton/doc/images/commandAssociation.png)

- Sélectionner le bouton 'Appliquer sur'
- Cocher les commandes de type Action souhaitées
- Enregistrer les commandes avec le bouton 'Valider'

- La liste des commandes associées au widget sont visibles dans la partie 'Commandes liées'
- Une prévisualisation basée sur le premier virtuel associé est visible

>**Note** : Sans le plugin Pimp my Jeedom, faire les actions suivantes pour chaque commande à associer
> - Depuis le plugin Virtuel, rechercher le virtuel contenant la commande à associer
> -Sélectionner l'onglet Commandes
> - Sélectionner la roue dentée de la commande
> - Sélectionner l'onglet Affichage
> - Sélectionner le widget CustomTemp/NooGlowingButton (ligne Widget, colonne Dashboard)

## (facultatif) Paramètres de la commande associée au widget

Les paramètres suivants sont possibles pour personnaliser les virtuels et obtenir des rendus différents

	logo : logo au format fontawesome ('fa fa-home' si non renseigné)
	colorButtonOn : couleur du bouton en mode On ('rgba(0, 176, 255, 1)' si non renseigné)
	colorButtonOff : couleur du bouton en mode On ('#222' si non renseigné)
	colorLogo : couleur du bouton fixe (couleurs du bouton On/Off si non renseigné)
 	time : affichage des informations de temps depuis le dernier allumage/extinction, 
        	valeurs possibles :
        	- duree': affiche la durée depuis le dernier allumage/extinction, '
        	- heure': affiche l'heure de dernier allumage extinction, 
        	- 'date': affiche la date et l'heure de dernier allumage/extinction)
	colorTime : couleur du texte des infos de temps
	colorBackgroundTime : couleur de fond des infos de temps
	
![](doc/images/nooGlowingButtonParams.png)

## Ajout dans un Design

	- Depuis un Design, ajouter l'équipement ou le virtuel et suivez les étapes suivantes :
		- Clic droit, Sélectionnez 'Edition'
		- Clic droit, puis sélectionnez 'Ajouter équipement'
		- Sélectionner l'équipement souhaité
		- Sélectionner Valider
		- Rafraichir la page : le widget nooNeonButton est visible dans le Design
