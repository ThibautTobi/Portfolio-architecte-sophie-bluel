
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


//console.log(projets)

// verifier si local storage et si valid faire apparaitre et disparaitre
// json.parse

//if(localStorage.getItem("user")){
  // ou
// if (localStorage.getItem("user") !== null){

// ajouter si click sur logout window.localStorage.removeItem("user"); ?


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

// creation des projets en mini pour modification

for(let i in projets){
  let url = projets[i].imageUrl;
  let title = projets[i].title;
  let id = projets[i].id;              
  document.querySelector(".modale-galery").innerHTML +=
      `
      <div class="mini-gallery">
          <div id="${id}">
              <div class="move-img">
                <i class="fa-solid fa-arrows-up-down-left-right fleche"></i>
                <a class="poubelle" id="${id}">
                  <img class="img-poubelle" src="./assets/icons/poubelle-Vector.svg">
                </a>
                <img class="img-mini"crossorigin="anonymous" src=${url} alt="${title}}" >
              </div>
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
suppModale.className = "supp-gallery";
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

// modif suppression des projets sur la petites poubelle

const suppProjet = document.querySelectorAll(".poubelle");

const lesMiniGallery = document.querySelectorAll(".mini-gallery");

// je fait disparaitre les fleche si ce n'est pas le premier élément
   
//console.log()

suppProjet.forEach(a => a.addEventListener("click",function(e){
  e.preventDefault;
let id = a.getAttribute("id");
//console.log(id)


/*


 voir .id probleme console 



*/
/*
for(let i in lesMiniGallery){
  
   let element = lesMiniGallery[i].firstElementChild;
  
   //console.log(element)
  
     if (id === element.id){
        element.parentElement.remove();
        }
}
*/
/*
  fetch ("http://localhost:5678/api/works/${id}", {
      method : 'DELETE',
      headers :{
        'content-type' : 'application/json'
        'Authorization' : 'user'
      }}
      //.then(reponse => {(reponse.ok() => alert("la suppression a réussi")});
      
);
*/
}));

// suppression de toutes la gallerie avec le bouton supprimer la galerie

const suppAll = document.querySelector(".supp-gallery");

suppAll.addEventListener("click",function(e){
  e.preventDefault;
  for(let i in lesMiniGallery){
    let element = lesMiniGallery[i].firstElementChild;
    //let id = element.id;
        element.remove();
        //console.log(element)
        //console.log(id)
  /*
  fetch ("http://localhost:5678/api/works/${id}", {
      method : 'DELETE',
      headers :{
        'content-type' : 'application/json'
        'Authorization' : 'user'
      }}
      //.then(reponse => {(reponse.ok() => alert("la suppression a réussi")});
      
);
*/
/*
for(let i = 0 ; i < lesMiniGallery.length ; i--){
*/
}

});



/*
suppAll.addEventListener("click",function(e){
  e.preventDefault;
  //console.log(lesMiniGallery)

  for(let i in lesMiniGallery){
    let number = lesMiniGallery[i].length;
    number.forEach.remove();
  }
  
  //for( i = 0 ; i < lesMiniGallery.length ; i--){
  //  lesMiniGallery[i].remove();
  //}
*/


/*
for(let i in projets){
  let supp = projets[i].id
    //for(s = 0 ; s < supp.length ; i--))
      fetch ("http://localhost:5678/api/works/${id}", {
          method : 'DELETE',
          headers :{
            'content-type' : 'application/json'
            'Authorization' : `Bearer ${sessionStorage["token"]}`
          }}
      .then(reponse => (reponse.ok());
    }

);
*/

//});



// click bouton envoie vers ajout de nouveaux projet modal 2

/*
btn.addEventListener("click",function (e){
  .modale-ajout
})
*/


// modale ajouter nouveaux projets
// création de la modale 

btnModale.addEventListener("click", function (e){
  e.preventDefault;
  /*
  divModal.innerHTML = 
  `
    <div class="ajout-modale"></div>
      <div class="ajout-nav">
        <a class="nav-fleche"></a>
        <a class="nav-croix"></a>
      </div>
      <h3 class="ajout-titre">Ajout photo</h3>
      <form class="ajout-form">
        <div class="ajout-photo">
          <img class="ajout-img">
          <button>+ Ajouter photo</button>
          <p class="ajout-descrip">jpg, png : 4mo max</p>
      </div>
      <label class="ajout-label-titre">
      <input class="ajout-input-titre">
      <label class="ajout-label-category">
      <input class="ajout-input-category">
      </form>
    <div class="ajout-ligne">
    </div>
    <button class="ajput-btn">Valider</button>
    </div>
  `*/
})
/*
innerHTML = 
`
	<div class="ajout-modale"></div>
		<div class="ajout-nav">
			<a class="nav-fleche"></a>
			<a class="nav-croix"></a>
		</div>
		<h3 class="ajout-titre">Ajout photo</h3>
		<form class="ajout-form">
			<div class="ajout-photo">
        <img class="ajout-img">
				<button>+ Ajouter photo</button>
        <p class="ajout-descrip">jpg, png : 4mo max</p>
		</div>
    <label class="ajout-label-titre">
		<input class="ajout-input-titre">
    <label class="ajout-label-category">
		<input class="ajout-input-category">
		</form>
	<div class="ajout-ligne">
	</div>
	<button class="ajput-btn">Valider</button>
	</div>
`
*/


// evenement click  nouveaux projets




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

