# Widget nooClockPicker

![](doc/images/nooClockPicker.gif)

## A récupérer sous /jeedom_widgets/nooClockPicker/cmd.action.slider.nooClockPicker.html

## Création du widget

Depuis le plugin Pimp My Jeedom :

- Depuis l'onglet 'Général', sélectionner le bouton 'Ajouter un Widget Tiers'
- Saisir le nom nooClockPicker, la version Dashboard, le type Action et le Sous-Type Curseur puis valider avec le bouton 'Créer'

![](../nooSlider/doc/images/pimpWidgetCreation.png)

- Dans la zone de texte 'Edition', coller le code du fichier cmd.action.slider.nooClockPicker.html

![](../nooSlider/doc/images/pimpCodeAdd.png)

- Sélectionner le bouton 'Ajouter des fichiers', puis 'Envoyer des fichiers', ajouter le fichier /cmd.action.slider.nooClockPicker/jquery-clockpicker.min.js et fermer la fenêtre

![](doc/images/pimpjsFileAdd.png)

- Sélectionner le bouton 'Sauvegarder'

>**Note** : Le widget peut évidemment être créé de façon classique comme un widget tiers sans le plugin Pimp my Jeedom
> - Sélectionner le menu Outil -> Widgets,
> - Sélectionner Code, puis Nouveau
> - Saisir le nom nooClockPicker, la version Dashboard, le type Action et le Sous-Type Curseur puis valider avec le bouton 'Créer'
> - Dans la zone de texte 'Edition', coller le code du fichier cmd.action.slider.nooClockPicker.html
> - Sélectionner le bouton 'Sauvegarder'


## (facultatif) Création d'un virtuel avec commande info et commande action Curseur

- Si vous souhaitez associer le widget à une commande existante, cette étape n'est pas nécessaire
- Sinon, si vous souhaitez créer un nouveau circleProgress :
	- Créer un virtuel depuis le plugin Virtuel (Plugin -> Programmation -> Virtuel)
	- Dans ce virtuel, ajouter une commande info et de sous-type Numérique
		- Ce champ texte peut être modifié par scénario avec la commande event : la mise à jour de la valeur sera alors immédiate sur le design
	- Dans le virtuel, ajouter une commande action et de sous-type Curseur
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

		autoclose : fermeture automatique de la popup de saisie, valeurs possibles : 1=fermeture auto / 0=fermeture par validation (1 par défaut)
		buttonText : texte du bouton de validation (dans le cas d'une fermture par validation ('OK' par défaut)
		placement : position de la popup de saisie, valeurs possibles : top, left, bottom, right ('bottom' par défaut)
		align = ('left' par défaut)
		(Attention à la cohérence placement/align pour la prise en compte des valeurs : (top,bottom) avec (top,left))
		focusColor = couleur du champ en cours de saisie ('#428BCA' par défaut)
		blurColor = couleur du champ hors saisie ('#999' par défaut)
		clockColor = couleur des valeurs possibles de sélection ('#666' par défaut)
		lineColor = couleur de la ligne de sélection ('rgb(0, 149, 221)' par défaut)
		focusCircleColor couleur de valeur courante sélectionnée ('rgb(192, 229, 247)' par défaut)
		blurCircleColor = couleur de passage sur une valeur ('rgba(0, 149, 221, .25)' par défaut)		

## Ajout dans un Design

	- Depuis un Design, ajouter l'équipement ou le virtuel et suivez les étapes suivantes :
		- Clic droit, Sélectionnez 'Edition'
		- Clic droit, puis sélectionnez 'Ajouter équipement'
		- Sélectionner l'équipement souhaité
		- Sélectionner Valider
		- Rafraichir la page : le widget nooClockPicker est visible dans le Design
		
Pensez au café pour les nuits blanches de codage ;) https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=noodom.fr%40gmail.com&currency_code=EUR&source=url
