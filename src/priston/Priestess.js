const Characters = require("./Characters");

class Priestess extends Characters {
  constructor(name, gold){
    super(name, gold)
    this.defense = 50;
    this.attack = 90
  }
}

module.exports = Priestess;