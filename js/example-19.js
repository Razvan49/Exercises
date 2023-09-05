function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const vasile = {
  username: "Vasile",
};
const georgiana = {
  username: "Georgiana",
};

// greetGuest.apply(vasile, ["Bun venit"]); // Bunt venit, Vasile.
// greetGuest.apply(georgiana, ["Mă bucur să te revăd"]); // Mă bucur să te revăd, Georgiana.

greetGuest.call(vasile, "Bun venit"); // Bun venit, Vasile.
greetGuest.call(georgiana, "Mă bucur să te revăd"); // Mă bucur să te revăd, Georgiana.
