
/***************recupérer dynamiquement les donnés du server **************/

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
                        </figure>` }
            }) 
    
        .catch(function(erreur){
            console.log(erreur);
        })





/*
const data = fetch("http://localhost:5678/api/works")
                .then(data => data.json());
*/

 /*               
const dataArray = [];

const gallery = document.querySelector(".gallery");
const projet = document.createElement(`figure`);
        gallery.appendChild(projet);
       
const imageElement = document.createElement("img");
    projet.appendChild(imageElement);
const nomElement = document.createElement("figcaption");
    projet.appendChild(nomElement);

    imageElement.src = (dataArray.imageUrl);
    nomElement.innerText = (dataArray.titre);
      
*/


/*
const data = fetch("http://localhost:5678/api/works")
    .then(function(res){
        if (res.ok){
            return res.json()
        }
        else {
            console.log('erreur lors du chargement')}
    then(function(value){
        res.json = value
        })
    });
*/ 