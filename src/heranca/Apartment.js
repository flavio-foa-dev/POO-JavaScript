const Immobile = require("./Immobile");

class Apartment extends Immobile {
  constructor(area, price, address, owner, number ) {
    super(area, price, address, owner);
    this.number = number
    this.type = "Apartament"
  }

  getFloor() {
    return this.number.slice(0, -2)
  }

}

module.exports = Apartment;

