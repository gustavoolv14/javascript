function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parimp(2)
console.log(`Aqui está o resultado do número sugerido: ${res}`)