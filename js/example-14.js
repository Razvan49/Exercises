// Metoda filter()
// Metoda filter(callback) este folosită cu un singur scop - filtrarea unei matrice,
// atunci când este necesar să găsim mai mult de un element într-o colecție după un anumit criteriu.

// array.filter((element, index, array) => {
//   // Corpul funcției callback
// });

// Nu modifică matricea inițială.
// Iterează peste matricea inițială element cu element.
// Returnează o nouă matrice.
// Adaugă în matricea creată elementele care satisfac condiția funcției callback.
// Dacă callback-ul a returnat true, elementul este adăugat în matricea returnată.
// Dacă callback-ul a returnat false, elementul nu este adăugat.
// Dacă niciun element nu satisface condiția, returnează o matrice goală.

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter((value) => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter((value) => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter((value) => value > 1000);
// console.log(bigValues); // []

// Matricea inițială nu s-a modificat.
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// Filtrarea elementelor unice
// Folosind metoda filter(), putem filtra o matrice astfel încât să rămână doar elementele unice.
// Acest truc funcționează numai cu o serie de valori primitive - nu cu obiecte.

// Să revenim la colecția de studenți și la proprietatea courses care conține o listă cu materiile fiecărui
// student pe care le urmează, obținută cu metoda flatMap().

// const students = [
//   { name: "Vasile", courses: ["matematică", "fizică"] },
//   { name: "Ion", courses: ["informatică", "matematică"] },
//   { name: "Andreea", courses: ["fizică", "biologie"] },
// ];

// const allCourses = students.flatMap((student) => student.courses);
// // ['matematică', 'fizică', 'informatică', 'matematică', 'fizică', 'biologie'];

// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Radu", score: 59 },
//   { name: "Alex", score: 37 },
//   { name: "Andrei", score: 94 },
//   { name: "Ion", score: 64 },
// ];

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Radu", score: 59 },
  { name: "Alex", score: 37 },
  { name: "Andrei", score: 94 },
  { name: "Ion", score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // O matrice cu obiectele: Mango și Andrei

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(worst); // O matrice cu un singur obiect Alex

// Într-o funcție callback este comod să destructurăm proprietățile unui obiect
const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
console.log(average); // O matrice cu obiectele: Radu și Ion
