let auto = [8, 9, 6, 4]
auto.push(3)
auto.sort()
console.log(`O vetor tem ${auto.length} posições`)
console.log(`O primeiro valor do vetor é ${auto[0]}`)
let pos = auto.indexOf(8)
if (pos == -1) {
    console.log('Valor não foi encontrado')
} else {
    console.log(`O valo está na posição ${pos}`)
}


/*
let auto = [8, 9, 6, 4]
auto.push(8)
for (let pos = 0; pos < auto.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${auto[pos]}`)
}
*/
/*let auto = [8, 9, 6, 4]
auto.push(1)
auto.sort()
auto.indexOf(8)
for (let pos in auto) {
    console.log(`A posição ${pos} tem o valor ${auto[pos]}`)
}*/