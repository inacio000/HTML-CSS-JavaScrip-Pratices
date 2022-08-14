/*========================================================================================================
map()
    - quando: é preciso traduzir/mapear todos os elementos em um array para outro conjunto de valores.

==========================================================================================================*/
console.log('MAP()')

// exe. Dobrar valores
const numbers = [1, 3, 5, 6, 8, 22, 12, 24]

const doubledNumbers = numbers.map( function(element) {
    return element * 2
})
console.log(doubledNumbers)

// OR

function doubledNumbers1(num) {
    return num * 2
}
const duplicar = numbers.map(doubledNumbers1)
console.log(duplicar)

// USING ARRAY FUNCTION

const duplicar1 = numbers.map(num => num *2)
console.log(duplicar1)


// exe. Fahrenheit para celsius

console.log('\n\n\nConvertendo fahrenheit para celcius')
const fahrenheit = [0, 32, 45, 50, 75, 80, 120]

const celcius = fahrenheit.map( function(elem) {
    return Math.round( (elem - 32 ) * 5/9)
})
console.log(celcius)

// Using Array Function

const celcius1 = fahrenheit.map(elem => Math.round( (elem - 32 ) * 5/9))
console.log(celcius1)








/*========================================================================================================
filter()
    - quando: é preciso remover elementos indesejados com base em alguma(s) condição(ões).

==========================================================================================================*/
console.log('\n\n\nFiLTER()')

const anyArray = [2, 3, 4, 6, 9, 8, 4, 23, 12, 3, 5, 4]

const uniqueArray = anyArray.filter( (elem, index, arr) => arr.indexOf( elem ) === index )

console.log(uniqueArray)





/*========================================================================================================
reduce()
    - quando: é preciso encontrar um valor cumulativo ou concatenado com base em elementos de todo o array.

==========================================================================================================*/
console.log('\n\n\nReduce()')

const rockets = [
    // array de objetos (que pode ser o retorno de uma API)
    {country: 'Russia', launches: 32},
    {country: 'US', launches: 23},
    {country: 'China', launches: 16},
    {country: 'Europe', launches: 7},
    {country: 'India', launches: 4},
    {country: 'Japan', launches: 3},
]

const sum = rockets.reduce( function( prevValue, element ) {
    return prevValue + element.launches
}, 0)
console.log(sum)

const totalLaunches = rockets.reduce(( prevVal, elem ) => prevVal + elem.launches, 0 )

console.log(totalLaunches)







/*========================================================================================================
every()
    - testa se todos os elementos do array passam por um teste implementado por uma função fornecida.

    retorna um resultado boolean
    exe. Verificar se todos os elementos de um array são maiores que 10
==========================================================================================================*/
console.log('\n\n\nEvery()')
const anotherArray = [5, 12, 34, 22, 13, 11]

const allAbove10 = anotherArray.every( elem => elem > 10)
console.log(allAbove10)

// Verificar se todos têm mais de 18 anos 

const date = [
    // array de objetos (que pode ser o retorno de uma API)
    {id: 12, name: 'Joao', age: 8},
    {id: 47, name: 'Francisco', age: 7},
    {id: 77, name: 'Pedro', age: 48},
    {id: 85, name: 'Fidel', age: 52},
]

const classRoom = date.every(p => p.age >= 18)
console.log(classRoom)






/*========================================================================================================
some()
    - testa se pelo menos algum dos elementos de um array passa no teste implementado por uma função atribuída.
        - não altera o array/objeto dentro do qual ele é chamado.

    exe. Verificar se há algum número primo dentro do conjunto de números que foram fornecidos
==========================================================================================================*/
console.log('\n\n\nSome()')

function isPrime( value ) {
    for(let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false
        }
    }
    return value > 1
}

const oneMoreArray = [6, 8, 11, 14, 42]
const primeNumbers = oneMoreArray.some( isPrime )
console.log(primeNumbers)


// Verificar por condições ou objetos

const team = [
    // array de objetos (que pode ser o retorno de uma API)
    {id: 12, name: 'Topper Harley', pilot: true},
    {id: 44, name: 'Ramada Thompson', pilot: true},
    {id: 59, name: 'Pete Thompson', pilot: false},
    {id: 122, name: 'Kowalski', pilot: false},
]

console.log(team.some( person => person.pilot))






/*========================================================================================================
find()
    - quando: é preciso procurar/verificar por um valor dentro de um array/objeto. Em outras palavras, use find() para criar um novo array/objeto baseado na função-teste fornecida.
        - Retorna o valor do primeiro elemento encontrado 

==========================================================================================================*/
console.log('\n\n\nFind()')

const pizza = [
    'Mussarela',
    'Calabresa',
    'Portuguesa',
    'Marguerita'
]

const foundPizza = pizza.find( p => p.startsWith( 'M' ))
console.log(foundPizza)

// Frutas

const fruits = [
    // array de objetos (que pode ser o retorno de uma API)
    {name: 'Jaca', quantity: 2},
    {name: 'Banana', quantity: 5},
    {name: 'Cereja', quantity: 0}
]

const foundFruits = fruits.find( f => f.name === 'Banana')
console.log(foundFruits)






/*========================================================================================================
find()
    - quando: é preciso saber se um array/objeto possui determinado valor/elemento.
        - A diferença para o find() é que includes() somente determina se o elemento existe ou não, retornando um boolean.

==========================================================================================================*/
console.log('\n\n\nInclude()')

console.log( [1, 2, 3, NaN].includes( NaN ))

const people = [
    'Adamastor', 
    'Joao',
    'Mauricio',
    'Lalau'
]

const foundPeople = people.includes( 'Joao' )
console.log(foundPeople)

// retorno de uma API

const people1 = [
    // array de objetos (que pode ser o retorno de uma API)
    {id: 11, name: 'Adamastor', age: 23, group: 'editor'},
    {id: 47, name: 'Joao', age: 28, group: 'user'},
    {id: 85, name: 'Mauricio', age: 34, group: 'editor'},
    {id: 97, name: 'Lalau', age: 74, group: 'admin'}
]

const filteredUsed = people1.filter( p => p.name.includes( 'au' ))
console.log(filteredUsed)




/*========================================================================================================
API real
    - Consumindo uma API
==========================================================================================================*/
console.log('\n\n\nAPI real')

async function getPeople() {
    const response = await fetch( 'https://randomuser.me/api/?results=20' )

    return response.json()
}
//getPeople().then( dados => console.log( dados ))



// Apenas mulheres

getPeople().then( data => {
    const people = data.results

    console.log( people.filter( p => p.gender === 'female')) 
})


// Trabalhar com dados

getPeople().then( data => {
    const result = data.results
    const people = []

    for ( let p of result) {
        people.push( {
            "Name": `${ p.name.first } ${ p.name.last }`,
            "Sex": p.gender,
            "Age": p.dob.age
        })
    }

    console.table( people )
})


// Apenas maiores de 30 anos

getPeople().then( dados => {
    const result = dados.results.filter( p => p.dob.age >= 30)
    const above30 = []

    for (let p of result) {
        above30.push( {
            "Name": `${ p.name.first } ${ p.name.last }`,
            "Sex": p.gender,
            "Age": p.dob.age
        })
    }
    console.table(above30)
})