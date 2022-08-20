import AnotherComponent from "./AnotherComponent"

function FirstComponent() {
    // retornando html
    return (
        // vai conter todo html (jsx)
        // deve conter apenas um elemento PAI
        <div className="firstcomponent">
            <p> First Component </p>
            <AnotherComponent />
            {/* <label htmlfor="name">Name:</label>
            <input type="text" name="name"></input> */}
        </div>
    )
}

export default FirstComponent // Para utilizar em outros componentes