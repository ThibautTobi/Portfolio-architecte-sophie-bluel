
const log = null

const userAdmin = {
    email: "sophie.bluel@test.tld" ,
    password : "S0phie",
};

const btnConnect = document.querySelector(".btn_connection");

const email = document.getElementById("email").value;

const motDePasse = document.getElementById("password").value;


    btnConnect.addEventListener("submit",function(e){
        e.preventDefault();
        
        if (userAdmin.email == email && userAdmin.password == motDePasse){

        fetch("http://localhost:5678/api/users/login",{
                method : 'POST',
                headers: {
                        'accept' : 'application/json',
                        'content-type' : 'application/JSON',
                        },
                body:  {
                    "email": "string",
                    "password": "string"
                    },
                    })
                        .then(res = res.json())
                        .then(log = res.json())
            console.log(log)
    
 
                     
                       // console.log(reponseConnection)
                       // console.log(reponseConnection.json()) 
            //let connection = reponseConnection.JSON();
            //console.log(reponseConnection) 
        
        // associer le token et rediriger vers la page d'acceuil en mode administrateur
        
      /*  
        localStorage.setItem("user",JSON.stringify(logAdmin));
           
        location.href="http://localhost:5500/Portfolio-architecte-sophie-bluel/FrontEnd/";           
        }
        else {
            alert ("l'email ou le mot de passe sont incorrect")
        } 
 */
    }
    })










/*
        if ( userAdmin.email == inputEmail && userAdmin.password == inputMdp){
       // console.log(inputEmail) 
       // console.log(inputMdp) 
        //console.log("bon")}
 
       fetch("http://localhost:5678/api/users/login",{
                method : 'POST',
                headers: {
                        'accept' : 'application/json',
                        'content-type' : 'application/JSON',
                        },
                body:  {
                        "email": "string",
                        "password": "string"
                        }
                    })
                        .then(res = res.json())
                        .then(res.json() = log)
console.log(log)
                     
                       // console.log(reponseConnection)
                       // console.log(reponseConnection.json()) 
            //let connection = reponseConnection.JSON();
            //console.log(reponseConnection) 
                    }})
                    console.log(log)
        // associer le token et rediriger vers la page d'acceuil en mode administrateur
        
        /*
        localStorage.setItem("user",JSON.stringify(logAdmin));
           
        location.href="http://localhost:5500/Portfolio-architecte-sophie-bluel/FrontEnd/";           
         */
        //console.log(logAdmin)
         