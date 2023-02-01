/*
const userAdmin = {
    email: "sophie.bluel@test.tld" ,
    password : "S0phie",
};
*/
const btnConnect = document.querySelector(".btn_connection");

const inputEmail =  document.getElementById("email");

const inputPass = document.getElementById("password");

    btnConnect.addEventListener("click",function(e){
        e.preventDefault();

        let inputLogin = {
                            email : inputEmail.value,
                            password : inputPass.value,
                        }

        const chargeUtile = JSON.stringify(inputLogin);


        try{

            fetch("http://localhost:5678/api/users/login",
            {
                method : 'POST',
                headers: 
                        {
                        'accept' : 'application/json',
                        'content-type' : 'application/JSON',
                        },
                body:   
                        chargeUtile,
                        
            })
            .then(res => {
                if (res.ok) {
                            return Promise.resolve(res.json());
                            } 
                else        {
                            return Promise.reject(alert ("Erreur dans l’identifiant ou le mot de passe"));
                            }
            })
            .then(data =>   {localStorage.setItem("user",JSON.stringify(data))
                            location.href="http://localhost:5500/Portfolio-architecte-sophie-bluel/FrontEnd/"
            })

        }
            
        catch   {
                    //console.log()
                }
            });
        
        
      /*  
        localStorage.setItem("user",JSON.stringify(logAdmin));
           
        location.href="http://localhost:5500/Portfolio-architecte-sophie-bluel/FrontEnd/";           
        }
        */
    


/*
            .then((res) => {if (res.ok){
                                            return res.json()
                                            }
                                else    {
                                        alert ("Erreur dans l’identifiant ou le mot de passe")
                                        return
                                        }})
                                //mettre un stop comme break pour stopper la suite du code
                .then((data) => {
                                localStorage.setItem("user",JSON.stringify(data))
                                })
                                //location.href="http://localhost:5500/Portfolio-architecte-sophie-bluel/FrontEnd/"
                                console.log(localStorage)
                                let parse = JSON.parse(localStorage.getItem("user"))
                                console.log(parse)
                                //let parseToken = parse.value
                                            } 
                                            
                                            // if(){location.href="http://localhost:5500/Portfolio-architecte-sophie-bluel/FrontEnd/"}   */ 







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

        /*

            .then(res => {
                if (res.ok) {
                    return Promise.resolve('L utilisateur as été supprimé');
                } else {
                    return Promise.reject('Une erreur est survenue');
                }
            })
            .then(res => console.log(res))
        */