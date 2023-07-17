// Funcția callback (callback function) - este o funcție care este transmisă ca argument unei
//  alte funcții, care la rândul său apelează funcția primită.

// Higher Order Function (HOF) - o funcție care ia alte funcții ca parametri sau returnează
// o altă funcție ca rezultat.

// 1. Se apelează funcția registerGuest cu doi parametri: "Andrei" și greet.
// 2. În interiorul funcției registerGuest, se afișează în consolă mesajul
// "Introducem datele vizitatorului în sistem: Andrei.".
// 3. Se apelează funcția de tip HOF callback (în acest caz, greet) și se transmite
// argumentul "Andrei".
// 4. În interiorul funcției greet, se afișează în consolă mesajul "Bine ai venit, Andrei.".

// Funcție callback
function greet(name) {
  console.log(`Bine ai venit, ${name}.`);
}

// Funcție de tip HOF
function registerGuest(name, callback) {
  console.log(`Introducem datele vizitatorului în sistem: ${name}.`);
  callback(name);
}

registerGuest("Andrei", greet);
