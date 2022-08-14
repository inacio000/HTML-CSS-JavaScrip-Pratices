
console.log('LESSON')
console.log('Hello world!')

let name = "Inacio"
let age = 24
let isAcepted = true
let  nickName = undefined
let seletedColor = null

// OBJETOS
let person = {
    name: 'Inacio',
    age: 24,
    isAcepted: true,
    nickName: 'Raimundo'
}
console.log(person)

// ARRAYS
let family = [25, 23, 34, 'Inacio', true, 56, 44]
console.log(family)
console.log(`The length of array is ${family.length}`)

// FUNÇÕES (VERBO + SUBSTANTIVO)
let colorSite = "Gray"
function resetColor(color, tonalidade) {
    colorSite = color + tonalidade;
};

// console.log(colorSite)
// resetColor();
// console.log(colorSite)

console.log(colorSite)
resetColor("Gray", "black")
console.log(colorSite)

// Tipos de funções (2)
// Que realiza uma tarefa e não devolve nada
function sayName() {
    console.log('Inacio')
}
sayName()

// Realiza uma tarefa e devolve algo 
function mult(value) {
    return value * 2
}
console.log(mult(5))
let result = mult(10)
console.log(result)

// Operadores de incremento e decremento (++ --)
 let age2 = 20
 console.log(++age2)
 console.log(age2 )

 // Operadores ternários

 let point = 150
 let type = point > 100 ? 'Premium' : 'Comum'
 console.log(type)

 
 // Operador logico "and" (&&)
let maiorDeIdade = false
let temCarteiraDeTrabalho = true
let podeAplicar = maiorDeIdade && temCarteiraDeTrabalho

console.log(`Pode aplicar: ${podeAplicar}`)

// Operador logico "or" (||)
let maiorDeIdade1 = false
let temCarteiraDeTrabalho1 = true
let podeAplicar1 = maiorDeIdade1 || temCarteiraDeTrabalho1

console.log(podeAplicar1)

// Operador logico "not" (!)
let candidadtoRecusado = !podeAplicar

console.log(`Candidato recusado:   ${candidadtoRecusado}`)

// Falsy (undefined, null, 0, false, '', NaN-not a number)

// Truthy ()

let corPersonalizada = ""
let corPadrao = "Gray"
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)


// Condicionais (If... Else, Switch case)

let hour = 22
if (hour > 6 && hour < 12) {
    // codigo a ser executado
    console.log('Good morning')
}
else if (hour > 12 && hour < 18) {
    console.log('Good afternoon')
}
else {
    console.log('Good evening')
}


//Switch case

let permissao; // comum, gerente, diretor
permissao = ''
switch (permissao) {
    case 'Commum':
        console.log('Commum user')
        break;

    case 'Manager':
        console.log('Manager user')
        break

    case 'Director':
        console.log('Director user')
        break

    default:
        console.log('User not valided!')
        break;
}

// Loop for (for, while, do...while, for...in, for...of)
 
for(let i = 5; i >= 1; i--) {
    //console.log('Am learning!', i)
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// While (A variavel é declarada fora do loop)
let x = 5

while (x >= 1){
    if(x % 2 !== 0) {
        console.log(x)
    }
    x--;
}

// do...while

let y = 0
do {
    console.log('typing...', y);
    y++;
} while (y < 10)


// for...in

const person1 = {
    name: 'In',
    age: 20
}
// key-value
for (let chave in person1) {
    console.log(`${chave}: ${person1['name']}`)
}

const colors = ['Red', 'Blue', 'Green']
for (let indice in colors) {
    console.log(indice, colors[indice])
}


// for...of
for (let color of colors) {
    console.log(color)
}