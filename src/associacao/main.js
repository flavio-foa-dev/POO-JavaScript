const Address = require("./Address");
const Person = require("./Person");

const address = new Address("Prado", 1355, "Centro", "Araruama", "RJ")
const person = new Person("Flavio foa", address)





console.log(person)
console.log(person.adress.fullAddress())
