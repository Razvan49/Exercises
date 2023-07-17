// Funcțiile nu diferă de numere, șiruri de caractere sau matrici -
// sunt doar un tip de date special (obiect de ordin superior),
// valoarea căreia poate fi stocată într-o variabilă sau transmisă
// ca argument unei alte funcții.

// Această funcție pas cu pas face următoarele:

// 1. Definim funcția greet cu un singur parametru, "name".
// 2. În interiorul funcției, construim un șir de caractere folosind șablonul literal (` `)
// și concatenăm valoarea parametrului "name" în șirul de caractere folosind ${name}.
// 3. Returnăm șirul de caractere rezultat din funcție folosind instrucțiunea "return".
// 4. La apelarea funcției greet cu argumentul "Andrei", se afișează rezultatul
// "Bine ai venit, Andrei." în consolă folosind instrucțiunea "console.log(greet("Andrei"));".
// 5. La apelarea funcției greet fără argument, se afișează codul funcției în consolă
// folosind instrucțiunea "console.log(greet);".

function greet(name) {
  return `Bine ai venit, ${name}.`;
}

// Apelăm funcția greet și printăm rezultatul în consolă
console.log(greet("Andrei")); // Bine ai venit, Andrei.

// Parsăm funcția greet fără a fi apelată pentru a o printa în consolă
console.log(greet); // ƒ greet() { return `Bine ai venit, ${name}.`; }
