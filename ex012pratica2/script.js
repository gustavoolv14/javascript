function tabuada() {
    var tabuada = document.getElementById('inum1')
    var tab = document.getElementById('seltab')
    if (tabuada.value.length == 0) {
        window.alert('[Erro] Por favor, digite um número')
    } else {
        var n = Number(tabuada.value)
        var t = 1
        tab.innerHTML = ''
        while (t <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${t} = ${n * t}`
            item.value = `tab${t}`
            tab.appendChild(item)
            t++
        }
    }
    
}   
1