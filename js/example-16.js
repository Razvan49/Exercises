// Metoda findIndex()
// Metoda findIndex(callback) este un înlocuitor modern pentru metoda indexOf().
// Ne permite să căutăm condiții mai complexe, nu doar egalitatea. Este folosit atât pentru căutarea într-o matrice de primitive, cât și într-o matrice de obiecte.

// array.findIndex((element, index, array) => {
//   // Corpul funcției callback
// });

// Nu modifică matricea originală.
// Iterează matricea originală element cu element.
// Returnează indexul primului element care îndeplinește condiția, atunci când callback-ul returnează true.
// Dacă niciun element nu se potrivește, adică callbackul returnează false pentru toate elementele, metoda returnează -1.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.findIndex((option) => option.label === "blue"); // 2
colorPickerOptions.findIndex((option) => option.label === "pink"); // 3
colorPickerOptions.findIndex((option) => option.label === "white"); // -1
