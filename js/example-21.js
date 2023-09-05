const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() este un apel la metoda getFullName care
  // nu și-a păstrat contextul obiectului customer
  console.log(`Se procesează cererea primită de la ${callback()}.`);
}

makeMessage(customer.getFullName); // Va apărea o eroare la executarea funcției

// ❌ Înainte
makeMessage(customer.getFullName); // Va apărea o eroare la apelarea funcției

// ✅ După
makeMessage(customer.getFullName.bind(customer)); // Se procesează cererea primită de la Jacob Mercer.
