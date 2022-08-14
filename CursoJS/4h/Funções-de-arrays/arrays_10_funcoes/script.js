// Array - Coleção de elementos

const latinhas = ['Coca-Cola', 'Sprite']
const numbers = [1, 2, 3, 4]

// Add/Insert  .push()  - Altera o array original
latinhas.push("Fanta")
console.log(latinhas)

// Retrieve/Search (Resgatar/Pesquisar)  .filter()  .find()  .includes(item)   .includes(item, from)

// filter
const latinhasNaoSprite = latinhas.filter(latinha => latinha !== 'Sprite')
console.log(latinhasNaoSprite)


// .find()
const latinhaCoca = latinhas.find(latinha => latinha !== 'Coca-Cola')
console.log(latinhaCoca)


// .includes()     retorna bool
console.log(latinhas.includes('Sprite', 2))



// Update  [...spread]   arr.slice(start, end)
const newLatinhas = [...latinhas, 'Tubaina']
console.log(newLatinhas)

// .slice
const latinhasAtualizadas = newLatinhas.slice(-1) 
console.log(latinhasAtualizadas)


// Remove  .pop() - Altera o array original
latinhas.pop()
console.log(latinhas)

// Transform   .map()    .reverse()
const fruits = ['🍌', '🍍', '🍒', '🥝', '🥥']
const apple = fruits.map(fruit => {
    return '🍌'
})

console.log(fruits)
console.log(apple)


// .reverse()   - Altera o array original
const fruitsReverse = fruits.reverse()
console.log(fruitsReverse)
 
// criando um novo array com  .reverse()
const newFruitsArray = [...fruits].reverse()
console.log(newFruitsArray)



// Loop/Iteration   forEach
fruits.forEach(fruit => console.log(fruit))