
/****** création dynamique des boutons filtres ******/

// je créé une div pour inséré les boutons de filtrage des projets

    const titre = document.querySelector(".titre_projet");
    const newDiv = document.createElement("div");
    titre.appendChild(newDiv);
    newDiv.className = "btn-filtre"

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
const projet = await reponseProjet.json();

//j'élimine les doublons avec l'objet Set aprés avoir récupéré les projets.
const projetSet = new Set(projet)
const projets = Array.from(projetSet)


// je récupére les node list

let class1 = document.querySelectorAll(".class-1")
let class2 = document.querySelectorAll(".class-2")
let class3 = document.querySelectorAll(".class-3")

// je récupére les value de mes boutons

let valueTous = buttonTous.value
let valueObjet = buttonObjets.value
let valueAppart = buttonAppart.value
let valueHotel = buttonHotels.value

// evenements click filtre bouton 
// bouton tous
buttonTous.addEventListener('click', function (e) {
    e.preventDefault();
        for(let i in projets){
        let  listCat = projets[i].categoryId

            if (listCat !== valueTous){
                for( let i = 0 ; i < class1.length ; i++){
                    class1[i].style.display ="block";}
                for( let i = 0 ; i < class2.length ; i++){
                    class2[i].style.display ="block";}
                for( let i = 0 ; i < class3.length ; i++){
                    class3[i].style.display ="block";
                }}}

});

// bouton objets
buttonObjets.addEventListener('click', function (e) {
    e.preventDefault();
        for(let i in projets){
        let  listCat = projets[i].categoryId

            if (listCat == valueObjet){
                for( let i = 0 ; i < class1.length ; i++){
                    class1[i].style.display ="block";}               
            }
            else{
                for( let i = 0 ; i < class2.length ; i++){
                    class2[i].style.display ="none";}
                for( let i = 0 ; i < class3.length ; i++){
                    class3[i].style.display ="none";
                }
            }}
});

// bouton appart
buttonAppart.addEventListener('click', function (e) {
    e.preventDefault();
        for(let i in projets){
        let  listCat = projets[i].categoryId

            if (listCat == valueAppart){
                for( let i = 0 ; i < class2.length ; i++){
                    class2[i].style.display ="block";}            
            }
            else{
                for( let i = 0 ; i < class1.length ; i++){
                    class1[i].style.display ="none";}
                for( let i = 0 ; i < class3.length ; i++){
                class3[i].style.display ="none";
                }        
            }}
});

//bouton hotels et restaurants
buttonHotels.addEventListener('click', function (e) {
    e.preventDefault();
        for(let i in projets){
        let  listCat = projets[i].categoryId
    
            if (listCat == valueHotel){
                for( let i = 0 ; i < class3.length ; i++){
                class3[i].style.display ="block";
            }}
            else{
                for( let i = 0 ; i < class1.length ; i++){
                    class1[i].style.display ="none";}
                for( let i = 0 ; i < class2.length ; i++){
                    class2[i].style.display ="none";
                }         
            }}
});

