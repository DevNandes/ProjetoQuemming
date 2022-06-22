function publicar() {
    let usuario = document.getElementById('nome_usuario').value 
    let duvida = document.getElementById('duvida').value
    let front = document.getElementById('frontend')
    let back = document.getElementById('Back-end')
    let api = document.getElementById('APIs')
    let outros = document.getElementById('Outros')
    let usu1 = document.getElementById('seu_usuario1')
    let duv1 = document.getElementById('sua_duvida01')
    let temp1 = document.getElementById('tempo1')
    let usu2 = document.getElementById('seu_usuario2')
    let duv2 = document.getElementById('sua_duvida02')
    let temp2 = document.getElementById('tempo2')
    let usu3 = document.getElementById('seu_usuario3')
    let duv3 = document.getElementById('sua_duvida03')
    let temp3 = document.getElementById('tempo3')
    let usu4 = document.getElementById('seu_usuario4')
    let duv4 = document.getElementById('sua_duvida04')
    let temp4 = document.getElementById('tempo4')
    let sumi1 = document.getElementById('sua_duvida1')
    let sumi2 = document.getElementById('sua_duvida2')
    let sumi3 = document.getElementById('sua_duvida3')
    let sumi4 = document.getElementById('sua_duvida4')

    if (front.checked){
        usu4.innerHTML = usuario
        duv4.innerHTML = duvida
        temp4.innerHTML = 'Enviado a 10 segs'
        sumi4.style.display= 'flex'
        window.scroll(0, 500);

    } else if(outros.checked){
        usu3.innerHTML = usuario
        duv3.innerHTML = duvida
        temp3.innerHTML = 'Enviado a 10 segs'
        sumi3.style.display= 'flex'
        window.scroll(0, 2000);

    } else if(api.checked){
        usu1.innerHTML = usuario
        duv1.innerHTML = duvida
        temp1.innerHTML = 'Enviado a 10 segs'
        sumi1.style.display= 'flex'
        window.scroll(0, 1300);
    
    } else if(back.checked){
        usu2.innerHTML = usuario
        duv2.innerHTML = duvida
        temp2.innerHTML = 'Enviado a 10 segs'
        sumi2.style.display= 'flex'
        window.scroll(0, 900);
    }
}