function Container() {
    const conjunto = [1,2,3,4,5,6];

    return (
        <div className="container">
            <input 
            type="number"
            placeholder="Ingrese el valor límite L"
            className="input-limite"
            />
            <div className="conjunto-container">
                Conjunto: {JSON.stringify(conjunto)}
            </div>
        </div>
    )
}

export default Container;
