
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
//if()

/*
// solution alternative sans récupéré dans une constante

fetch("http://localhost:5678/api/works")
        .then(res => res.json())
        .then(function(element){
            document.querySelector(".gallery").innerHTML = '';
            for(let i in element){
                let url = element[i].imageUrl;
                let title = element[i].title;
                document.querySelector(".gallery").innerHTML +=
                        `<figure>
                                <img crossorigin="anonymous" src=${url} alt="${title}}">
                                <figcaption>${title}</figcaption>
                        </figure>` 
                        }
            })

        .catch(function(erreur){
            console.log(erreur);
        })
  */     
        //console.log(element)
