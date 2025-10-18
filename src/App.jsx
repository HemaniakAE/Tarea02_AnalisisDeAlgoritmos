/**
 * @file App.jsx
 * @description Componente principal de la aplicación. Gestiona el estado de la interfaz y 
 * controla la interacción con el algoritmo genético para la generación de números y cálculo 
 * de soluciones óptimas.
 */

import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Container from './components/Container.jsx'
import ResetButton from './components/ResetButton.jsx'
import { generarNumerosAleatorios, ejecutarAlgoritmoGenetico } from './logic/genAlgorithm.js'

/**
 * Componente principal de la app.
 * 
 * @component
 * @returns {JSX.Element} La estructura completa de la aplicación con el header, botones y contenedor de conjuntos.
 */

function App() {
  const [limit, setLimit] = useState(""); // Límite máximo ingresado por el usuario
  const [numbers, setNumbers] = useState([]); // números random
  const [initialPop, setInitialPop] = useState([]); // población
  const [bestSolution, setBestSolution] = useState([]); //Mejor solución
  const [bestSum, setBestSum] = useState(null); //Mejor suma
  const [bestGen, setBestGen] = useState(null); //Generación en la que se encontró el mejor

   /**
   * Genera un nuevo conjunto de números aleatorios y resetea el estado de resultados anteriores.
   * @function
   */

  const generarNumeros = () => {
    const nuevos = generarNumerosAleatorios();
    setNumbers(nuevos);
    setInitialPop([]);
    setBestSolution([]);
    setBestSum(null);
    setBestGen(null);
  };

  /**
   * Ejecuta el algoritmo genético utilizando los números generados y el límite ingresado por el usuario.
   * Actualiza el estado con la población inicial, mejor solución, mejor suma y generación de mejor solución.
   * Maneja excepciones mostrando un alert en caso de error.
   * @function
   */

  const ejecutarAlgoritmo = () => {
    try {
      const resultado = ejecutarAlgoritmoGenetico(numbers, limit);
      
      setInitialPop(resultado.poblacionInicial);
      setBestSolution(resultado.mejorSolucion);
      setBestSum(resultado.mejorSuma);
      setBestGen(resultado.generacionMejor);
    } catch (error) {
      alert(error.message);
    }
  };

  /**
   * Resetea todos los estados de la aplicación a su valor inicial.
   * Se utiliza al presionar el botón con el símbolo de la pestaña, está 
   * en la parte superior izquierda de la ventana.
   * @function
   */
  
  const resetearTodo = () => {
    setLimit("");
    setNumbers([]);
    setInitialPop([]);
    setBestSolution([]);
    setBestSum(null);
    setBestGen(null);
  };

  return (
    <div className='App'>
      <Header />
      <ResetButton onReset={resetearTodo} />
      <div className='card'>
        <Container 
          limit={limit}
          setLimit={setLimit}
          numbers={numbers}
          generarNumeros={generarNumeros}
          ejecutarAlgoritmo={ejecutarAlgoritmo}
          initialPop={initialPop}
          bestSolution={bestSolution}
          bestSum={bestSum}
          bestGen={bestGen}
        />
      </div>
    </div>
  )
}

export default App;
