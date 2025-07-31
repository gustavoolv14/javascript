function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom Dia 
        img.src = '003.jpg'
        document.body.style.background = '#6A7A7E'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img.src = '002.jpg'
        document.body.style.background = '#561D0F'
    } else {
        //Boa Noite
        img.src = '001.jpg'
        document.body.style.background = '#192E36'
    }
    
        
}
