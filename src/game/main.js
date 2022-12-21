const Character = require('./Character.js')
const Mage = require('./Mage.js')
const Thief = require('./Thief.js')
const Warrior = require('./Warrior.js')


const pers1 = new Character('Kcire', 100, 100, 100)
const mage = new Mage("Alca", 100, 8, 5, 10)
const lula = new Thief("Lula", 1000, 10000, 1000 )
const brasil = new Warrior("Brasileiros", 10, 4, 4, 2)


console.table({pers1, mage, lula, brasil})
brasil.switchStance()
console.table({pers1, mage, lula, brasil})


