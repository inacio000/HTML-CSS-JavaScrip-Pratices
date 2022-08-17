const nameInput = document.querySelector( '#name' );
const emailInput =document.querySelector( '#email' );
const submitButton = document.querySelector( '#submit-button' );

const errorMessage = document.querySelector ( '.msg' );

const items = document.querySelector('.items')

submitButton.addEventListener( 'click', ( event ) => {
    event.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if ( nameValue === '' || emailValue === '' ) {
        errorMessage.textContent = 'Please fill out the fields!';
        errorMessage.classList = 'error';
        setTimeout(( ) => {
            errorMessage.textContent = '';
            errorMessage.classList = ''; // limpando errormsg
        }, 2000)
        return;
    }

    const li = document.createElement('li');
    li.classList = ' item ';
    li.innerHTML = `Name: ${nameValue} <br/>Email: ${emailValue}`;
    items.appendChild(li) // add in a list

    nameInput.value = ''
    emailInput.value = ''
}) // escutar o clique
