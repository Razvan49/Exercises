// Metoda forEach
// Este o metodă de iterare care este utilizată în locul buclei for și
// for...of atunci când lucrăm cu o colecție de date.

const numbers = [5, 10, 15, 20, 25];

// // Bucla for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, valoare ${numbers[i]}`);
// }

// Metodă de iterare de tip Higher-Order Function
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, valoare ${number}`);
});

const plumbers = [5, 10, 15, 20, 25];

plumbers.forEach(function (element, index) {
  console.log(`Index ${index}, valoare ${element}`);
});
