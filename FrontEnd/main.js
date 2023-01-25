
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
//if(localStorage.getItem('utilisateur')== userAdmin){

const cacherBtn = document.querySelector(".btn-filtre");
cacherBtn.style.display ="none";

const bandeNoir = document.querySelector("html");
const divNoir = document.createElement("div");
bandeNoir.prepend(divNoir);
divNoir.className = "div-noir";

const edition = document.createElement('a');
divNoir.appendChild(edition);
edition.innerHTML = '<i class="fa-regular fa-pen-to-square"></i> Mode édition';
edition.className = "a-edition";
//edition.setAttribute = 'href=""'

const boutonPublier = document.createElement('button');
divNoir.appendChild(boutonPublier);
boutonPublier.innerHTML = "publier les changements";
boutonPublier.className = "btn-publier";

const aLogout = document.querySelectorAll('header nav li a');
const logout =aLogout[2]
logout.innerHTML = "logout"

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

// création des lien dynamique
const modif = document.querySelectorAll('.a-titre ,.a-intro ,.a-photo');
//console.log(modif)
//modif.addEventListener("click",function(e){
  //e.preventDefault();

//création de modale
const modal= document.querySelector("body");
const divModal = document.createElement("div");
modal.appendChild(divModal);
//divModal.setAttribute(`href=${modif}`);
divModal.className= "modale";

const closeModale = document.createElement("button");
divModal.appendChild(closeModale);
closeModale.className = "close-modale";
closeModale.innerHTML = "X";

const titreModale = document.createElement("div");
divModal.appendChild(titreModale);
titreModale.className = "titre-modale";
titreModale.innerHTML = "<h3>Galerie photo</h3>";

const galleryModale = document.createElement("div");
divModal.appendChild(galleryModale);
galleryModale.className = "modale-galery"
//galleryModale.innerHTML = `
//  reprendre la boucle de la requete des projets
//                      `;

/* création des mini projets
const miniGallery = document.createElement("div");
galleryModale.appendChild(miniGallery)  
galleryModale.className = "mini-gallery"
*/
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


// si je clicl sur le btn x ou hors de la modal je ferme la modale
//});
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


