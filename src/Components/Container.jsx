/**
 * @file Container.jsx
 * @description Componente que maneja la interfaz principal de interacción con el algoritmo genético.
 * Permite ingresar un límite, generar un conjunto de números aleatorios, ejecutar el algoritmo y
 * mostrar la población inicial, mejor solución y estadísticas del proceso.
 *
 * Componente Container.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.limit - Límite ingresado por el usuario para para maximizar
 * @param {Function} props.setLimit - Función para actualizar el valor del límite.
 * @param {number[]} props.numbers - Conjunto de números aleatorios generados.
 * @param {Function} props.generarNumeros - Función que genera un nuevo conjunto de números aleatorios.
 * @param {Function} props.ejecutarAlgoritmo - Función que ejecuta el algoritmo genético con los datos actuales.
 * @param {Array[]} props.initialPop - Población inicial generada por el algoritmo genético.
 * @param {Array} props.bestSolution - Mejor subconjunto encontrado por el algoritmo.
 * @param {number|null} props.bestSum - Suma asociada al mejor subconjunto.
 * @param {number|null} props.bestGen - Generación en la que se encontró la mejor solución.
 * @returns {JSX.Element} Interfaz completa que incluye inputs, botones y visualización de resultados.
 */


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