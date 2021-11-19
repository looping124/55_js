// Question 1 :
// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
console.log(`Il y a ${document.getElementsByTagName("p").length} balises p dans cette page.`);

// Question 2 :
// Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
console.log(`L'élément avec l'id \"coucou\" est : ${document.getElementById("coucou").textContent}`);

// Question 3 :
// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
console.log(`L'élément vers laquelle pointe le 3ème élément <a> de la page HTML est : ${document.getElementsByTagName("a")[2].textContent}`);

// Question 4 :
// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
console.log(`Il y a ${document.getElementsByClassName("compte-moi").length} éléments portant la classe \"compte-moi\" dans cette page.`);


// Question 5 :
// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
console.log(`Il y a ${document.querySelectorAll("li.compte-moi").length} éléments <li> portant la classe \"compte-moi\" dans cette page.`);

// Question 6 :
// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
console.log(`Il y a ${document.querySelectorAll("ol li").length} éléments <li> et situés dans une liste ordonnée dans cette page :`);
console.log(document.querySelectorAll("ol li"));

// Question 7 :
// Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…
console.log(document.querySelectorAll("div > ul > li:first-child")[1].textContent);

