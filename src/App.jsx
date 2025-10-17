import { useState } from "react";
import "./App.css";

function App() {
  const [limit, setLimit] = useState(""); // limite
  const [numbers, setNumbers] = useState([]); // num rand
  const [population, setPopulation] = useState([]); // poblacion

  const generarNumeros = () => {
    const nuevos = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    setNumbers(nuevos);
  };

  const generarPoblacionInicial = () => {
    if (numbers.length === 0) {
      alert("Primero genera el conjunto de números.");
      return;
    }

    let nuevaPoblacion = [];
    for (let i = 0; i < 10; i++) {
      let individuo = [];
      numbers.forEach((num) => {
        if (Math.random() > 0.5) {
          individuo.push(num);
        }
      });
      nuevaPoblacion.push(individuo);
    }
    setPopulation(nuevaPoblacion);
  };

  const calcularFitness = (individuo) => {
    let suma = 0;
    individuo.forEach(num => suma += num);
    return suma;
  };
  //----------------------------------------------------------Parte de interfaz----------------------------------------------------------
return (
  <div className="app-container">
    <h1>🎮 Algoritmo Genético - Problema de la Mochila</h1>

    <input
      type="number"
      placeholder="Ingrese el imite"
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

    <button onClick={generarPoblacionInicial} style={{ marginTop: "15px" }}>
      Generar Población Inicial (10 individuos)
    </button>

    {population.length > 0 && (
      <div className="generated-box">
        <h3>Población Inicial:</h3>
        {population.map((individuo, index) => {
          const suma = calcularFitness(individuo);
          const excede = parseInt(suma) > parseInt(limit);

          return (
            <p key={index}>
              <strong>Individuo {index + 1}:</strong> [{individuo.join(", ")}] → Suma:{" "}
              {suma} {excede ? "❌" : "✅"}
            </p>
          );
        })}
      </div>
    )}
  </div>
);
}

export default App;