const Account = require("./Account");

class AccountPJ extends Account {
  constructor(name, cnpj) {
    super(name, "PJ")
    this.cnpj = cnpj
  }
}

module.exports = AccountPJ