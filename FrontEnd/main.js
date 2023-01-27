
/***************recupérer dynamiquement les donnés du server **************/

 // je récupére les donnés des projets du serveur et enregistre dans const projets

const reponseProjet = await fetch("http://localhost:5678/api/works");
const projets = await reponseProjet.json();

// je fais disparaitre le contenue des projets
document.querySelector(".gallery").innerHTML = '';

// je créé une boucle pour incrémenter tous les projets

for(let i in projets){
    let url = projets[i].imageUrl;
    let title = projets[i].title;
    let id = projets[i].categoryId;              
    document.querySelector(".gallery").innerHTML +=
    
        `<div class=class-${id}>
            <figure>
                <img crossorigin="anonymous"  src=${url} alt="${title}}">
                <figcaption>${title}</figcaption>
            </figure>
        </div>` 
};

// verifier si local storage et si valid faire apparaitre et disparaitre
// json.parse
//if(localStorage.getItem('....') ===  userAdmin){


// je cache les filtres
const cacherBtn = document.querySelector(".btn-filtre");
cacherBtn.style.display ="none";

// je créé le bandeau noir mode édition
const bandeNoir = document.querySelector("html");
const divNoir = document.createElement("div");
bandeNoir.prepend(divNoir);
divNoir.className = "div-noir";

const edition = document.createElement('a');
divNoir.appendChild(edition);
edition.innerHTML = '<i class="fa-regular fa-pen-to-square"></i> Mode édition';
edition.className = "a-edition";

const boutonPublier = document.createElement('button');
divNoir.appendChild(boutonPublier);
boutonPublier.innerHTML = "publier les changements";
boutonPublier.className = "btn-publier";

// je change dans la nav login en logout
const aLogout = document.querySelectorAll('header nav li a');
const logout =aLogout[2]
logout.innerHTML = "logout"

// j'intégre les boutons modifier 
const modifierPhoto = document.querySelector("#introduction figure");
const modifPhoto = document.createElement("a");
modifierPhoto.appendChild(modifPhoto);
modifPhoto.className = "a-photo";
modifPhoto.innerHTML = '<i class="fa-regular fa-pen-to-square"></i> modifier'

const modifierIntro = document.querySelector("#introduction article");
const modifIntro = document.createElement("a");
modifierIntro.prepend(modifIntro);
modifIntro.className = "a-intro";
modifIntro.innerHTML = '<i class="fa-regular fa-pen-to-square"></i> modifier'

const modifierTitre = document.querySelector(".titre_projet");
const modifTitre = document.createElement("a");
modifierTitre.appendChild(modifTitre);
modifTitre.className = "a-titre";
modifTitre.innerHTML = '<i class="fa-regular fa-pen-to-square"></i> modifier'

// je regroupe les boutons modifier pour ouvrir modale
const modif = document.querySelectorAll('.a-titre ,.a-intro ,.a-photo');

//création de modale
const modal= document.querySelector("body");
const modaleContainer = document.createElement("div");
modal.appendChild(modaleContainer);
modaleContainer.className = "modale-container modale-container-stop"

const divModal = document.createElement("div");
modaleContainer.appendChild(divModal);
divModal.className= "modale";

const closeModale = document.createElement("button");
divModal.appendChild(closeModale);
closeModale.className = "btn-close";
closeModale.innerHTML = "X";

const titreModale = document.createElement("div");
divModal.appendChild(titreModale);
titreModale.className = "titre-modale";
titreModale.innerHTML = "<h3>Galerie photo</h3>";

const galleryModale = document.createElement("div");
divModal.appendChild(galleryModale);
galleryModale.className = "modale-galery"

// creation des projets en mini pour modification dans   modaleGallery

// <i class="fa-light fa-trash-can"></i> poubelle
// <i class="fa-solid fa-arrows-up-down-left-right"></i>  deplacement
for(let i in projets){
  let url = projets[i].imageUrl;
  let title = projets[i].title;
  let id = projets[i].id;              
  document.querySelector(".modale-galery").innerHTML +=
      `
      <div class="mini-gallery">
          <div id="${id}">
              <div class="move-img"<i class="fa-solid fa-arrows-up-down-left-right"></i></div>
              <img class="img-mini"crossorigin="anonymous" src=${url} alt="${title}}">
              <a class="edit-modale">éditer</a>
          </div>
      </div>
      `
    };

const ligneModale = document.createElement("div");
divModal.appendChild(ligneModale);
ligneModale.className = "ligne-modale";

const btnModale = document.createElement("button");
divModal.appendChild(btnModale);
btnModale.className = "btn-modale";
btnModale.innerHTML = "Ajouter une photo";

const suppModale = document.createElement("a");
divModal.appendChild(suppModale);
suppModale.className = "supp-modale";
suppModale.innerHTML = "Supprimer la galerie";

// jouvre la modal en cliquant sur les boutons modifier 

modif.forEach(btn => btn.addEventListener('click', function (e){
  e.preventDefault();
  modaleContainer.style.display = "block";
  modal.classList.toggle("active");
}));

// je ferme la modale avec la croix
closeModale.addEventListener("click",function (e){
  e.preventDefault();
  modaleContainer.style.display = "none";
  modal.classList.toggle("active");
});

// je ferme la modale en cliquant hors de la modale
const fermer = function (e){
  e.preventDefault();
  divModal.addEventListener("click",function (e){e.stopPropagation();})
  modaleContainer.style.display = "none";
  modal.classList.toggle("active");
}

modaleContainer.addEventListener("click",fermer);

/*
modif.forEach(btn => btn.addEventListener("click",openModale));
document.querySelector(".btn-close").addEventListener("click",closeModal,windowOnClick);
*/

//modif.forEach(btn => btn.addEventListener("click",openModale))

  //modaleContainer.classList.toggle("active");
  //modal.classList.toggle("active");


// si je click sur le btn x ou hors de la modal je ferme la modale


//});

// modale ajouter nouveaux projets
// création de la modale 
/*
btnModale.addEventListener("click", function(e){
  e.preventDefault();

})
*/

/*
btnModale.addEventListener("click",(ouvreModaleAjout)){
ouvreModaleAjout.classList.toogle("active");
}


function ouvreModaleAjout (){

}*/
// evenement click  nouveaux projets




/* modif suppression des projets sur la petites poubelle et click supprimer la galerie select all

modif.forEach(btn => btn.addEventListener("click",toggleModale))

function toggleModale(){
  modaleContainer.classList.toggle("active");
  modal.classList.toggle("active")
}
*/

/* click bouton envoie vers ajout de nouveaux projet modal 2

modif.forEach(btn => btn.addEventListener("click",toggleModale))

function toggleModale(){
  modaleContainer.classList.toggle("active");
  modal.classList.toggle("active")
}
*/

/*
// publication de nouveau projets

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('image' = null);
formData.append('titre'= null);
formData.append('category'= null);

fetch('http://localhost:5678/api/works', {
  method: 'POST',
  headers: {
            'accept' : 'application/json',
            'content-type' : 'multipart/form-data',
            } 
  body: formData
})
  .then((response) => response.json())
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
*/
//}


/* modal grafi......
let etatModal = null;

const openModale = function (e){
  e.preventDefault();
  const target = (e.target.querySelector(".modale-container"));
  console.log(target)
  target.style.display = null ;
  etatModal = target ;
  etatModal.addEventListener("click", closeModal);
  etatModal.querySelector(".btn-close").addEventListener("click", closeModal);
  etatModal.querySelector(".modale-container-stop").addEventListener("click", stopPropagation);
}

modif.forEach(btn => btn.addEventListener("click",openModale))

const closeModal = function (e){
  if (etatModal === null) return
    e.preventDefault();
    modaleContainer.style.display = "none";
    etatModal.querySelector(".btn-close").removeEventListener("click", closeModal);
    etatModal.querySelector(".modale-container-stop").removeEventListener("click", stopPropagation);
    etatModal = null ;
}

const stopPropagation = function (e){
  e.stopPropagation();
}
*/