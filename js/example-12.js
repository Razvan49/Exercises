// Metoda map(callback) se folosește pentru a modifica o matrice.
// Apelează funcția callback pentru fiecare element al matricei și scrie rezultatul execuției sale într-o matrice nouă, care va fi rezultatul metodei.

// array.map((element, index, array) => {
//   // Corpul funcției callback
// });

// Iterează matricea originală element cu element.
// Nu modifică matricea originală.
// Rezultatul funcției callback este scris într-o matrice nouă.
// Returnează o nouă matrice de aceeași lungime.

// Array of objects
// Deja cunoaștem că o sarcină des întâlnită pentru un programator este cea de a manipula o serie de obiecte.
// De exemplu, avem nevoie să obținem o serie de valori dintr-o proprietate de la toate obiectele. Există o serie de studenți, dar trebuie să obținem o matrice separată cu numele lor.

const students = [
  { name: "Mango", score: 83 },
  { name: "Radu", score: 59 },
  { name: "Alex", score: 37 },
  { name: "Andrei", score: 94 },
  { name: "Ion", score: 64 },
];

const names = students.map((student) => student.name);
console.log(names); // ['Mango', 'Radu', 'Alex', 'Andrei', 'Ion']
