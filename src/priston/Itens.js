class Itens {
  constructor() {
   this.name = ''
   this.life = 0
   this.defense = 0
   this.price = 0
   this.createdIten()
  }

  createdIten() {
    const types = ["Escudo", "Spada", "Cajado", "Varinha", "Foice" ]
    this.name = types[Math.ceil(Math.random()* types.length -1)]
    this.life = Math.ceil(Math.random()*11)-1
    this.defense = Math.ceil(Math.random()*15)-1
    this.price = Math.ceil(Math.random()*100)
  }
}

module.exports = Itens
