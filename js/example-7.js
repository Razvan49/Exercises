// Arrow functions
// Arrow functions sau funcțiile săgeată au o sintaxă mai scurtă, mai concisă,
// ceea ce reduce cantitatea de cod, mai ales atunci când funcția este mică sau
// dacă este folosită în calitate de callback.

// Toate funcțiile de acest tip sunt create ca function expression, iar dacă funcția
// nu este anonimă, atunci trebuie să fie atribuită unei variabile.

// Declararea unei funcții simple
function classicAdd(a, b, c) {
  return a + b + c;
}

// Declararea unei funcții de tip arrow
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

console.log(classicAdd(2, 3, 5));
console.log(arrowAdd(2, 3, 5));

const add = (a, b, c) => {
  return a + b + c;
};
console.log(add(2, 3, 5));

// Dacă există un singur parametru, declararea acestuia poate fi fără paranteze.

const add2 = (a) => {
  return a + 5;
};

console.log(add2(2));

// Dacă nu există parametri, atunci trebuie obligatoriu să existe paranteze
// rotunde goale.

const greet = () => {
  console.log("Salut!");
};
console.log(greet());

const add3 = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
console.log(add3(2, 8, 9));

const add4 = (a, b, c) => a + b + c;
console.log(add4(10, 10, 10));
