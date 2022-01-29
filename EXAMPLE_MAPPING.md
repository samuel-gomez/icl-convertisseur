## Example mapping

---

### Scenario 1 : devise d'origine en EUR, modification de la devise de destination de EUR en CHF avec montant à 0

> Given :

- From a pour valeur EUR
- To a pour valeur EUR
- Montant a pour valeur 0
- Result affiche la valeur du champ montant (0)

> When :

- je change To pour la valeur CHF

> Then :

- Le champ To se met à jour avec la valeur CHF
- l'appel API ne s'effectue pas
- Result affiche la valeur du champ montant (0)

---

### Scenario 2 : devise d'origine en EUR, modification de la devise de destination de EUR en CHF avec montant à 10

> Given :

- From a pour valeur EUR
- To a pour valeur EUR
- Montant a pour valeur 10
- le champ est à l'état valide
- Result affiche la valeur du champ montant (10)

> When :

- je change To pour la valeur CHF

> Then :

- Le champ To se met à jour avec la valeur CHF
- l'appel API s'effectue
- Result affiche le loader puis le montant converti

---

### Scenario 3 : devise d'origine en EUR, modification de la devise de destination CHF en EUR avec montant à 10

> Given :

- From a pour valeur EUR
- To a pour valeur CHF
- Montant a pour valeur 10
- le champ est à l'état valide
- Result affiche la valeur du champ montant converti

> When :

- je change To pour la valeur EUR

> Then :

- Le champ To se met à jour avec la valeur EUR
- l'appel API ne s'effectue pas
- Result affiche la valeur du champ montant (10)

---

### Scenario 4 : devise d'origine et de destination en EUR avec montant à 0, modification du montant à 10

> Given :

- From a pour valeur EUR
- To a pour valeur EUR
- Montant a pour valeur 0
- le champ est à l'état valide
- Result affiche la valeur du champ montant (0)

> When :

- je change la valeur de montant à 10

> Then :

- Le champ Montant met à jour avec la valeur 10
- le champ est à l'état valide
- l'appel API ne s'effectue pas
- Result affiche la valeur du champ montant (10)

### Scenario 5 : devise d'origine et de destination en EUR avec montant à 0, modification du montant à 10p (erreur)

> Given :

- From a pour valeur EUR
- To a pour valeur EUR
- Montant a pour valeur 0
- le champ est à l'état valide
- Result affiche la valeur du champ montant (0)

> When :

- je change la valeur de montant à 0p

> Then :

- Le champ Montant met à jour avec la valeur 0p
- le champ est à l'état invalide
- l'appel API ne s'effectue pas
- Result affiche la valeur zero

### Scenario 6 : devise d'origine en EUR et de destination en CHF avec montant à pp10, modification du montant à 10 (correction)

> Given :

- From a pour valeur EUR
- To a pour valeur CHF
- Montant a pour valeur pp10
- le champ est à l'état invalide
- Result affiche la valeur zero

> When :

- je change la valeur de montant à 10

> Then :

- Le champ Montant met à jour avec la valeur 10
- le champ est à l'état valide
- l'appel API s'effectue
- Result affiche la valeur du champ montant converti

### Scenario 7 : devise d'origine en EUR avec montant à 10p, modification de la devise de destination de EUR en CHF (erreur)

> Given :

- From a pour valeur EUR
- To a pour valeur EUR
- Montant a pour valeur 10p
- le champ est à l'état invalide
- Result affiche la valeur zero

> When :

- je change To pour la valeur CHF

> Then :

- Le champ Montant ne change pas
- le champ reste à l'état invalide
- l'appel API ne s'effectue pas
- Result affiche toujours la valeur zero

---

### Scenario 8 : From = EUR, To = CHF et le montant est '5!' : modification du From puis saisie montant valide,

> Given :

- From a pour valeur EUR
- To a pour valeur CHF
- Montant a pour valeur 5!
- le champ est à l'état invalide
- Result affiche la valeur zero

> When :

- je change From pour la valeur CHF
- puis je change la valeur de montant à 5

> Then :

- Montant a pour valeur 5
- le champ est à l'état valide
- l'appel API doit s'effectuer même en cas d'erreur dans le champ afin d'avoir le tableaux de conversion à jour
- Result affiche la valeur du champ montant (5)

---

> Ce scenario n'est pas couvert

### Scenario 9 : double action, From = EUR, To = EUR, si je suis en erreur car le montant est '5!'

> Given :

- From a pour valeur EUR
- To a pour valeur CHF
- Montant a pour valeur 5!
- le champ est à l'état invalide
- Result affiche la valeur zero

> When :

- je change From pour la valeur CHF
- puis je change la valeur de montant à 5

> Then :

- Montant a pour valeur 5
- le champ est à l'état valide
- l'appel API s'effectue car la base currenty a été modifiée et From et To sont différents
- Result affiche le loader puis le montant converti

### Scenario 10 : From = CHF, To = EUR, le montant est '5', change le montant pour zero

> Given :

- From a pour valeur EUR
- To a pour valeur CHF
- Montant a pour valeur 5
- le champ est à l'état valide
- Result affiche le loader puis le montant converti

> When :

- puis je change la valeur de montant à 0

> Then :

- Montant a pour valeur 0
- le champ est à l'état reste valide
- l'appel API ne s'effectue pas
- Result affiche la valeur zero

### Scenario 11 : From = EUR, To = EUR, le montant est '0', change la devise puis change le montant à 5

> Given :

- From a pour valeur EUR
- To a pour valeur EUR
- Montant a pour valeur 0
- le champ est à l'état valide
- Result affiche la valeur zero

> When :

- je change la devise de To à CHF
- puis je change la valeur de montant à 5

> Then :

- Montant a pour valeur 5
- le champ est à l'état reste valide
- l'appel API doit s'effectuer car To et From sont différents entre eux ET différents de l'ancien état de From et To
- Result affiche le loader puis le montant converti

---

> ### Amélioration pour plus tard, avec cette API, seul le changement de la valeur de base_currency devrait provoquer l'appel à l'API, car pour une base_currency donnée, elle renvoie un tableau de convertions pour toutes les autres devises.
