# Widget nooPickAColor

![](doc/images/nooPickAColorDemo.gif)

## A récupérer sous /jeedom_widgets/nooPickAColor/cmd.action.color.nooPickAColor.html

## Création du widget

Depuis le plugin Pimp My Jeedom :

- Depuis l'onglet 'Général', sélectionner le bouton 'Ajouter un Widget Tiers'
- Saisir le nom nooPickAColor, la version Dashboard, le type Action et le Sous-Type Couleur puis valider avec le bouton 'Créer'

![](../nooSlider/doc/images/pimpWidgetCreation.png)

- Dans la zone de texte 'Edition', coller le code du fichier cmd.action.color.nooPickAColor.html

![](../nooSlider/doc/images/pimpCodeAdd.png)

- Sélectionner le bouton 'Ajouter des fichiers', puis 'Envoyer des fichiers', ajouter les 3 fichiers du répertoire cmd.action.color.nooPickAColor.html (pick-a-color-1.2.3.min.css, pick-a-color.min.js et tinycolor-0.9.15.min.js) et fermer la fenêtre

![](../nooSlider/doc/images/pimpjsFileAdd.png)

- Sélectionner le bouton 'Sauvegarder'

>**Note** : Le widget peut évidemment être créé de façon classique comme un widget tiers sans le plugin Pimp my Jeedom
> - Sélectionner le menu Outil -> Widgets,
> - Sélectionner Code, puis Nouveau
> - Saisir le nom nooPickAColor, la version Dashboard, le type Action et le Sous-Type Couleur puis valider avec le bouton 'Créer'
> - Dans la zone de texte 'Edition', coller le code du fichier cmd.action.color.nooPickAColor.html
> - Sélectionner le bouton 'Sauvegarder'


## (facultatif) Création d'un virtuel avec commande info et commande action Curseur

- Si vous souhaitez associer le widget à une commande existante, cette étape n'est pas nécessaire
- Sinon, si vous souhaitez créer un nouveau nooPickAColor :
	- Créer un virtuel depuis le plugin Virtuel (Plugin -> Programmation -> Virtuel)
	- Dans ce virtuel, ajouter une commande info et de sous-type Autre
		- Ce champ texte peut être modifié par scénario avec la commande event : la mise à jour de la valeur sera alors immédiate sur le design
	- Dans le virtuel, ajouter une commande action et de sous-type Couleur
  - Associer la commande info à cette commande action

## association du widget à la commande action

Depuis le plugin Pimp My Jeedom :

- Sélectionner le bouton 'Appliquer sur'
- Cocher les commandes de type Action souhaitées
- Enregistrer les commandes avec le bouton 'Valider'

- La liste des commandes associées au widget est visible dans la partie 'Commandes liées'
- Une prévisualisation basée sur le premier virtuel associé est visible

## (facultatif) Paramètres de la commande associée au widget

De nombreux paramètres sont possibles pour personnaliser les virtuels et obtenir des rendus très différents

		showBasicColors : affiche l'onglet 'Couleurs basiques' (par défaut 1)
		showSavedColors : affiche l'onglet 'Sauvegardes' de la liste des dernières couleurs sélectionnées (par défaut 1)
		showAdvanced : affiche l'onglet 'Mode avancé' (par défaut 1)
		fadeMenuToggle : affiche un effet d'ouverture et fermeture progressif de la popup (par défaut 1)

		showHexInput : affiche la valeur de la couleur (par défaut 0)
		showSpectrum : affiche le spectre de la couleur correspondante dans l'onglet 'Couleurs basiques' (par défaut 1)

## Ajout dans un Design

	- Depuis un Design, ajouter l'équipement ou le virtuel et suivez les étapes suivantes :
		- Clic droit, Sélectionnez 'Edition'
		- Clic droit, puis sélectionnez 'Ajouter équipement'
		- Sélectionner l'équipement souhaité
		- Sélectionner Valider
		- Rafraichir la page : le widget nooPickAColor est visible dans le Design
		
Pensez au café pour les nuits blanches de codage ;) https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=noodom.fr%40gmail.com&currency_code=EUR&source=url
