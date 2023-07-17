// Abstractizarea repetiției
// Abstractizarea - ascunde detaliile de implementare.
// Ne permite să gândim la sarcini la un nivel superior (abstract).
// Funcțiile sunt o modalitate bună de a implementa abstractizarea.

// De exemplu, un script efectuează o anumită acțiune de un anumit număr de ori.
// Putem scrie o buclă for pentru aceasta.

// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
// }

// Putem oare abstractiza de «a face ceva de N ori» ca funcție? - răspunsul e da,
// să scriem o funcție care apelează console.log() de N ori.

// function repeatLog(n) {
//   for (let i = 0; i <= n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

// Dar dacă vrem să facem altceva decât doar să înregistrăm niște numere?
// Deoarece «fă ceva» poate fi gândit ca o funcție, iar funcțiile sunt doar valori,
// putem parsa o acțiune în calitate de argument.

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Parsăm printValue ca și funcție callback
repeat(3, printValue);
// 0
// 1
// 2

// Parsăm prettyPrint ca și funcție callback
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2
