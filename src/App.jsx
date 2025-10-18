import { useState } from "react";
import "./App.css";

function App() {
  const [limit, setLimit] = useState(""); //Limite
  const [numbers, setNumbers] = useState([]); //nums rand
  const [initialPop, setInitialPop] = useState([]); //población
  const [bestSolution, setBestSolution] = useState([]);
  const [bestSum, setBestSum] = useState(null);
  const [bestGen, setBestGen] = useState(null);

  const toInt = (x) => parseInt(x, 10);

  // fitness
  const fitness = (ind, L) => {
    let s = 0;
    for (let i = 0; i < ind.length; i++) s += ind[i];
    return s > L ? 0 : s;
  };

  const generarNumeros = () => {
    const nuevos = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
    setNumbers(nuevos);
    setInitialPop([]);
    setBestSolution([]);
    setBestSum(null);
    setBestGen(null);
  };

  const individuoAleatorio = (base) => {
    const ind = [];
    base.forEach((n) => {
      if (Math.random() > 0.5) ind.push(n);
    });
    return ind;
  };

  const seleccionar = (pobl, L) => {
    const ordenados = [...pobl].sort((a, b) => fitness(b, L) - fitness(a, L));
    const mitad = Math.max(2, Math.floor(ordenados.length / 2));
    return ordenados.slice(0, mitad);
  };

  // cruce 80%
  const cruzar = (padres) => {
    const tasaCruce = 0.8;
    const hijos = [];
    for (let i = 0; i < padres.length; i += 2) {
      const p1 = padres[i];
      const p2 = padres[i + 1];
      if (!p2) { hijos.push([...p1]); break; } // si es impar

      if (Math.random() < tasaCruce) {
        const m1 = Math.floor(p1.length / 2);
        const m2 = Math.floor(p2.length / 2);
        const h1 = [...p1.slice(0, m1), ...p2.slice(m2)];
        const h2 = [...p2.slice(0, m2), ...p1.slice(m1)];
        hijos.push(h1, h2);
      } else {
        hijos.push([...p1], [...p2]); //sin cruce
      }
    }
    return hijos;
  };

  // mutación 10%
  const mutar = (pobl, base) => {
    const tasaMut = 0.1;
    return pobl.map((ind) => {
      let nuevo = [...ind];
      if (Math.random() < tasaMut) {
        if (nuevo.length > 0 && Math.random() < 0.5) {
          //quitar
          const idx = Math.floor(Math.random() * nuevo.length);
          nuevo.splice(idx, 1);
        } else {
          //juntar
          const gen = base[Math.floor(Math.random() * base.length)];
          nuevo.push(gen);
        }
      }
      return nuevo;
    });
  };

// limite de tamaño
  const normalizar = (pobl, base) => {
    const copia = [...pobl];
    while (copia.length < 10) copia.push(individuoAleatorio(base));
    return copia.slice(0, 10);
  };

  // ------- botón ejecutar algoritmo -------
  const ejecutarAlgoritmo = () => {
    const L = toInt(limit);
    if (!L || L <= 0) {
      alert("Limite invalido.");
      return;
    }
    if (numbers.length === 0) {
      alert("generar conjunto de nums");
      return;
    }

    let pobl = [];
    for (let i = 0; i < 10; i++) pobl.push(individuoAleatorio(numbers));
    setInitialPop(pobl);

    let mejor = [];
    let mejorSuma = -1;
    let genMejor = 1;

    for (let i = 0; i < pobl.length; i++) {
      const fit = fitness(pobl[i], L);
      if (fit > mejorSuma) {
        mejorSuma = fit;
        mejor = [...pobl[i]];
        genMejor = 1;
      }
    }

    //25 generaciones
    for (let gen = 1; gen <= 25; gen++) {
      const padres = seleccionar(pobl, L);
      let hijos = cruzar(padres);
      hijos = mutar(hijos, numbers);
      pobl = normalizar(hijos, numbers);

      // evalua la mejor opcion
      for (let i = 0; i < pobl.length; i++) {
        const fit = fitness(pobl[i], L);
        if (fit > mejorSuma) {
          mejorSuma = fit;
          mejor = [...pobl[i]];
          genMejor = gen; // guarda en cual salio
        }
      }
    }

    setBestSolution(mejor);
    setBestSum(mejorSuma);
    setBestGen(genMejor);
  };

  // ------- intewrfaz -------
  return (
    <div className="app-container">
      <h1>Algoritmo Genético - Problema de la Mochila</h1>

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
            <p>aparecio en la gen: {bestGen}</p>
          </>
        ) : (
          <>
            <h3>No hay solución</h3>
            <p>no se cumple el limite = {limit}</p>
          </>
        )}
      </div>
    )}
    </div>
  );
}

export default App;
