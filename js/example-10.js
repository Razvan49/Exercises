// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Datele matricei numbers s-au modificat
// console.log(numbers); // [2, 4, 6, 8, 10]

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach((element) => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Nu a existat nici o mutație a datelor inițiale
console.log(numbers); // [1, 2, 3, 4, 5]
// Funcția a returnat o nouă matrice cu date modificate
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
