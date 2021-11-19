// Modification n°1
function changeTitles() {
  document.querySelector(".change01").textContent = "Ce que j'ai appris à THP";
  document.querySelector(".change02").textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous ";
}
changeTitles()


// Modification n°2

function changeCallToActions(){
  document.querySelector(".change03").textContent = "OK je veux tester ";
  document.querySelector(".change03").href = "http://www.thehackingproject.org";
}
changeCallToActions()
// Modification n°3
function changeLogoName(){
  document.querySelector(".change04").textContent = "The THP Experience";
  document.querySelector(".change04").style.fontSize = "2em";
}
changeLogoName()
// Modification n°4
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
function populateImages() {
  let index = 0;
  document.querySelectorAll(".card-img-top").forEach(card => {
    card.src = imagesArray[index]
    index ++;
  })
}
populateImages()


// Modification n°5
function deleteLastCards(num) {
  //num est le nombre de cards à suprimmer
  let num_rest = document.querySelectorAll(".card.mb-4.box-shadow").length - num; // est le nombre de cards à conserver
  let index = 0;
  document.querySelectorAll(".card.mb-4.box-shadow").forEach(card => {
    if (index >= num_rest) {
      card.remove();
    }
    index ++;
  })
}
deleteLastCards(3)