function Container({ 
  limit, 
  setLimit, 
  numbers, 
  generarNumeros, 
  ejecutarAlgoritmo,
  initialPop,
  bestSolution,
  bestSum,
  bestGen
}) {
  return (
    <div className="app-container">
      <input
        type="number"
        placeholder="Ingrese el límite"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
      />

      <button onClick={generarNumeros}>Generar Conjunto</button>

      {numbers.length > 0 && (
        <div className="generated-box">
          <h3>Conjunto generado:</h3>
          <p>[{numbers.join(", ")}]</p>
        </div>
      )}

      <button onClick={ejecutarAlgoritmo} style={{ marginTop: "15px" }}>
        Ejecutar Algoritmo
      </button>

      {initialPop.length > 0 && (
        <div className="generated-box" style={{ marginTop: "20px" }}>
          <h3>Población inicial:</h3>
          {initialPop.map((ind, i) => (
            <p key={i}>
              <strong>Individuo {i + 1}:</strong> [{ind.join(", ")}]
            </p>
          ))}
        </div>
      )}

      {bestSum !== null && (
        <div className="generated-box" style={{ marginTop: "20px" }}>
          {bestSum > 0 ? (
            <>
              <h3>Mejor caso</h3>
              <p>Subconjunto: [{bestSolution.join(", ")}]</p>
              <p>Suma: {bestSum}</p>
              <p>Apareció en la generación: {bestGen}</p>
            </>
          ) : (
            <>
              <h3>No hay solución</h3>
              <p>No se cumple el límite = {limit}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Container;