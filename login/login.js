function Enter(){
    let email = document.querySelector('#email').value;
    let senha = document.getElementById('senha').value;
    let erro = document.getElementById('erro');
    if(email=='admin'){
        if(senha=='admin'){
            window.location.replace("http://127.0.0.1:5500/Projeto%20Facul/home.html")
        } else{
            erro.innerHTML = 'Senha incorreta! Tente novamente!';
            erro.style.color = 'red';
            erro.style.display = 'flex'
        }    
    }else{
        erro.innerHTML = 'Email incorreto! Tente novamente!';
        erro.style.color = 'red';
        erro.style.display = 'flex'
    }

}