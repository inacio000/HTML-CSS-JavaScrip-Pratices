const RenderCond = ({x, y}) => {
    //const x = 6;

    return <div>
        {/* Renderização condicional em um componente */}
        {x > 5 && <p>X é maior que 5</p>}
        {x > 5 ? <p>X é um número alto</p> : <p>X é um número baixo</p>}
        <p>O valor de Y é: {y}</p>
    </div>
};

export default RenderCond