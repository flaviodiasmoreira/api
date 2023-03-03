let buttonSignIn = document.querySelector("#btnSignIn");


buttonSignIn.addEventListener("click", function(){
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    const init = {
        method: "POST",
        mode:'no-cors',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            'Content-type':'application/json;charset=UTF-8'
        }
    }

    fetch("http://localhost:3000/usuarios/cadastro", init)
    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
        console.log(data);
    })
    .catch((error) =>{
        console.log(error);
    })
   

})