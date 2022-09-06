function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.<br>`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src='Imagens/manha.png'
        document.body.style.backgroundColor='#d2caa5'
        msg.innerHTML+='Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src='Imagens/tarde.png'
        document.body.style.backgroundColor='#fe7b73'
        msg.innerHTML+='Boa tarde!'
    } else {
        //BOA NOITE!
        img.src='Imagens/noite.png'
        document.body.style.backgroundColor='#0d1817'
        msg.innerHTML+='Boa noite!'
    }
}
