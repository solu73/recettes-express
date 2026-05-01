let recettes = [];

// Charger les 3 fichiers de recettes
Promise.all([
  fetch("recettes/recettes_poele_four.json").then(r => r.json()),
  fetch("recettes/recettes_cookeo.json").then(r => r.json()),
  fetch("recettes/recettes_barbecue.json").then(r => r.json())
])
.then(([poeleFour, cookeo, barbecue]) => {
  recettes = [...poeleFour, ...cookeo, ...barbecue];
  afficherRecettes();
})
.catch(err => console.error("Erreur chargement recettes :", err));
