const Characters = require("./Characters");

class Mechanical extends Characters {
  constructor(name, gold){
    super(name, gold);
    this.defense = 100;
    this.attack = 60
  }
}

module.exports = Mechanical