const Address = require("../associacao/Address");
const Apartment = require("./Apartment");

const Houset = require("./House");
const Immobile = require("./Immobile");
const Owner = require("./Owner");

const address = new Address("Noranha Torrezao",1355, "Jardim", "Centro", "RJ")
const owner = new Owner("jhon Doe", "000.000.007.10")

const property = new Immobile(100, 1000, address, owner)

const myHome = new Houset(9, 3, address, owner)

const myApartment = new Apartment(130, 1100000, address, owner, "1101")

console.log(JSON.stringify(myHome, undefined, "  "))
console.log(JSON.stringify(myApartment, undefined, "  "))
console.log(myApartment.getFloor())

console.log(property.getPricePerSquareMetered())