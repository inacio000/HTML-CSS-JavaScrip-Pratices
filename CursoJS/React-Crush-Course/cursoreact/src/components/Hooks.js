import { useState, useEffect } from "react";

const Hooks = () => {
    let age = 30;
    // invocando o hook (useState) para gerenciar o acesso ao valor da variavel e a alteração do valor da variável
    const [newAge, setNewAge] = useState(40);

    const changeAge = () => {
        age = 31
        console.log(age)
    };

    const changeNewAge = () => {
        setNewAge(45)
    };

    useEffect( () => {
        // aceita função anônima como argumento
        console.log('testing...')
    });
    
    return (
        <>
            <p>Age: {age} </p>
            <button onClick={changeAge}>Change Age</button>
            <p>Age: {newAge} </p>
            <button onClick={changeNewAge}>Change to new age</button>
        </>
    );
};

export default Hooks