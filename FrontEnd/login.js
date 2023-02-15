// page de login
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
                            location.href="index.html"
            })
        }      
        catch   
        {
        console.log(erreur)
        }
            });