// Several callbacks

// O funcție poate accepta un număr nelimitat de callback-uri. De exemplu, să ne
// imaginăm că scriem logica de acceptare a apelului telefonic. Programul trebuie
// să pornească robotul telefonic dacă abonatul nu este disponibil sau în caz contrar
// să conecteze apelul. Disponibilitatea abonatului va fi simulată de un generator de
// numere aleatorii, astfel încât să poată fi obținute rezultate diferite la diferite
// apeluri de funcție.

// 1. Se definește funcția processCall cu trei parametri: recipient, onAvailable și
// onNotAvailable. Aceasta primește numele destinatarului apelului, o funcție de callback
// onAvailable pentru cazul în care destinatarul este disponibil și o funcție de callback
// onNotAvailable pentru cazul în care destinatarul nu este disponibil.
// 2. Se generează o valoare aleatoare între 0 și 1 utilizând Math.random().
// 3. Se verifică dacă valoarea generată este mai mare decât 0.5, folosind condiția
// Math.random() > 0.5. Aceasta simulează disponibilitatea destinatarului apelului.
// 4. Dacă valoarea este mai mare decât 0.5, destinatarul este considerat disponibil.
// Dacă destinatarul nu este disponibil (valoarea generată este mai mică sau egală cu 0.5),
// se apelează funcția de callback onNotAvailable și i se transmite parametrul recipient.
// Apoi, se încheie execuția funcției utilizând return.
// 5. În caz contrar, dacă destinatarul este disponibil (valoarea generată este mai
//   mare decât 0.5), se apelează funcția de callback onAvailable și i se transmite
//   parametrul recipient.

// Funcțiile takeCall, activateAnsweringMachine și leaveHoloMessage sunt funcții de
// callback definite separat, care vor fi apelate în funcția processCall, în funcție de disponibilitatea destinatarului.

// 1. Funcția takeCall afișează un mesaj în consolă pentru conectarea cu utilizatorul
// specificat prin parametrul name. Aceasta reprezintă logica de conectare a apelurilor
// între doi utilizatori.
// Funcția activateAnsweringMachine afișează un mesaj în consolă pentru activarea robotului
// telefonic, deoarece destinatarul nu este disponibil. Parametrul name reprezintă numele
// destinatarului.
// 2. Funcția leaveHoloMessage afișează un mesaj în consolă pentru înregistrarea unei holograme,
// deoarece destinatarul nu este disponibil. Parametrul name reprezintă numele destinatarului.
// 3. În apelurile funcției processCall, se transmite numele destinatarului și funcțiile de
// callback corespunzătoare în funcția processCall. Astfel, în funcție de disponibilitatea
// destinatarului, va fi apelată funcția de callback potrivită.
// 4. Se apelează funcția processCall cu numele "Andrei", funcția takeCall ca și
//callback
// pentru cazul în care destinatarul este disponibil și funcția
//activateAnsweringMachine ca și callback pentru cazul în care destinatarul nu
//este disponibil.
// Se apelează funcția processCall cu numele "Vasile", funcția takeCall ca și
//callback
// pentru cazul în care destinatarul este disponibil și funcția leaveHoloMessage
//ca și callback pentru cazul în care destinatarul nu este disponibil.

function processCall(recipient, onAvailable, onNotAvailable) {
  // Simulăm disponibilitatea unui abonat cu un număr aleatoriu
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Vă conectăm cu utilizatorul ${name}, va rugăm să așteptați...`);
  // Logica de conectare a apelurilor între 2 utilizatori
}

function activateAnsweringMachine(name) {
  console.log(`Abonatul ${name} nu este disponibil, va rugăm să lăsați un mesaj.`);
  // Logica de activare a robotului telefonic
}

function leaveHoloMessage(name) {
  console.log(`Abonatul ${name} nu este disponibil, înregistrați o hologramă.`);
  // Logica de înregistrare a unei holograme
}

processCall("Andrei", takeCall, activateAnsweringMachine);
processCall("Vasile", takeCall, leaveHoloMessage);
