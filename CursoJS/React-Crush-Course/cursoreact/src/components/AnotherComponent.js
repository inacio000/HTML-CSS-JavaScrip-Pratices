const AnotherComponent = () => {

    // criando uma função para executar como um evento react
    const handleClick = () => {
        console.log("Clicked on button")
    };

    return (
        <div>
            <p>Second Component</p>
            <button onClick={handleClick}> Event click </button>
            <hr />
            {/* criando uma função para utilizar o evento diretamente no componente */}
            <button onClick={() => console.log("Tested")}> Event on element </button>
        </div>
    );
};

export default AnotherComponent;