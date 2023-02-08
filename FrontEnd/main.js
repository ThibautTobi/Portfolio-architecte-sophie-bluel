
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

/****************************** espace Administrateur  ****************************************/
// verifier si il y a un localstorage et si oui faire apparaitre

if (localStorage.getItem("user") !== null){
  const local = localStorage.getItem("user");
  const localParse = JSON.parse(local);
  const token = localParse.token;
 
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

  // je supprime le localstorage quand je click sur logout pour se deconnecter
  logout.addEventListener("click",function (e){
    e.preventDefault;
    window.localStorage.removeItem("user");
  })

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

  //création du conteneur modale
  const modal= document.querySelector("body");
  const modaleContainer = document.createElement("div");
  modal.appendChild(modaleContainer);
  modaleContainer.className = "modale-container"

  // création de la div modale
  const divModal = document.createElement("div");
  modaleContainer.appendChild(divModal);
  divModal.className= "modale";

  function modale (){
    divModal.innerHTML =
    `
        <button class="btn-close">X</button>
        <div class="titre-modale">
          <h3>Galerie photo</h3>
        </div>
        <div class="modale-galery"></div>
        <div class="ligne-modale"></div>
        <button class="btn-modale">Ajouter une photo</button>
        <a class="supp-gallery">Supprimer la galerie</a>
    `
    };
  //j'appelle la fonction modale
  modale();

  // creation des projets en mini pour afficher et modifier
  function miniProjet (){
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
        }

    // je fait aparaitre la fleche si c'est le premier élément de la liste  
    const lesMiniGallery = document.querySelectorAll(".mini-gallery");
    const premiererDiv = lesMiniGallery.item(0);
    const targetFleche = premiererDiv.querySelector(".fleche");

    targetFleche.style.display = "block";
  };
  //j'appelle la function miniProjet
  miniProjet();

  // je recupére la div modale dans une constante 
  const divModale = document.querySelector(".modale");

  // je créé mes fonction ouverture fermeture et stop propagation
    function open (e){
      e.preventDefault();
      divModale.addEventListener("click",function (e){e.stopPropagation();})
      modaleContainer.style.visibility= "visible";
    };

    function close (e){
      e.preventDefault();
      e.stopPropagation();
      modaleContainer.style.visibility= "hidden";
    };
   
  // je regroupe les boutons modifier pour ouvrir modale
  const modif = document.querySelectorAll('.a-titre ,.a-intro ,.a-photo');

  // j'ouvre la modal en cliquant sur les boutons modifier 
  modif.forEach(btn => btn.addEventListener('click', open));

  // je ferme la modale avec la croix
  const btnCloseModale = document.querySelector(".btn-close");
  btnCloseModale.addEventListener("click",close);

  //si je click en dehors de la modale je ferme la modale
  function clickContainer(e){
    e.preventDefault();
    divModale.addEventListener("click",function (e){e.stopPropagation();})
    modaleContainer.style.visibility= "hidden";
  };

  modaleContainer.addEventListener("click", clickContainer);
  // je supprime un élément en cliquant sur l'icone de la poubelle
  function suppUnProjet (){
  const suppProjet = document.querySelectorAll(".poubelle");

  suppProjet.forEach(a => a.addEventListener("click",function(e){
    e.preventDefault;
    let id = a.getAttribute("id");
    let divElementId = document.getElementById(`${id}`);
    divElementId.parentNode.remove();

    fetch (`http://localhost:5678/api/works/${id}`, {
        method : 'DELETE',
        headers :{
          'content-type' : 'application/json',
          'Authorization' : `Bearer ${token}`,
        }}
        .then(res => {
          if (res.ok)
          {alert("la suppression du projet a réussi")
          console.log("sa marche")
          }
        else {
          alert("Erreur le projet n'a pas été supprimer")
          console.log("sa ne marche pas")
        }})  
  )}
  ));
  };

  suppUnProjet();

  // suppression de toutes la gallerie avec le bouton supprimer la galerie
  console.log(projets)
  function suppAllProjets (){
  const suppAll = document.querySelector(".supp-gallery");

  suppAll.addEventListener("click",function(e){
    e.preventDefault;

    for (let i in projets){
      let id = projets[i].id;

      fetch (`http://localhost:5678/api/works/${id}`, {
          method : 'DELETE',
          headers :{
            'content-type' : 'application/json',
            'Authorization' : `Bearer ${token}`,
          }})
    
          .then(res => {
            if (res.ok)
            {alert("la suppression des projets a réussi")
            console.log("sa marche")
            }
          else {
            alert("Erreur les projets n'ont pas été supprimer")
            console.log("sa ne marche pas")
          }})  
        }
  });
  };

  // j'appel la fonction
  suppAllProjets();

  // modale ajouter nouveaux projets , je remplace le innerHTML
  function modaleAjout (){
    divModale.addEventListener("click",function (e){e.stopPropagation()});
    divModale.innerHTML =
    `
        <div class="ajout-nav">
          <button class="nav-fleche">
            <img src="./assets/icons/Arrow_Back.svg" alt="fleche-retour" class="fleche-retour">
          </button>
          <button class="nav-close">X</button>
        </div>
        <h3 class="ajout-titre">Ajout photo</h3>
        <form method="POST" enctype="multipart/form-data" id="ajout-form">
          <div class="ajout-photo">
          
            <div class="ajout-img">
              <img class="image-upload" src="#" alt="image">
              <i class="fa-thin fa-image image-icone"></i>
            </div>

            <label for="image_uploads" class="ajout-photo-btn">+ Ajouter photo</label>
            <input type="file" id="image_uploads" name="image" accept=".jpg, .png" size="4000" required>
            
            <p class="ajout-descrip">jpg, png : 4mo max</p>
          </div>
          <label class="ajout-label-titre">Titre</label>
          <input class="ajout-input-titre" name="title" required>
          <label class="ajout-label-category">Catégorie</label>
          <select class="ajout-input-category" name="category" required>
            <option value=""></option>
            <option value="Objets">Objets</option>
            <option value="Appartements">Appartements</option>
            <option value="Hôtels & restaurants">Hôtels & restaurants</option>
          </select>
          <div class="ajout-ligne"></div>
          <button type="submit" class="ajout-btn">Valider</button>
        </form>`

    // fermeture de la modale en cliquant sur la croix  
    const closeAjout = document.querySelector(".nav-close");
    closeAjout.addEventListener("click",close);
      
    // je fait apparaitre la photo a ajouter
    const btnAjoutPhotoForm = document.querySelector(".ajout-photo-btn");
    const btnAjoutPhoto = document.querySelector("#image_uploads");
    const descriptifPhoto = document.querySelector(".ajout-descrip");

    const preview = (event) =>{
      if (event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        let voir = document.querySelector(".image-upload");
        voir.src = src;
        voir.style.display="block";
        btnAjoutPhoto.style.visibility = "hidden";
        descriptifPhoto.style.visibility = "hidden";
        btnAjoutPhotoForm.style.visibility = "hidden";
      }}

      btnAjoutPhoto.addEventListener("change", function (e){
        e.preventDefault();
        preview(e)
      });
  
  // publication de nouveau projets
  const formulaire =divModale.querySelector("#ajout-form");
  const btnAjoutProjet = document.querySelector(".ajout-btn");
/*
  const imageForm = formulaire.querySelector("#image_uploads");


  const titreForm = formulaire.querySelector(".ajout-input-titre");
  const categoryForm = formulaire.querySelector(".ajout-input-category");
  */

const dataForm = new FormData();
    
dataForm.append("image", imageForm.files[0] , imageForm);
dataForm.append("title", titreForm.value);
dataForm.append("category", categoryForm.value);


  // je soumet le formulaire
  btnAjoutProjet.addEventListener("click", async function(e){
    e.preventDefault();


  await fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: {
              //'accept': 'application/json',
              
              'Authorization' : `Bearer ${token}`,
              }, 
    body: new FormData(formulaire),   // category parseInt     
 })
 .then((reponse) => reponse.json())
 .then((data) => {console.log(data)});

 })


/*                                                   envoi requete mais pas bon format category  parseInt a faire
await fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: {
              //'accept': 'application/json',
              
              'Authorization' : `Bearer ${token}`,
              }, 
    body: new FormData(formulaire),   // category parseInt     
 })
 .then((reponse) => reponse.json())
 .then((data) => {console.log(data)});

*/



  //retour en arriére si je click sur la fleche
    const retourFleche = document.querySelector(".fleche-retour");
    console.log(retourFleche)
    retourFleche.addEventListener("click", function (e){
      e.preventDefault();
      modale();
      miniProjet();
      suppUnProjet();
      suppAllProjets();
      document.querySelector(".btn-close").addEventListener("click",close);
      document.querySelector(".btn-modale").addEventListener("click",modaleAjout);
    });
    
};
  
// click bouton ouvre la modale ajout de nouveaux projet
const btnAjout = document.querySelector(".btn-modale");
btnAjout.addEventListener("click", modaleAjout);

}; // fin de l'espace administrateur
