# Widget V4 led Scroller

![](doc/images/ledScroller.png)

## A récupérer sous /jeedom_widgets/ledScroller/V4/index.html

## Création du widget

![](doc/images/creationWidget.png)

- Depuis la page d'édition de widgets (Menu Outils -> Widget),
	- Sélectionner dashboard, puis sélectionner Nouveau
	- Dans les options, préciser Version:Dashboard, Type:Info, Sous-type:Autre et Nom:ledScroller
	- Sélectionner Créer pour valider
	- Dans la zone d'édition, coller le code du widget contenue dans index.html
	- Sélectionner Sauvegarder

## (facultatif) Création d'un virtuel avec commande info

![](doc/images/commandeInfo.png)

- Si vous souhaitez associer le widget à une commande existante, cette étape n'est pas nécessaire
- Sinon, si vous souhaitez créer un nouveau led scroller :
	- Créer un virtuel depuis le plugin Virtuel (Plugin -> Programmation -> Virtuel)
	- Dans ce virtuel, ajouter une commande info et de sous-type Autre
		- Les caractères autorisés du champ texte sont :
			ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890°#|'€"/%[]()-*+=?!:,.
		- Ce champ texte peut être modifié par scénario avec la commande event : la mise à jour du texte sera alors immédiate sur le design

![](doc/images/scenarioEvent.png)

## association du widget à la commande info

![](doc/images/associationCommandeWidget.png)

	- Depuis la commande info, sélectionner la roue dentée
	- Sélectionner l'onglet Affichage
	- Sélectionner CustomTemp/ledScroller dans la liste des widgets proposés pour Widget en mode Dashboard
	- Enregistrer
	
## (facultatif) Paramètres de la commande associée au widget

![](doc/images/parametresWidget.png)

	- Pour changer la couleur des leds allumées, ajouter le paramètre couleurLed avec le code couleur souhaitée (par défaut #0ff)
	- Pour changer la couleur des leds de fond éteintes, ajouter le paramètre couleurFondLed avec le code couleur souhaitée (par défaut #121212)

	- Pour changer la vitesse de défilement (nombre de rafraichissements par seconde), ajouter le paramètre vitesseDefilement (par défaut 300)

## Ajout dans un design

	- Depuis un design, ajouter l'équipement ou le virtuelsuivez les étapes suivantes :
		- Clic droit, Sélectionnez 'Edition'
		- Clic droit, puis sélectionnez 'Ajouter équipement'
		- Sélectionner l'équipement souhaité
		- Sélectionner Valider
		- Rafraichir la page : le led Scroller est visible dans le design
