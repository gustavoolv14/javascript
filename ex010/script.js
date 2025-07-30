function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Tente Novamente!')
    } else {
        var sexo = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade <= 17) {
                //criança
                img.setAttribute('src', 'crianca01.jpg')
            } else if (idade >= 18 && idade < 28) {
                //Jovem
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if (idade <= 51) {
                //Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (sexo[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade <= 17) {
                //criança
                img.setAttribute('src', 'crianca.jpg')
            } else if (idade > 18 && idade < 28) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if (idade <= 51) {
                //Adulto
                img.setAttribute('src', 'adulto-m1.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }   
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
   
}