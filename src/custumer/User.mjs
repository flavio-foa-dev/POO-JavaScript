import { data } from'./data.mjs'
console.log(data)

class User {
  constructor(fullName, email, password) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }
  async login() {
    const result = await this.email == data[0].email
    result? console.log("login con sucesso"): console.log("email ou senha invalidos")
  }
}

const user1 = new User("teste", "test@example.com", "test")
console.log(user1)
user1.login()
