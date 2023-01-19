/**********methode envoi projet *******/

/*
fetch((http://localhost:5678/api-docs/#/default/post_works)
{
  method: "post",
  Headers: {
      "accept" : "application/json"
      "content-type" : "multipart/form-data"
  },
  body: JSON.stringify ({title:""})
        `{"imageUrl":""}`
        `{"category":""}`
  }
})
 */


// création d'une class projet
 class nouveauProjet {
    constructor([id, title, imageUrl, categoryId, userId,category ,[id, name]]){
      this.id = id;
      this.title = title;
      this.imageUrl = imageUrl;
      this.categoryId = categoryId;
      this.userId = userId;
      this.category = category = [this.id = id, this.name =name,]
  }
  appendElement (element){
      element.innerHtml = `<figure>
                            <img crossorigin="anonymous" src=${url} alt="${title}}">
                            <figcaption>${title}</figcaption>
                          </figure>`
  }
 }
 
// requette travail a supprimer 
/*

*/

//         input.report validity();
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