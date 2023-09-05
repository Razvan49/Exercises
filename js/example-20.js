function greet(clientName) {
  return `${clientName}, bun venit în serviciul «${this.service}».`;
}

const steam = {
  service: "Steam",
};

const steamGreeter = greet.bind(steam);
console.log(steamGreeter("Vasile"));

const gmail = {
  service: "Gmail",
};
const gmailGreeter = greet.bind(gmail);
console.log(gmailGreeter("Georgiana"));
