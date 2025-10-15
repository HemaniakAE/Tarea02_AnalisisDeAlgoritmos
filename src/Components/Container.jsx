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
                {conjunto.length > 0 /*Si el conjunto está vacío muestar un mensaje*/
                    ? `Conjunto: ${JSON.stringify(conjunto)}`
                    : 'Conjunto: Sin generar'
                }
            </div>
        </div>
    )
}

export default Container;
