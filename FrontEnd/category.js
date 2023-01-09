


    const titre = document.querySelector(".titre_projet");
    const newDiv = document.createElement("div");
    titre.appendChild(newDiv);

    const buttonTous = document.createElement("button");
    newDiv.appendChild(buttonTous);
    buttonTous.innerHTML = "Tous";
    buttonTous.className = "btn";

    const buttonObjets = document.createElement("button");
    newDiv.appendChild(buttonObjets);
    buttonObjets.innerHTML = "Ojets";
    buttonObjets.className = "btn";

    const buttonAppart = document.createElement("button");
    newDiv.appendChild(buttonAppart);
    buttonAppart.innerHTML = "Appartements";
    buttonAppart.className = "btn";

    const buttonHotels = document.createElement("button");
    newDiv.appendChild(buttonHotels);
    buttonHotels.innerHTML = "Hotels & restaurants";
    buttonHotels.className = "btn";


    
fetch("http://localhost:5678/api/categories")
.then(res => res.json())
.then(function(category){
   for ( let el in category)
   console.log(el)
  {
    const elEntries = object.entries(el)
   // let id = new Set (el)
        console.log(elEntries);
        
        //let idObjets = category[i].name;
        //let idAppartements = category[i].name;
        //let idHotels = category[i].name;

    }
})

