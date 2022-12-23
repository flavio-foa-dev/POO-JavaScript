const Characters = require("./Characters");

class Assassin extends Characters {
  constructor(name, gold){
    super(name, gold);
    this.defense = 60;
    this.attack = 100
  }
}

module.exports = Assassin