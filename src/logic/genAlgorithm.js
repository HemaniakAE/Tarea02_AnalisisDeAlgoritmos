
export const toInt = (x) => parseInt(x, 10);

// Fitness
export const fitness = (ind, L) => {
  let s = 0;
  for (let i = 0; i < ind.length; i++) s += ind[i];
  return s > L ? 0 : s;
};

// Genera números aleatorios
export const generarNumerosAleatorios = () => {
  return Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
};

// Crea individuo aleatorio
export const individuoAleatorio = (base) => {
  const ind = [];
  base.forEach((n) => {
    if (Math.random() > 0.5) ind.push(n);
  });
  return ind;
};

// Selecciona los mejores individuos
export const seleccionar = (pobl, L) => {
  const ordenados = [...pobl].sort((a, b) => fitness(b, L) - fitness(a, L));
  const mitad = Math.max(2, Math.floor(ordenados.length / 2));
  return ordenados.slice(0, mitad);
};

// Cruza individuos (80% de probabilidad)
export const cruzar = (padres) => {
  const tasaCruce = 0.8;
  const hijos = [];
  for (let i = 0; i < padres.length; i += 2) {
    const p1 = padres[i];
    const p2 = padres[i + 1];
    if (!p2) { 
      hijos.push([...p1]); 
      break; 
    }

    if (Math.random() < tasaCruce) {
      const m1 = Math.floor(p1.length / 2);
      const m2 = Math.floor(p2.length / 2);
      const h1 = [...p1.slice(0, m1), ...p2.slice(m2)];
      const h2 = [...p2.slice(0, m2), ...p1.slice(m1)];
      hijos.push(h1, h2);
    } else {
      hijos.push([...p1], [...p2]);
    }
  }
  return hijos;
};

// Muta individuos con 10% de probabilidad
export const mutar = (pobl, base) => {
  const tasaMut = 0.1;
  return pobl.map((ind) => {
    let nuevo = [...ind];
    if (Math.random() < tasaMut) {
      if (nuevo.length > 0 && Math.random() < 0.5) {
        // Quitar un elemento
        const idx = Math.floor(Math.random() * nuevo.length);
        nuevo.splice(idx, 1);
      } else {
        // Agregar un elemento
        const gen = base[Math.floor(Math.random() * base.length)];
        nuevo.push(gen);
      }
    }
    return nuevo;
  });
};

// Normaliza población mantener tamaño de 10
export const normalizar = (pobl, base) => {
  const copia = [...pobl];
  while (copia.length < 10) copia.push(individuoAleatorio(base));
  return copia.slice(0, 10);
};

// Ejecuta el algoritmo genético completo
export const ejecutarAlgoritmoGenetico = (numbers, limit) => {
  const L = toInt(limit);
  
  if (!L || L <= 0) {
    throw new Error("Límite inválido");
  }
  if (numbers.length === 0) {
    throw new Error("Generar conjunto de números primero");
  }

  // Crea la población inicial
  let pobl = [];
  for (let i = 0; i < 10; i++) {
    pobl.push(individuoAleatorio(numbers));
  }

  const poblacionInicial = [...pobl];
  let mejor = [];
  let mejorSuma = -1;
  let genMejor = 1;

  // Evalua población inicial
  for (let i = 0; i < pobl.length; i++) {
    const fit = fitness(pobl[i], L);
    if (fit > mejorSuma) {
      mejorSuma = fit;
      mejor = [...pobl[i]];
      genMejor = 1;
    }
  }

  // Evoluciona 25 generaciones
  for (let gen = 1; gen <= 25; gen++) {
    const padres = seleccionar(pobl, L);
    let hijos = cruzar(padres);
    hijos = mutar(hijos, numbers);
    pobl = normalizar(hijos, numbers);

    // Evaluar la mejor opción
    for (let i = 0; i < pobl.length; i++) {
      const fit = fitness(pobl[i], L);
      if (fit > mejorSuma) {
        mejorSuma = fit;
        mejor = [...pobl[i]];
        genMejor = gen;
      }
    }
  }

  return {
    poblacionInicial,
    mejorSolucion: mejor,
    mejorSuma,
    generacionMejor: genMejor
  };
};

