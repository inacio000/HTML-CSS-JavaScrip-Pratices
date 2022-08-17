/*==================================================================
SELECIONAR APENAS UM ELEMENTO
===================================================================*/

// const addUserText = document.getElementById('add-user') // para id por padrao
// addUserText.innerText = "Adicionar usuário";

// const addUserText = document.querySelector('#add-user')
// addUserText.textContent = "Adicionar usuário";

// const myForm = document.querySelector(".container #my-form")
// console.log(myForm)

// const myForm1 = document.querySelector(".item")
// console.log(myForm1)




/*==================================================================
SELECIONAR MULTIPLOS UM ELEMENTO
===================================================================*/

// const allItems = document.querySelector('.items')
// const allItems = document.getElementsByClassName('item')
//const allItems = document.getElementsByTagName('li')

// console.log(allItems)





/*==================================================================
MANIPULANDO ELEMENTOS DO DOM
===================================================================*/

const items = document.querySelector('.items')
const button = document.querySelector('.btn')
// items.remove()
// items.firstElementChild.remove()
// items.lastElementChild.remove()
// items.children[1].textContent = "Item um"
// items.lastElementChild.innerHTML = '<h1> Inacio </h1>'
button.style.background = "gray"









/*==================================================================
EVENTOS DO DOM
===================================================================*/

const submitButton = document.querySelector('#submit-button')
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')

const items1 = document.querySelector('.items')
const body = document.querySelector('body')

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    //console.log(event);
    console.log("clicked!")
    const nameValue = nameInput.value
    // console.log(nameValue)

    const emailValue = emailInput.value
    if (nameValue === '' || emailValue === '') {
        return alert('Please fill out all the fields!')
    }

    myForm.style.background = 'green'
    items1.firstElementChild.textContent = nameValue
    items1.children[1].textContent = emailValue
    body.style.background = 'gray'
    
})

// const mudanca = nameInput.addEventListener('change', (event) => console.log(event.target.value))

