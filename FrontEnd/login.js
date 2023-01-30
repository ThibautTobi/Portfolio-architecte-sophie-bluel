
const userAdmin = {
    email: "sophie.bluel@test.tld" ,
    password : "S0phie",
};

const btnConnect = document.querySelector(".btn_connection");

const inputLogin = {
    email : document.getElementById("email").value,
 motDePasse : document.getElementById("password").value,
}

const chargeUtile = JSON.stringify(inputLogin);
console.log(chargeUtile)
console.log(userAdmin)

    btnConnect.addEventListener("submit",function(e){
        e.preventDefault();
        
        if (userAdmin !== inputLogin){
            alert ("Erreur dans l’identifiant ou le mot de passe")
        }
        else {
            try{
            fetch("http://localhost:5678/api/users/login",
            {
                method : 'POST',
                headers: 
                        {
                        'accept' : 'application/json',
                        'content-type' : 'application/JSON',
                        },
                body:   chargeUtile,
            })
                .then(res = res.json())

            console.log(res.json)

                .then(logAdmin = res.json())
            
            console.log(logAdmin)

        /*  
            localStorage.setItem("user",JSON.stringify(logAdmin));
           
            windows.location.href="http://localhost:5500/Portfolio-architecte-sophie-bluel/FrontEnd/";           
        }
        */
                }
            catch{
                console.log("erreur login")
            }}
        });




        
        //let connection = reponseConnection.JSON();
             
        // associer le token et rediriger vers la page d'acceuil en mode administrateur
        
      /*  
        localStorage.setItem("user",JSON.stringify(logAdmin));
           
        location.href="http://localhost:5500/Portfolio-architecte-sophie-bluel/FrontEnd/";           
        }
        */
    










/*

const email = document.getElementById("email").value;
const motDePasse = document.getElementById("password").value;

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
         