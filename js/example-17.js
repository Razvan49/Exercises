// Metoda every() și some()
// Metoda every()
// Verifică dacă toate elementele unei matrice satisfac condiția funcției callback. Returnează true sau false.

// array.every((element, index, array) => {
//   // Corpul funcției callback
// });

// Nu modifică matricea originală.
// Iterează matricea inițială element cu element.
// Returnează true dacă toate elementele matricei satisfac condiția.
// Returnează false dacă cel puțin un element al matricei nu satisface condiția.
// Iterația matricei se oprește dacă apelul funcției returnează false.

// Toate elementele sunt mai mari sau egale cu zero? - da
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Toate elementele sunt mai mari sau egale cu zero? - nu
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

// Metoda some()
// Verifică dacă cel puțin un element al matricei satisface condiția funcției callback. Returnează true sau false.

// array.some((element, index, array) => {
//   // Corpul funcției callback
// });

// Nu modifică matricea originală.
// Iterează matricea inițială element cu element.
// Returnează true dacă cel puțin un element al matricei satisface condiția.
// Returnează false dacă nici un element al matricei nu satisface condiția.
// Iterația matricei se oprește dacă apelul funcției returnează true.

// Există cel puțin un element mai mare sau egal cu zero? - da
[1, 2, 3, 4, 5].some((value) => value >= 0); // true

// există cel puțin un element mai mare sau egal cu zero? - da
[-7, -20, 3, -10, -14].some((value) => value >= 0); // true

// Există cel puțin un element mai mic decât zero? - da
[1, 2, 3, 4, 5].some((value) => value < 0); // false

// Există cel puțin un element mai mic decât zero? - da
[1, 2, 3, -10, 4, 5].some((value) => value < 0); // true

// Array of objects
// Când lucrăm cu o serie de obiecte, se verifică valoarea unei proprietăți din acele obiecte pentru a
// efectua sortarea sau verificarea lor. Spre exemplu, există o serie de obiecte cu fructe, trebuie să
// aflăm dacă toate fructele sunt disponibile în magazin și dacă există cel puțin un fruct care nu e disponibil,
// adică amount este 0.

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every() va returna true numai dacă toate fructele sunt disponibile
const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false

// some() va returna true dacă cel puțin un fruct este disponibil
const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true
