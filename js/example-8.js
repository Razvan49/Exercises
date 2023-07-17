// Pseudo array arguments

// Funcțiile arrow nu au o variabilă locală arguments care să conțină toate argumentele.
// Dacă este necesar să colectați toate argumentele într-o matrice, se folosește operatorul rest.

// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]

// Funcții arrow în calitate de callback

// Funcțiile arrow anonime se potrivesc perfect în calitate de callback pentru a itera o matrice
// folosind metodele sale din cauza sintaxei de declarație mai scurte, mai ales dacă nu aveți
// nevoie de un corp de funcție.

// const numbers = [5, 10, 15, 20, 25];

// Declararea funcției
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, valoare ${number}`);
// });

// Anonymus arrow function
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, valoare ${number}`);
// });

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Index ${index}, valoare ${number}`);
};

numbers.forEach(logMessage);
