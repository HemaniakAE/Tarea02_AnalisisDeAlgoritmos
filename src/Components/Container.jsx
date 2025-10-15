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
        </div>
    )
}

export default Container;
