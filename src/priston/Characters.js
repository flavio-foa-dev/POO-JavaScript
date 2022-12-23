const Itens = require("./Itens");

class Characters {
  constructor(name, gold) {
    this.name = name;
    this.life = 100
    this.gold = gold
    this.itens = new Array()
  }

  addItem(item) {
    this.itens.push(item)
  }

  getIten(){
    const iten = new Itens()
    if (iten.price <= this.gold){
      this.gold -= iten.price
     return this.itens.push(iten)
    }
  return console.log(" you need more  gold")

  }
}

module.exports = Characters;

