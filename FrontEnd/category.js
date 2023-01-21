
/****** création dynamique des boutons filtres ******/

// je créé une div pour inséré les boutons de filtrage des projets

    const titre = document.querySelector(".titre_projet");
    const newDiv = document.createElement("div");
    titre.appendChild(newDiv);

    const buttonTous = document.createElement("button");
    newDiv.appendChild(buttonTous);
    buttonTous.innerHTML = "Tous";
    buttonTous.className = "btn-tous";
    buttonTous.setAttribute("value",0)

    const buttonObjets = document.createElement("button");
    newDiv.appendChild(buttonObjets);
    buttonObjets.innerHTML = "Ojets";
    buttonObjets.className = "btn-objets";
    buttonObjets.setAttribute("value",1)

    const buttonAppart = document.createElement("button");
    newDiv.appendChild(buttonAppart);
    buttonAppart.innerHTML = "Appartements";
    buttonAppart.className = "btn-appart";
    buttonAppart.setAttribute("value",2)

    const buttonHotels = document.createElement("button");
    newDiv.appendChild(buttonHotels);
    buttonHotels.innerHTML = "Hotels & restaurants";
    buttonHotels.className = "btn-hotels";
    buttonHotels.setAttribute("value",3)
    
//je récupére les donnés categories du serveur et enregistre dans const categories

const reponseCategories = await fetch("http://localhost:5678/api/categories");
const categories = await  reponseCategories.json(); 

const reponseProjet = await fetch("http://localhost:5678/api/works");
const projets = await reponseProjet.json();


//
//
// ici mettre un set sur le retour de mon api de mes projets pour filtrer si des doublons sont enregistrer ?
//
//

// je récupére les node list

let class1 = document.querySelectorAll(".class-1")
let class2 = document.querySelectorAll(".class-2")
let class3 = document.querySelectorAll(".class-3")

// je récupére les value de mes boutons

let valueTous = buttonTous.value
let valueObjet = buttonObjets.value
let valueAppart = buttonAppart.value
let valueHotel = buttonHotels.value

// click filtre bouton 

buttonTous.addEventListener('click', function (e) {
    e.preventDefault();
        for(let i in projets){
        let  listCat = projets[i].categoryId

            if (listCat !== valueTous){
                console.log("cool")
                for( let i = 0 ; i < class1.length ; i++){
                    class1[i].style.display ="block";}
                for( let i = 0 ; i < class2.length ; i++){
                    class2[i].style.display ="block";}
                for( let i = 0 ; i < class3.length ; i++){
                class3[i].style.display ="block";
                }}
            else{
                console.log("pas cool")
            }}
});

buttonObjets.addEventListener('click', function (e) {
    e.preventDefault();
    //console.log(projets)
    //console.log(categories)
    //console.log(buttonObjets.value)
    //document.querySelector(".gallery").innerHTML = "" ;

        for(let i in projets){
        let  listCat = projets[i].categoryId
        console.log(listCat)

            if (listCat == valueObjet){
                console.log("cool")
               //document.querySelectorAll(".class-1").style.display ="block";
               class1[0].style.display="block";
               class1[1].style.display="block";               
            }
            else{
                console.log("pas cool")
                class2[0].style.display="none";
                class2[1].style.display="none";
                class2[2].style.display="none";
                class2[3].style.display="none";
                class2[4].style.display="none";
                class2[5].style.display="none";

                class3[0].style.display="none";
                class3[1].style.display="none";
                class3[2].style.display="none";         
                //document.querySelectorAll("."+ listCat).style.display = "none"; 
            }}
});

buttonAppart.addEventListener('click', function (e) {
    e.preventDefault();
        for(let i in projets){
        let  listCat = projets[i].categoryId
        console.log(listCat)

            if (listCat == valueAppart){
                console.log("cool")
               class1.style.display="block";
               class1[1].style.display="block";               
            }
            else{
                console.log("pas cool")
                class2[0].style.display="none";
                class2[1].style.display="none";
                class2[2].style.display="none";
                class2[3].style.display="none";
                class2[4].style.display="none";
                class2[5].style.display="none";

                class3[0].style.display="none";
                class3[1].style.display="none";
                class3[2].style.display="none";         
            }}
});

buttonHotels.addEventListener('click', function (e) {
    e.preventDefault();
        for(let i in projets){
        let  listCat = projets[i].categoryId
        console.log(listCat)
            if (listCat == valueHotel){
                console.log("cool")
               class1[0].style.display="block";
               class1[1].style.display="block";               
            }
            else{
                console.log("pas cool")
                class2[0].style.display="none";
                class2[1].style.display="none";
                class2[2].style.display="none";
                class2[3].style.display="none";
                class2[4].style.display="none";
                class2[5].style.display="none";

                class3[0].style.display="none";
                class3[1].style.display="none";
                class3[2].style.display="none";          
            }}
});
//  .removeClass('displayNone')     .addClass('filtre-...')  button.classList.add("active")



//j'élimine les doublons avec l'objet Set

//const monSet = newSet();

// console.log()