const Immobile = require("./Immobile");

class Houset extends Immobile {
  constructor(area, price, address, owner){
    super(area, price, address, owner)
    this.type = "Houset"
  }
}

module.exports = Houset