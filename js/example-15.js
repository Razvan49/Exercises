// Metoda find()
// Dacă metoda filter(cabllack) este folosită pentru a găsi toate elementele care satisfac o condiție,
// atunci metoda find(callback) găsește și returnează primul element care se potrivește condiției după care iterația matricei
// se oprește.

// array.find((element, index, array) => {
//   // Corpul funcției callback
// });

// Nu modifică matricea inițială.
// Iterează peste matricea inițială element cu element.
// Returnează primul element care îndeplinește condiția, adică atunci când callback-ul returnează true.
// Dacă niciun element nu satisface condiția , adică callback-ul returnează false pentru toate elementele, metoda
// returnează undefined.
// Metoda find() este folosită cu un singur scop - găsirea unui element după o valoare unică a proprietății.
// De exemplu: căutarea unui utilizator după adresa electronică, a unei mașini după numărul de serie sau a unei cărți după titlu.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find((option) => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find((option) => option.label === "white"); // undefined
