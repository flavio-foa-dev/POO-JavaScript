class Account {
  #balance = 0
  constructor(name, type){
    this.name = name;
    this.typeAccount = type;
    this.agency = 18000
    this.accountNumber = Math.floor(Math.random() *10000000)

  }
  getBalance(){
    return `${this.name} seu saldo: ${this.#balance}`
  }

  setAddMoney(value){
    this.#balance += value
  }

  setRemoveMoney(value){
    if (this.#balance < value ){
      console.log("insufficient funds")
    }
    return this.#balance -= value
  }

  tranferMoney(value, accountNumberDest){
    if (this.#balance < value ){
      return console.log("insufficient funds")
    }

    this.setRemoveMoney(value)
    accountNumberDest.setAddMoney(value)
    return console.log(`tranfer made in the amount ${value}`)
  }
}

module.exports = Account