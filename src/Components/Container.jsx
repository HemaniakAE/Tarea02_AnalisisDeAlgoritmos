function Container() {
    const conjunto = [1,2,3,4,5,6];

    // Conjuntos de ejemplo para visualizar la evolución
    const evoluciones = [
      { generacion: 1, subconjunto: [7, 8], suma: 15 },
      { generacion: 2, subconjunto: [5, 9, 2], suma: 16 },
      { generacion: 3, subconjunto: [3, 6, 8], suma: 17 },
      { generacion: 4, subconjunto: [4, 7, 5, 2], suma: 18 },
      { generacion: 5, subconjunto: [9, 8, 1], suma: 18 },
      { generacion: 6, subconjunto: [6, 7, 5], suma: 18 },
      { generacion: 7, subconjunto: [10, 8, 2], suma: 20 },
      { generacion: 8, subconjunto: [9, 7, 4], suma: 20 },
      { generacion: 9, subconjunto: [8, 6, 7], suma: 21 },
      { generacion: 10, subconjunto: [10, 9, 2], suma: 21 },
      { generacion: 11, subconjunto: [8, 9, 5], suma: 22 },
      { generacion: 12, subconjunto: [10, 9, 3], suma: 22 },
      { generacion: 13, subconjunto: [10, 8, 5], suma: 23 },
      { generacion: 14, subconjunto: [9, 8, 6], suma: 23 },
      { generacion: 15, subconjunto: [10, 9, 5], suma: 24 },
      { generacion: 16, subconjunto: [10, 7, 6, 1], suma: 24 },
      { generacion: 17, subconjunto: [10, 8, 7], suma: 25 },
      { generacion: 18, subconjunto: [10, 9, 6], suma: 25 },
      { generacion: 19, subconjunto: [10, 8, 7, 1], suma: 26 },
      { generacion: 20, subconjunto: [10, 9, 7], suma: 26 },
      { generacion: 21, subconjunto: [10, 9, 8], suma: 27 },
      { generacion: 22, subconjunto: [10, 9, 8, 1], suma: 28 },
      { generacion: 23, subconjunto: [10, 9, 8, 2], suma: 29 },
      { generacion: 24, subconjunto: [10, 9, 8, 3], suma: 30 },
      { generacion: 25, subconjunto: [10, 9, 8, 4], suma: 31 },
      { generacion: 26, subconjunto: [10, 9, 8, 5], suma: 32 },
      { generacion: 27, subconjunto: [10, 9, 8, 6], suma: 33 },
      { generacion: 28, subconjunto: [10, 9, 8, 6, 1], suma: 34 },
      { generacion: 29, subconjunto: [10, 9, 8, 7], suma: 34 },
      { generacion: 30, subconjunto: [10, 9, 8, 7, 1], suma: 35 },
    ];

    return (
        <div className="container">
            <input 
            type="number"
            placeholder="Ingrese el valor límite L"
            className="input-limite"
            />
            <div className="conjunto-wrapper">
                <button className="conjunto-button">Generar conjunto </button>
                <div className="conjunto-container">
                    {conjunto.length > 0 ? JSON.stringify(conjunto) : '-'}
                </div>    
            </div>
            <div className="evo-wrapper">
                <label className="evo-label">Evolución de conjuntos:</label>
                <div className="evo-container">
                {evoluciones.map((evo) => (
                        <div key={evo.generacion}>
                            Generación {evo.generacion}: Mejor subconjunto {JSON.stringify(evo.subconjunto)} → suma {evo.suma}
                        </div>
                    ))}    
                </div>
            </div>
        </div>
    )
}

export default Container;
