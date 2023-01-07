


    const titre = document.querySelector(".titre_projet");
    const newDiv = document.createElement("div");
    titre.appendChild(newDiv);

    const buttonTous = document.createElement("button");
    newDiv.appendChild(buttonTous);
    buttonTous.innerHTML = "Tous";
    buttonTous.className = "btn";

    const buttonObjets = document.createElement("button");
    newDiv.appendChild(buttonObjets);
    buttonObjets.innerHTML = "Ojets";
    buttonObjets.className = "btn";

    const buttonAppart = document.createElement("button");
    newDiv.appendChild(buttonAppart);
    buttonAppart.innerHTML = "Appartements";
    buttonAppart.className = "btn";

    const buttonHotels = document.createElement("button");
    newDiv.appendChild(buttonHotels);
    buttonHotels.innerHTML = "Hotels & restaurants";
    buttonHotels.className = "btn";


/*const titreProjet = document.querySelector(".titre_projet");
const newUl = document.createElement("ul");

const filte = document.createElement("li");
document.querySelector("li");
const btnTous = document.createElement("button").innerHTML("Tous");
*/
//const objetsLi = document.createElement("li");
//const appartementsLi = document.createElement("li");
//const hotelsLi = document.createElement("li");
//titreProjet.appendChild("tousLi");


/*
fetch("http://localhost:5678/api/categories")
.then(res => res.json())
.then(function(category){
    for ( let i in category){
        let idObjets = category[i].name;
        let idAppartements = category[i].name;
        let idHotels = category[i].name;

    }
})
*/


/*
const boutonTous = document.querySelector("");
boutonTous.addEventListener(click,function(event){

});

const boutonObjets = document.querySelector("");
boutonObjets.addEventListener(click,function(event){

});

const boutonAppartements = document.querySelector("");
boutonAppartements.addEventListener(click,function(event){

});

const boutonHotels = document.querySelector("");
boutonHotels.addEventListener(click,function(event){

});
*/