
//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4"
const token = null

const userAdmin = {
    email: "sophie.bluel@test.tld" ,
    password : "S0phie",
};

//  submit not defined ?

document.getElementById("form_connection");
    form_connection.addEventListener("submit",function(e){
        e.preventDefault();

        if (userAdmin.email && userAdmin.password){ 
        
        fetch("http://localhost:5678/api/users/login",{
                method : 'POST',
                headers: {
                        'accept' : 'application/json',
                        'content-type' : 'application/JSON',
                        },
                body:  {
                        "email": "string",
                        "password": "string"
                        }})
            .then(res => res.json())
            .then(logAdmin =>{ 

        // associer le token et rediriger vers la page d'acceuil en mode administrateur

        
            localStorage.setItem("user",JSON.stringify(logAdmin))

         

         console.log("sa marche")}
         )}
         
        
        else {
            alert ("l'email ou le mot de passe sont incorrect")
            console.log("probleme")
        }}
    );




/*
function login (){
    fetch("http://localhost:5678/api/users/login",{
    method : 'POST',
    headers: {
                'accept' : application/json
                'content-type' : application/JSON
    }
    body :{
  "email": "string",
  "password": "string"
}
})
.then(reponse => reponse.json())
.then(result =>{
    if (result){
        {
  "userId": 1,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4"
}
    }
})
}
*/











/*
const identification = {
    email : "",
    password : ""
}

*/
/*
document.querySelector(`. form input[type="button"]`).addEventListener("click", function(){
    const valid = true;
    for(let input of document.querySelector(`. form input,.form email,.form password"]`)){
        //customElements
        valid &= input.reportValidity();
        if(!valid){
            break;
        }
    }
    */
 /*   if(valid){
        alert("bienvenue sur votre espace");
    }
})*/
/*
function connection (email,password){
    if {${email} && ${password} === true
    //accés authorisé connexion
    
    }
    else{
    document.prompt("l'email ou le mot de passe sont incorrect")
}};

{
    "email": "string",
    "password": "string"
}
*/