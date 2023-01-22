// Récupération des vélos depuis le fichier JSON
const reponse = await fetch('bikes.json');
const bikes = await reponse.json();

function generateBikes(bikes){
    for (let i = 0; i < bikes.length; i++) {

        const article = bikes[i];
        // Récupération de l'élément du DOM qui accueillera les cards
        const sectionCards = document.querySelector(".cards");
        // Création d’une balise dédiée à un vélo
        const bikeElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nameElement = document.createElement("h2");
        nameElement.innerText = article.name;
        const priceElement = document.createElement("p");
        priceElement.innerText = `prix: ${article.price} € (${article.price < 300 ? "€" : "€€€"})`;
        const categoryElement = document.createElement("p");
        categoryElement.innerText = article.category ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.availability ? "En stock" : "Rupture de stock";
        
        // On rattache la balise article a la section cards (cards)
        sectionCards.appendChild(bikeElement);
        // On rattache l’image à bikesElement (la balise article)
        bikeElement.appendChild(imageElement);
        bikeElement.appendChild(nameElement);
        bikeElement.appendChild(priceElement);
        bikeElement.appendChild(categoryElement);
        //Ajout des éléments au DOM pour l'exercice
        bikeElement.appendChild(descriptionElement);
        bikeElement.appendChild(stockElement);
    
     }
}

generateBikes(bikes);


//Gestion des boutons
const buttonSort = document.querySelector(".btn-trier");

buttonSort.addEventListener("click", function () {
    const bikesSorted = Array.from(bikes);
    bikesSorted.sort(function (a, b) {
        return a.price - b.price;
     });
     document.querySelector(".cards").innerHTML = "";
    generateBikes(bikesSorted);
});

const buttonFilter = document.querySelector(".btn-filtrer");

buttonFilter.addEventListener("click", function () {
    const bikesFiltered = bikes.filter(function (bike) {
        return bike.price <= 300;
    });
    document.querySelector(".cards").innerHTML = "";
    generateBikes(bikesFiltered);
});

const buttonDecreasing = document.querySelector(".btn-decroissant");

buttonDecreasing.addEventListener("click", function () {
    const bikesSorted = Array.from(bikes);
    bikesSorted.sort(function (a, b) {
        return b.price - a.price;
     });
     document.querySelector(".cards").innerHTML = "";
    generateBikes(bikesSorted);
});

const inputpriceMax = document.querySelector('#price-max')

inputpriceMax.addEventListener('input', function(){
    const bikesFiltered = bikes.filter(function(bike){
        return bike.price <= inputpriceMax.value;
    });
    document.querySelector(".cards").innerHTML = "";
    generateBikes(bikesFiltered);  
})