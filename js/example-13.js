// Metoda flatMap()
// Metoda flatMap(callback) este similară cu metoda map(), dar este folosită în cazul în care rezultatul este o
// matrice multidimensională și ar trebui adusă la un singur nivel.

// nume.flatMap((element, index, array) => {
//   // Corpul funcției callback
// });

// Matricea students conține o listă de studenți. Fiecare student are o listă de materii pe care el le urmează în proprietatea courses. Mai mulți studenți pot urma aceeași materie.
// Este necesar să se facă o listă cu toate materiile pe care le urmează acest grup, chiar dacă sunt repetate.

const students = [
  { name: "Vasile", courses: ["matematică", "fizică"] },
  { name: "Ion", courses: ["informatică", "matematică"] },
  { name: "Andreea", courses: ["fizică", "biologie"] },
];

students.map((student) => student.courses);
// [['matematică', 'fizică'], ['informatică', 'matematică'], ['fizică', 'biologie']]

students.flatMap((student) => student.courses);
// ['matematică', 'fizică', 'informatică', 'matematică', 'fizică', 'biologie'];

// Această metodă apelează o funcția callback pentru fiecare element al matricei inițiale și scrie rezultatul execuției sale într-o matrice nouă.
// Diferența față de map() este că noua matrice este «aplatizată» la o adâncime de un nivel. Această matrice aplatizată este rezultatul metodei flatMap().
