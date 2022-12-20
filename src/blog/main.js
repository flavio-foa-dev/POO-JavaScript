const Author = require("./Author")

const jhon = new Author("Jhon Doe")

const post = jhon.writePost("PT vale a pena para o Brasil?", "Como voce Pensa a Respeito?")
post.addComment("sera vamos comer picanha  ?", "Jhon Doe")
post.addComment("sera que nao vai ter roubo?", "Jhon Doe")

console.log(jhon)
console.log(post)





