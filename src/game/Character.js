class Character {
  constructor(name, lifePts, attackPts, defensePts) {
    this.name = name;
    this.lifePts = lifePts;
    this.attackPts = attackPts;
    this.defensePts = defensePts

  }

  attack(targetCharacter) {
    targetCharacter.life -= this.attackPts - targetCharacter.defense
  }
}

module.exports = Character