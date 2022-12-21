const Character = require("./Character.js");

class Warrior extends Character {
  constructor(name, lifePts, attackPts, defensePts, sheildPts) {
    super(name, lifePts, attackPts, defensePts)
    this.sheildPts = sheildPts;
    this.stance = "attacking"
  }

  attack(targetCharacter){
    if (this.stance === "attacking"){
      super.attack(targetCharacter);
    }
  }

  switchStance() {
    if (this.stance == "attacking") {
      this.stance = "defending"
      this.defensePts += this.sheildPts
    }
    if (this.stance == "defending") {
      this.stance = "attacking"
      this.defensePts -= this.sheildPts
    }
  }
}


module.exports = Warrior