
/****** création dynamique des boutons filtres ******/

// je créé une div pour inséré les boutons de filtrage des projets

    const titre = document.querySelector(".titre_projet");
    const newDiv = document.createElement("div");
    titre.appendChild(newDiv);

    const buttonTous = document.createElement("button");
    newDiv.appendChild(buttonTous);
    buttonTous.innerHTML = "Tous";
    buttonTous.className = "btn";
    let btnTous = null;

    const buttonObjets = document.createElement("button");
    newDiv.appendChild(buttonObjets);
    buttonObjets.innerHTML = "Ojets";
    buttonObjets.className = "btn";
    let btnObjets = null;

    const buttonAppart = document.createElement("button");
    newDiv.appendChild(buttonAppart);
    buttonAppart.innerHTML = "Appartements";
    buttonAppart.className = "btn";
    let btnAppart = null;

    const buttonHotels = document.createElement("button");
    newDiv.appendChild(buttonHotels);
    buttonHotels.innerHTML = "Hotels & restaurants";
    buttonHotels.className = "btn";
    let btnHotels = null;

//je récupére les donnés categories du serveur et enregistre dans const categories

const reponseCategories = await fetch("http://localhost:5678/api/categories");
const categories = await  reponseCategories.json();

// je créé un évènement a chaque bouton
document.querySelectorAll("button")
    .addEventListener("click",(e){
    
    e.stopPropagation()
    console.log(click)
    });

function eventCategory (projets){
    for (let i in projets){
        if (i.idCategory === categories){


            //console.log()
        } else if {


            //console.log()
        } else if{


            //console.log()
        }
        return projets
   //console.log()
    }
}


//console.log()


// je créé une boucle pour récupéré a l'intérieur de categories et assigne des valeurs au bouton
/*
for (let i in categories){
    let btnTous = i;
    let btnObjets = categories[0];
    let btnAppart = categories[1];
    let btnHotels = categories[2];
    console.log(btnTous)
    console.log(btnObjets)
    console.log(btnAppart)
    console.log(btnHotels)
} 
*/
//j'élimine les doublons avec l'objet Set
//const monSet = new Set();

    
   



 /*   
const = filtreTous = el.filter(function (category)){
    return category.category;
    console.log(el);
    console.log(category);
    
}
})

buttonObjets.addEventListener("click",function(){

})

buttonAppart.addEventListener("click",function(){

})

buttonHotels.addEventListener("click",function(){

})
*/


// si je clic sur le bouton objets je souhaite garder les éléments de l'id objets

//buttonObjets.addEventListener("click",function(event){
    //event.preventDefault();
        
  /*  for(let i in element){
        document.querySelector(".gallery");
        let elId = element[i].id;
        document.querySelector(".gallery").innerHTML += ;
        
    }
        
      //  document.innerHtml = ""
       // console.log(category)
    });*/
  //  console.log(buttonTous)
  //  console.log(btnTous)

//});   ici///////////

//   for ( let i in category && element){ document.querySelector(".gallery").innerHTML += ;









/* 
 function clic(btn) associé .value

 return innerHtml = ""  les objets a l'id ou le non de la category
*/

//  monSet.add(el)
//  monSet.values()
/*
        let id = category[i].id;
        let name = category[i].name;
    
        btnTous = 
        console.log(id)
        console.log(name)
    */    
       // console.log()

   // const elEntries = object.entries(el)

   // let id = new Set (el)
       // console.log(elEntries);
        
        //let idObjets = category[i].name;
        //let idAppartements = category[i].name;
        //let idHotels = category[i].name;




//const filtrage = new Set ([...el].filter(el.name => set2.has(name)));
// console.log(filtrage);



/*
recupéré 
let data = null;   
fetch("http://localhost:5678/api/categories")
.then(res => res.json())
.then(category => 
   {
    data = category
   });
*/
