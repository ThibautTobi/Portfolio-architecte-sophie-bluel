/*
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4"

const identification = {
    email : "",
    password : ""
}

*/
document.querySelector(`. form input[type="button"]`).addEventListener("click", function(){
    const valid = true;
    for(let input of document.querySelector(`. form input,.form email,.form password"]`)){
        //customElements
        valid &= input.reportValidity();
        if(!valid){
            break;
        }
    }
 /*   if(valid){
        alert("bienvenue sur votre espace");
    }*/
})
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