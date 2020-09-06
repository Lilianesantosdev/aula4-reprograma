// Exercícios práticos com for e arrays!

// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"


console.log("EXERCICIO 1")

const arrei = ["banana", "gatinho", "brócolis"]

function imprimeIndiceElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`índice: ${i}, elemento: ${arr[i]}`)
    }
}
imprimeIndiceElemento(["banana", "gatinho", "brócolis"])

const numeroIndice = ["banana", "gatinho", "brócolis"]
for (let i = 0; i < numeroIndice.length; i++) {
    console.log(`índice: ${i}, elemento: ${numeroIndice[i]}`)

}


// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

console.log("EXERCICIO 2")

function somaElementos(arr) {

    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

console.log(somaElementos([10, 11, 12]))

// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

console.log("Exercicio 3")

function maioresQueCinco(arr) {
    const numerosMaiores = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            numerosMaiores.push(arr[i])
        }
    }
    return numerosMaiores
}
console.log(maioresQueCinco([88, 55, 0, 2, 85, 81, 24, 12]))


// 4) Modifique a função anterior para que receba, além da array, o número para comparação (não deixar mais fixo como número 5).
// Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

console.log("Exercicio 4")

function maioresQueNumeroComparacao(arr, numeroComparacao) {
    const numerosMaiores = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > numeroComparacao) {
            numerosMaiores.push(arr[i])
        }
    }
    return numerosMaiores
}
console.log(maioresQueNumeroComparacao([88, 55, 0, 2, 85, 81, 24, 12], 20))


// 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
// Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
// EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)

console.log("Exercicio 5") // Ju, fiquei um pouco enrolada nesse aqui e fui pesquisar no google como consigo retornar um maior número de um array, achei a forma de Math  como resposta: https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array estaria correto usar assim?

function numerosInteiros(arrNumerosInteiros) {
    return Math.max.apply(null, arrNumerosInteiros)

}
console.log(numerosInteiros([56, 12, 168, 66]))


// 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: "o menor número é X e o maior número é Y".
// Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior número é 59 e o menor número é -5"

