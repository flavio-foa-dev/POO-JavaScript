const Account = require("./Account");

class AccountPF extends Account {
  constructor(name, cpf,) {
    super(name, "PF")
    this.cpf = cpf;

  }

}

module.exports = AccountPF