document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        var btn = document.querySelector("#enter");
      btn.click();
    }
  });
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

function Curtir() {
    let Curtida = document.getElementById('curtCyber').innerHTML;
    document.getElementById('curtCyber').innerHTML = Number(Curtida) + 1
}

function Curtir1() {
    let Curtida = document.getElementById('curt1').innerHTML;
    document.getElementById('curt1').innerHTML = Number(Curtida) + 1
}

function Curtir2() {
    let Curtida = document.getElementById('curt2').innerHTML;
    document.getElementById('curt2').innerHTML = Number(Curtida) + 1
}

function Curtir3() {
    let Curtida = document.getElementById('curt3').innerHTML;
    document.getElementById('curt3').innerHTML = Number(Curtida) + 1
}

function Curtir4() {
    let Curtida = document.getElementById('curt4').innerHTML;
    document.getElementById('curt4').innerHTML = Number(Curtida) + 1
}

function Curtir5() {
    let Curtida = document.getElementById('curt5').innerHTML;
    document.getElementById('curt5').innerHTML = Number(Curtida) + 1
}

function Curtir6() {
    let Curtida = document.getElementById('curt6').innerHTML;
    document.getElementById('curt6').innerHTML = Number(Curtida) + 1
}

function Curtir7() {
    let Curtida = document.getElementById('curt7').innerHTML;
    document.getElementById('curt7').innerHTML = Number(Curtida) + 1
}

function Curtir8() {
    let Curtida = document.getElementById('curt8').innerHTML;
    document.getElementById('curt8').innerHTML = Number(Curtida) + 1
}

function Curtir9() {
    let Curtida = document.getElementById('curt9').innerHTML;
    document.getElementById('curt9').innerHTML = Number(Curtida) + 1
}

function Curtir10() {
    let Curtida = document.getElementById('curt10').innerHTML;
    document.getElementById('curt10').innerHTML = Number(Curtida) + 1
}

function Curtir11() {
    let Curtida = document.getElementById('curt11').innerHTML;
    document.getElementById('curt11').innerHTML = Number(Curtida) + 1
}

function coment(){
    let comenta = document.getElementById('comentar')
    if (comenta.style.display == 'none'){
        comenta.style.display = 'flex'
    } else {
        comenta.style.display = 'none'
    }
}

function coment1(){
    let comenta = document.getElementById('comentar1')
    if (comenta.style.display == 'none'){
        comenta.style.display = 'flex'
    } else {
        comenta.style.display = 'none'
    }
}

function coment2(){
    let comenta = document.getElementById('comentar2')
    comenta.style.display = 'none'
    if (comenta.style.display == 'none'){
        comenta.style.display = 'flex'
    } else {
        comenta.style.display = 'none'
    }
}

function coment3(){
    let comenta = document.getElementById('comentar3')
    if (comenta.style.display == 'none'){
        comenta.style.display = 'flex'
    } else {
        comenta.style.display = 'none'
    }
}

function coment4(){
    let comenta = document.getElementById('comentar4')
    if (comenta.style.display == 'none'){
        comenta.style.display = 'flex'
    } else {
        comenta.style.display = 'none'
    }
}

function coment5(){
    let comenta = document.getElementById('comentar5')
    if (comenta.style.display == 'none'){
        comenta.style.display = 'flex'
    } else {
        comenta.style.display = 'none'
    }
}

function coment6(){
    let comenta = document.getElementById('comentar6')
    if (comenta.style.display == 'none'){
        comenta.style.display = 'flex'
    } else {
        comenta.style.display = 'none'
    }
}

function coment7(){
    let comenta = document.getElementById('comentar7')
    if (comenta.style.display == 'none'){
        comenta.style.display = 'flex'
    } else {
        comenta.style.display = 'none'
    }
}

function coment8(){
    let comenta = document.getElementById('comentar8')
    if (comenta.style.display == 'none'){
        comenta.style.display = 'flex'
    } else {
        comenta.style.display = 'none'
    }
}

function coment9(){
    let comenta = document.getElementById('comentar9')
    if (comenta.style.display == 'none'){
        comenta.style.display = 'flex'
    } else {
        comenta.style.display = 'none'
    }
}

function coment10(){
    let comenta = document.getElementById('comentar10')
    if (comenta.style.display == 'none'){
        comenta.style.display = 'flex'
    } else {
        comenta.style.display = 'none'
    }
}

function coment11(){
    let comenta = document.getElementById('comentar11')
    if (comenta.style.display == 'none'){
        comenta.style.display = 'flex'
    } else {
        comenta.style.display = 'none'
    }
}