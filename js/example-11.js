// Pure function - este o funcție al cărei rezultat depinde doar de valorile argumentelor transmise.
// Pentru aceleași argumente, returnează mereu același rezultat și nu are efecte secundare, adică nu modifică valorile argumentelor.

const planets = ["Pământ", "Marte", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ['PĂMÂNT', 'MARTE', 'VENUS', 'JUPITER']

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ['pământ', 'marte', 'venus', 'jupiter']

// Matricea originală nu a fost modificată
console.log(planets); // ['Pământ', 'Marte', 'Venus', 'Jupiter']
