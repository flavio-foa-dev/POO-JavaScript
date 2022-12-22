const Account = require("./Account");
const AccountPF = require("./AccountPf");
const AccountPJ = require("./AccountPJ");

const erick = new AccountPF("Erick Jhonson", "000.000.007-10");
const flavio = new AccountPF("Flavio Jhon", "000.000.007-11");
const foa = new AccountPJ("FOA", "00.344.222/0001-12")
console.table({foa, erick, flavio})
console.log("\n")
console.log(erick.getBalance())
console.log(flavio.getBalance())
console.log("\n")
console.log("there were deposits in the account")
erick.setAddMoney(500)
flavio.setAddMoney(600)
console.log(erick.getBalance())
console.log(flavio.getBalance())
console.log("\n")
erick.tranferMoney(100, flavio )
console.log(erick.getBalance())
console.log(flavio.getBalance())








