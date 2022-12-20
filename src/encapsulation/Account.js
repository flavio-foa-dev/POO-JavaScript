class Account {
  #password;
  #balance;

  constructor(user) {
    this.email = user.email;
    this.password = user.password;
    this.balance = 0
  }

  getBalance(email, password) {
    if (this.#authentication(email, password)) {
      return `Saldo: ${this.balance}`;
    }
    return "sem acesso"
  }

  #authentication(email, password) {
    return this.email === email && this.password === password
  }
}


const user = {
  email: "email@example.com",
  password: "password"
}

const myAccount = new Account(user)
console.log(myAccount)

console.log(myAccount.getBalance())
console.log(myAccount.getBalance("email@example.com", "password"))

