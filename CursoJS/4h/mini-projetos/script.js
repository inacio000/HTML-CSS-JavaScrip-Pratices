console.log('\n\n\nMUDANÇA DE VALOR')
let a = 'Red'
let b = 'Blue'
let c = a

console.log(a)
console.log(b)

a = b
b = c

console.log('Change the values')
console.log(a)
console.log(b)



console.log('\n\n\nCOMPARANDO O MÁXIMO DE UM VALOR')
function max(num1, num2) {
    return num1 > num2 ? num1 : num2

    // if (num1 > num2)
    //     return `${num1} é maior`
    // return `${num2} é maior`
}
console.log(max(9, 6))



// Função fizzBuzz
// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Não divisivel por 3 ou 5 «: entrada
// Não é um número => 'Não é um número'

console.log('\n\n\nFUNÇÃO FizzBuzz')
const resultate = fizzBuzz(15)
console.log(resultate)

function fizzBuzz(entrada) {
    if (typeof entrada != 'number')
        return 'Is not a number!'
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    if (entrada % 3 === 0)
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'Buzz'
    
    return entrada
    // if (typeof(entrada) == typeof(1)){
    //     if (entrada % 3 == 0) {
    //         console.log('Fizz')
    //     }
    //     else if (entrada % 5 == 0) {
    //         console.log('Buzz')
    //     }
    //     else if (entrada % 3 == 0 && entrada % 5 == 0) {
    //         console.log('FizzBuzz')
    //     }
    //     else {
    //         console.log(entrada)
    //     }
    // }
    // else {
    //     console.log('Is not a number!')
    
}



console.log('\n\n\nFUNÇÃO VERIFICAR VELOCIDADE')
const valor = verificarVelocidade(130)

function verificarVelocidade(velocidade) {
    const velocidadeMax = 70
    const kmPorPonto = 5

    if (velocidade <= velocidadeMax) 
        console.log('OK')
    else {
        const pontos = Math.floor((velocidade - velocidadeMax) / kmPorPonto)

        if (pontos >= 12)
            console.log('Suspense card!')
        else
            console.log(`Pontos: ${pontos}`)
    }
}


console.log('\n\n\nPAR OU IMPAR')
exibirTipo(5)

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++){
        if (i % 2 === 0){
            console.log(i, "Par")
        }
        else {
            console.log(i, "Impar")
        }
    }
}



console.log('\n\n\nITERANDO OBJETOS')
const filme = {
    titulo: 'Avangers',
    year: 2018,
    direction: 'Robin',
    personagem: 'Thor'
}

exibirPropriedades(filme)
function exibirPropriedades(obj) {
    for (let propriedade in obj)
        if (typeof obj[propriedade] === 'string') 
            console.log(propriedade,':',obj[propriedade])
}


console.log('\n\n\nSOMAR OS MÚLTIPLOS DE 3 & 5')

somar(10)
function somar(limit) {
    let multiploDe3 = 0
    let multiploDe5 = 0
    for(let i = 0; i <= limit; i++) {
        if (i % 3 === 0)
            multiploDe3 += i
            if (i % 5 === 0)
            multiploDe5 += i
    }
    console.log(multiploDe3 + multiploDe5)
    // for(let i = 0; i <= limit; i++){
    //     if (i % 3 === 0 && i % 5)
    //         console.log(i)
    //         let sum = sum + i
    //         console.log(sum)
    // }
}


console.log('\n\n\nMEDIA ESCOLAR')

const arrayDeNotas = [70, 70, 80]
console.log(mediaDoAluno(arrayDeNotas))

function mediaDoAluno(notas) {
    const media = calcularMedia(notas)

    if (media <  59) return 'F'
    if (media <  69) return 'D'
    if (media <  79) return 'C'
    if (media <  89) return 'B'
    return 'A'
    // let media = 0
    // for(let i = 0; i <= length(notas); i++) {
    //     media = i
    // }
    // console.log(media)
}

function calcularMedia(array) {
    let soma = 0
    for (let valor in array) {
        soma += valor
    }
    return soma / (array.length)
}



console.log('\n\n\nQUANTIDADE DE ASTERISCO')

exibirAsteriscos(10)
function exibirAsteriscos(linhas) {
    let quant = ''
    for(let i = 0; i < linhas; i++) {
        quant += '*'
        console.log(quant)
    }
    // OU
    for(let linha = 1; linha <= linhas; linha++) {
        let padrao = ''
        for(let i = 0; i < linha; i++) {
            padrao += '*'
        }
        console.log(padrao)
    }
}



console.log('\n\n\nNUMEROS PRIMOS')

function numeroPrimo(number) {
    let isPrimo = true

        for(let divisor = 2; divisor < number; divisor++) {
            if(number % divisor === 0) {
                return false
            }
        }
        return true
}

exibirNumerosPrimos(15)
function exibirNumerosPrimos(limite1) {
    for(let number = 2; number <= limite1; number++) {
        // let isPrimo = true

        // for(let divisor = 2; divisor < number; divisor++) {
        //     if(number % divisor === 0) {
        //         isPrimo = false
        //         break
        //     }
        // }

        if(numeroPrimo(number)) console.log(number)
    }

    // let numerosPrimos = 0
    // for(let i = 1; i <= limite1; i++) {
    //     for(let number = 0; number < i; number++) {
    //         if(number % 1 === 0 && number % number === 0) {
    //             numerosPrimos += 1
    //             //console.log(numerosPrimos)
    //         } else {
    //             console.log('Compost number!')
    //         }
    //         console.log(numerosPrimos)
    //     }
    // }
}



// MONTADOR DE ENDERECO
console.log('\n\n\nMONTADOR DE ENDEREÇO')

let adress = {
    Rua: 'Nizhny',
    Cidade: 'N.N',
    CEP: 123
}

function exibirEndereco(adress) {
    for(let chave in adress)
        console.log(chave, adress[chave])
}

exibirEndereco(adress)


// ENCONTRE A IGUALDADE (iguadade de objetos)
console.log('\n\n\nENCONTRE A IGUALDADE')

function Adress(street, cidade, cep) {
    this.street = street,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Adress('Kazanskoe', 'Nizhny Novgorod', 567)
const endereco2 = new Adress('Moscovskoe', 'Moscovo', 567)
const endereco3 = endereco1

function areEqual(endereco1, endereco2) {
    // Comparar se as propriedades sao iguais
    return endereco1.street === endereco2.street &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
}

console.log(areEqual(endereco1, endereco2))
console.log(endereco1.street)

function temEnderecoMemoriaIgual(endereco1, endereco2) {
    return endereco1 === endereco3
}
console.log(temEnderecoMemoriaIgual(endereco1, endereco2))



// Objeto Postagem de Blog
console.log('\n\n\nOBJETO POSTAGEM DE BLOG')

let postagem = {
    titulo: 'a',
    mensagem: 'cjdsnjndjs',
    autor: 'IMR',
    visualizacoes: 50,
    comentarios: [
        {autor: 'Inacio Raimundo'}
    ],
    estaAoVivo: true
}
console.log(postagem)

// OU


// FUNÇÃO DE CONSTRUTOR

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = []
    this.estaAoVivo = false
    // this.comentarios = function(autor, mensagem) {
    //     this.autor = autor,
    //     this.mensagem = mensagem
    //     let isAlive = true
    // }
}

let post = new Postagem('Vida na Russia', `O custo de vida na Russia 
depende da cidade`, 'Inacio M. R.', 50, 'A Russia é um pais muito frio')

// post = new Postagem.comentarios.com('IMR', 'Residente na Russia ha 3 anos, estudante de Engenharia da Computacao') BUG
console.log(post)


// FAIXA DE PREÇO
console.log('\n\n\nFAIXA DE PREÇO')

// USING ARRAY
let faixas = [
    {tooltip: 'Até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000 },
    {tooltip: 'de R$1000 ou mais', minimo: 1000, maximo: 20000}
]

// USING FACTORY FUNCTION
function faixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    faixaPreco('ate...', 0, 700),
    faixaPreco('de, a...', 700, 1000),
    faixaPreco('de, ou mais', 1000, 20000)
]

// USING CONSTRUCTOR FUNCTION
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = max
}
let faixas3 = [
    new FaixaPreco('ate...', 10, 500),
    new FaixaPreco('de, a...', 500, 1500),
    new FaixaPreco('de, ou mais', 1500, 5000)
]

console.log(faixas) // array
console.log(faixas2) // factory function
console.log(faixas3) // constructor function