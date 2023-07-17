// Inline callback
// Dacă funcția callback este scurtă și trebuie transmisă doar o dată ca argument,
// atunci poate fi declarată direct la apelarea funcției căreia îi transmitem callback-ul.
// O astfel de funcție va fi disponibilă doar ca valoare a parametrului și nicăieri
// altundeva în cod.

// 1. Se definește funcția registerGuest cu doi parametri: name și callback.
// Aceasta primește un nume și o funcție de callback.
// 2. În interiorul funcției registerGuest, se afișează un mesaj în consolă folosind
// valoarea parametrului name. Mesajul indică introducerea datelor vizitatorului în sistem.
// 3. Apelăm funcția de callback callback și îi transmitem parametrul name.
// 4. Primul apel al funcției registerGuest se face cu numele "Andrei" și o
// funcție anonimă inline ca și callback. Funcția inline se afișează mesajul de bun venit,
// folosind valoarea parametrului name.
// 5. Al doilea apel al funcției registerGuest se face tot cu numele "Andrei" și o
// altă funcție anonimă inline ca și callback. Funcția inline se afișează un mesaj de
// notificare, folosind valoarea parametrului name.

function registerGuest(name, callback) {
  console.log(`Introducem datele vizitatorului în sistem: ${name}.`);
  callback(name);
}

// Transmitem funcția inline greet ca și callback.
registerGuest("Razvan", function greet(name) {
  console.log(`Bine ai venit, ${name}.`);
});

// Transmitem funcția notify greet ca și callback.
registerGuest("Andrei", function notify(name) {
  console.log(`Dragă ${name}, comanda dvs. va fi procesată în 30 de minute.`);
});

// Transmitem funcția notify greet ca și callback.
registerGuest("Cosmin", function test(name) {
  console.log(`Dragă ${name}, comanda dvs. va fi procesată în 30 de minute.`);
});
