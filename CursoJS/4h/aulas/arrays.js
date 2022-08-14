// MANIPULAÇÃO DE ARRAYS
// Um array tmbm é um objeto (com vários métodos e propriedades)

// Add elements
// Find elements
    // para encontrar array depende do tipo (primitivo/referencia)
        // no caso dos objetos têm referências diferentes (ref. de memória diferentes)
// Remove elements
// Dividir elements
// Dividir Arrays
// Combinar Arrays


console.log('\nADD ELEMENTOS')
const numbers = [1,2,3]
console.log(numbers)

// Acessando array...
// Add no inicio
numbers.unshift(0)
console.log(numbers)

// Add no meio
 numbers.splice(1,0,'a') // 1-indice, 0-delete
 console.log(numbers)

// Add no final
 numbers.push(5)
 console.log(numbers)





console.log('\n\n\nFIND ELEMENTS IN ARRAY (tipo primitivo)')
// numeros primitivos
const number2 = [1,2,3,1,4]
console.log(number2.indexOf(2)) // retorna o indice do elemento, caso não encontre, retorna -1
console.log(number2.lastIndexOf(1)) // enconta o indice da ultima ocorrencia do elemento

// ES6
console.log(number2.includes(2))


console.log('\n\n\nFIND ELEMENTS IN ARRAY (tipos de referencia)')
const marcas = [
    {id: 1, name: 'Inacio'},
    {id: 2, name: 'Raimundo'}
]

const marca = marcas.find(function(marca) {
    return marca.name === 'Inacio'
    // Retorna a propriedade, caso for False, retorna undefined
})

console.log(marca)






console.log('ARRAY FUNCTIONS')
// formas mais rapidas e curtas de declarar métodos e corpos de métodos
// ES6

const marcas1 = [
    {id: 2, name: 'Martinho'},
    {id: 3, name: 'Luis'}
]

console.log(marcas1.find(marca => marca.name === 'Martinho')) // apenas quando a funcao tem um parametro, caso nao tiver, substituimos 'marca' por ()

// console.log(marcas1.find(
//     (marca) => {
//         return marca.name === 'Martinho'
//     }
// ))






console.log('\n\n\nREMOVING ELEMENTS IN ARRAY')
const number3 = [1,2,3,4,5,6]

// Remover no final
const last = number3.pop()
console.log(last)
console.log(number3)

// Remover no inicio
const first = number3.shift()
console.log(first)
console.log(number3)

// Remover no meio
const meio = number3.splice(2, 1)
console.log(meio)
console.log(number3)





console.log('\n\n\nESVAZIANDO UM ARRAY')
let number4 = [1,2,3,4,5,6]
let other = number4

// Solução 1 (variavel não pode ser 'const')
// number4 = [] // esvazia apenas o array principal e nao a copia
// console.log(number4)
// console.log(other)

// Solução 2 (apagando todas referências)
number4.length = 0
console.log(number4)
console.log(other)

// Solução 3 (usando o metodo splice)
// number4.splice(0, number4.length)

// Solução 4
// while (number4.length > 0)
//     number4.pop
    // método não muito performático




console.log('\n\n\nCOMBINANDO E DIVIDINDO ARRAYS')
const primeiro = [1,2,3]
const segundo = [4,5,6]

// Combinar
const combinado = primeiro.concat(segundo)
console.log(combinado)

// Dividir
const dividido = combinado.slice(0, 3) // sai de 0 até 2 (1-3). Passando um parametro, ele divede ate o final, sem parametro, copia o array
console.log(dividido)






console.log('\n\n\nOPERADOR SPREAD ES6')
// copias e clonagens usando ES6 (spread)

const primeiro1 = [1,2,3]
const segundo1 = [4,5,6]

// const combinado1 = primeiro1.concat(segundo1)
const combinado1 = [...primeiro1,'ES6',...segundo1]
console.log(combinado1)

// const dividido1 = combinado1.slice()
const clonado = [...combinado1]
console.log(clonado)




console.log('\n\n\nITERANDO UM ARRAY (usando metodo forEach)')
const number5 = [1,2,3,4,5]
for (num in number5)
    console.log(num)

// doing array function
number5.forEach((num,indice) => console.log('indice:',indice, '->', num))





console.log('\n\n\nCOMBINANDO ARRAYS')
console.log(clonado.join('.'))

const frase = 'Hello wellcome'
const result = frase.split(' ')
console.log(result)
console.log(result.join('-'))






console.log('\n\n\nRECEBENDO DADOS (input)')
//prompt('Helo, what is your favorit color?')
//let favoritColor = prompt('Helo, what is your favorit color?')




console.log('\n\n\nMANIPULAÇÃO DO DOM (Document )')
// todo HTML dentro de uma pagina