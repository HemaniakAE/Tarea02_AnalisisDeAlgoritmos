function Container() {
    const conjunto = [1,2,3,4,5,6];
    return (
        <div className="container">
            <input 
            type="number"
            placeholder="Ingrese el valor límite L"
            className="input-limite"
            />
            <div className="conjunto-wrapper">
                <label className="conjunto-label">Conjunto: </label>
                <div className="conjunto-container">
                    {conjunto.length > 0 ? JSON.stringify(conjunto) : '-'}
                </div>    
            </div>
            <div className="evo-wrapper">
                <label className="evo-label">Evolución de conjuntos:</label>
                <div className="evo-container">
                {/*Se supone que aquí irán los conjuntos evolucionando*/}    
                </div>
            </div>
        </div>
    )
}

export default Container;
