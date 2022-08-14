const telephone = {
    marcaTlfn : 'Iphone 11',
        sizeTlfn : {
            vertical : 155,
            horizontal : 75
        },
        capacidadeBateria: 5000,
        call : function() {
            console.log('Calling...')
        }
}


// Factory Functions (Funções de fábrica)
// Instanciando uma classe usando função de fábrica
console.log('\n\n\nFACTORY FUNCTION')

// camelCase - umDoisTres
function creatTelephone(marcaTlfn, sizeTlfn, capacidadeBateria) {
    return {
        marcaTlfn,
        sizeTlfn,
        capacidadeBateria,
        call() {
            console.log('Calling...')
        }
    }
}

const tlfn1 = creatTelephone('Iphone 12', 5.5, 5000)
console.log(tlfn1)


// Função de construtor
console.log('\n\n\nCONSTRUCTOR FUNCTIONS')

// Pascal Case - UmDoisTresQuatro
function Telephone(marcaTelephone, sizeScreen, capacidadeBate) {
    this.marcaTelephone = marcaTelephone,
    this.sizeScreen = sizeScreen,
    this.capacidadeBate = capacidadeBate
    this.ligar = function() {
        console.log('Calling...')
    }
}
// Criando objeto
const celular = new Telephone('Iphone 12', 5.5, 6000)
console.log(celular)

function Carro(marcaCar, corCar, km) {
    return {
        marcaCar,
        corCar,
        km
    }
}

car1 = Carro('Merecedes', 'Cinzento Escuro Baço', 0)
console.log(car1)


// NATUREZA DINÂMICA DE OBJETOS
console.log('\n\n\nNATUREZA DINÂMICA DE OBJETOS')
const mouse = {
    cor: 'Red',
    marca: 'jetaccess'
}
mouse.velocidade = 500
mouse.trocarDPI = function() {
    console.log('mudando DPI')
}
delete mouse.velocidade
delete mouse.trocarDPI

console.log(mouse)


// CLONANDO OBJETOS
console.log('\n\n\nCLONANDO OBJETOS')

const novoObjeto = Object.assign({
    color: 'gray'
}, celular);
console.log(novoObjeto)

// OU 

const objeto2 = {...car1}
console.log(objeto2)


// MATH
console.log('\n\n\nMATH')
const aleatorio = Math.random()
const maximo = Math.max(3, 4, 2, 5)

console.log(aleatorio, maximo)


// STRINGS
console.log('\n\n\nSTRINGS')

// Tipo primitivo
const mensagem = ' Java Script  '
console.log(mensagem.includes('Java'))
console.log(mensagem.includes('Hello'))
console.log(mensagem.startsWith('Python'))
console.log(mensagem.endsWith('c'))
console.log(mensagem.indexOf('Script'))
console.log(mensagem.replace('Java', 'Type'))
console.log(mensagem.trim()) // remove espacos excedentes
console.log(mensagem.split(' ')) // separa a sting por espaco

// Tipo objeto
const anothermsg = new String('Good morning')
console.log(anothermsg.length)
console.log(anothermsg[2])

// TEMPLATE LITERAL (scape sequences)
console.log('\n\n\nTEMPLATE LITERAL')

const msg = 'Hello\n \"people\"'
console.log(msg)

// Object {}
// Boolean true, false
// string '', ""
// Template ``

const othermsg = `Privet`
console.log(othermsg)

const email = 
`Olá estimado Cliente!

Obrigado pelo Feedback

A Insales levará em conta os promenores citados

Agradecemos ao seu contacto e volte sempre.

Obrogado!
InSale`
console.log(email)

// DATE
console.log('\n\n\nDATE')

const date1 = new Date()
console.log(date1)

const date2 = new Date('Agost 12 2022 10:50')
console.log(date2)

const date3 = new Date(2022, 08, 12, 10, 50)
console.log(date3)

date3.setFullYear(2030)
console.log(date3)

// conversão de objetos (date para string)
date1.toDateString()
console.log(date1)

