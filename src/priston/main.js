const Assassin = require("./Assassin");
const Mechanical = require("./Mechanical");
const Priestess = require("./Priestess");

const mec = new Mechanical("Thor", 100);
const sacer = new Priestess("Bela", 250)
const pike = new Assassin("Ghorr", 150)

console.table({mec, sacer, pike})



mec.getIten()
mec.getIten()
mec.getIten()


sacer.getIten()
pike.getIten()

mec.itens.forEach(item => console.log("name" , item))



console.table({mec, sacer, pike})
console.log(JSON.stringify(mec, null, "  "))
console.log(JSON.stringify(sacer, null, "  "))
console.log(JSON.stringify(pike, null, "  "))








