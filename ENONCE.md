TP 1 - Tests unitaires (fonctionnels)
Modalités de rendu
Le rendu doit etre fait par email à teaching@glenux.net et contenir dans en sujet "FORMATION TEST CICD"

Avant de démarrer
Vous organiserez le projet comme suit

.
|- ENONCE.md
|- package.json
|- calculette.js
`- test/
    `- calculette.spec.js
Vous penserez également à installer les dépendances du projet en tapant

npm install
Méthodologie
Pour chacune des méthodes suivantes:

vous compléterez les tests unitaires pour la classe Calculette
vous lancerez les tests
vous compléterez la classe calculette afin que les tests passent (en vert)
Méthode substract(x)
La méthode substract doit retirer x de la valeur interne de la calculette
La méthode substract doit etre invariante quand x vaut zéro (0)
La méthode substract doit etre composable avec les autres méthodes
Méthode divide(x)
La méthode divide doit diviser la valeur interne par x
La méthode divide doit etre invariante quand x vaut un (1)
La méthode divide doit retourner une exception quand x vaut zéro (0)
La méthode divide doit etre composable avec les autres méthodes