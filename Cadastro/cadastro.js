function Enter(){
    let email = document.querySelector('#email').value;
    let senha = document.getElementById('senha').value;
    let senha2 = document.getElementById('senha2').value;
    let erro = document.getElementById('erro');
    if(senha.length >= 6){
        if(senha==senha2){
            window.alert('Cadastrado com sucesso!')
            window.location.replace("http://127.0.0.1:5500/Projeto%20Facul/login/index.html")
        } else{
            erro.innerHTML = 'As senhas não coincidem! Tente novamente!';
            erro.style.color = 'red';
            erro.style.display = 'flex';
        }
    } else {
        erro.innerHTML = 'As senhas devem ser maior de 6 digitos! Tente novamente!';
        erro.style.color = 'red';
        erro.style.display = 'flex';
    }

}
function validacaoEmail(field) {
    let erro = document.getElementById('erro');
    let botão = document.getElementById('enter');
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    botão.style.display = 'flex'
    erro.style.display = 'none'
    }
    else{
    erro.innerHTML="<font color='red'>E-mail inválido </font>";
    botão.style.display = 'none'
    alert("E-mail invalido");
    }
    }