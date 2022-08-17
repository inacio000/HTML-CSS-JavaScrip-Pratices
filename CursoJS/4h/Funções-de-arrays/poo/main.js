class Person{
    // função construtor
    constructor(firstName, lastName, age) {
        // assinalando a Person
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // criando um metodo (dinamico)
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    static speak() {
        // metodo estatico 
        console.log('Hey...')
    }
}

// instanciando a class
const person = new Person('Inacio', 'Raimundo', 20)
console.log(person)
console.log(person.getFullName())
Person.speak()


// HERANCA
console.log('\n\n\n"HERNÇA"')
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} made some noise`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name) // chamando o constutor da class Animal
    }

    speak() {
        console.log(`${this.name} barked`)
    }
}

const animal = new Animal('Simba')
const dog = new Dog('Bob')
animal.speak()
dog.speak()