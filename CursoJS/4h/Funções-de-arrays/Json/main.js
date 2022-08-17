const todos = [
    {
        id: 1, 
        description: 'Study programmation', 
        isCompleted: false
    },
    {
        id: 2,
        description: 'Read',
        isCompleted: true
    },
    {
        id: 3,
        description: 'Pratice',
        isCompleted: false
    }
]

const todosJSON = JSON.stringify(todos) // Mandando algo para um servidor (.stringfy)
const todoList = JSON.parse(todosJSON) // Recebendo Json para transformar em JS

console.log(todoList)