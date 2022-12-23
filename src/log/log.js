// atalho ctr + shift + j
// $0 pegar elemt $form  $$inpt pega todos os inputs

const obj1 = { name: "Jhon Doe", age: 60 }
const obj2 = { name: "fulano de tal", age: 30, type: "pf" }

console.table({obj1, obj2})
// console.group("Inicio das mensagens")
console.groupCollapsed("Inicio das mensagens")//f5

console.error("Isso 'e um Error")
console.warn("isso 'e um aviso ")
console.groupEnd("fim das mensagens")
// da pra fazer um teste de error


const num = 6

console.assert( num  < 5, "num must be less than 5")

console.table([
   [1,2,3],
  [1,2,3]
])

console.table([
  {name:"Jhon Doe", age: 28},
  { name:"fulano de tal", age: 30}
])

