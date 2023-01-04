
/***************recupérer dynamiquement les donnés du server **************/
//const gallery = document.querySelector(".gallery");
//const image = document.querySelectorAll("img");


// mettre en téte methode / content /header body.... ?????
const data = fetch("http://localhost:5678/api/works")
    .then(function(res){
        if (res.ok){
            return res.json()
        }
      else {
          console.log('erreur lors du chargement')}
        });
 


//  .document.prompt("erreur est survenue"))
/*const gallery = document.querySelector(".gallery");
gallery.innerHTML = "data";*/

//const dataGalery = document.querySelector('.gallery');

//let newData = document.createElement(div);

  /*  .createlement */

  /* tableau que l'on recupére du server par fetch
  [
    {
      "id": 1,
      "title": "Abajour Tahina",
      "imageUrl": "http://localhost:5678/images/abajour-tahina1651286843956.png",
      "categoryId": 1,
      "userId": 1,
      "category": {
        "id": 1,
        "name": "Objets"
      }
    }
  ]
  */