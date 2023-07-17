// Metoda filter() ascunde logica de iterație a colecției și apelează funcția callback pe care o parsăm
// pentru a fi executată pentru fiecare element, returnând o matrice de elemente care se potrivesc criteriilor.

// Abordare declarativă
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const filteredNumbers = numbers.filter((value) => value >= 3);
console.log(filteredNumbers); // [4, 5]
