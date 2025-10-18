
import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Container from './components/Container.jsx'
import { generarNumerosAleatorios, ejecutarAlgoritmoGenetico } from './logic/genAlgorithm.js'



function App() {
  const [limit, setLimit] = useState(""); // Límite
  const [numbers, setNumbers] = useState([]); // nums rand
  const [initialPop, setInitialPop] = useState([]); // población
  const [bestSolution, setBestSolution] = useState([]);
  const [bestSum, setBestSum] = useState(null);
  const [bestGen, setBestGen] = useState(null);

  const generarNumeros = () => {
    const nuevos = generarNumerosAleatorios();
    setNumbers(nuevos);
    setInitialPop([]);
    setBestSolution([]);
    setBestSum(null);
    setBestGen(null);
  };

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

  return (
    <div className='App'>
      <Header />
      {
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
      }
    </div>
  )
}

export default App;
