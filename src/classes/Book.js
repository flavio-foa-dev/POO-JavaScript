class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.published = false;

  }

  pulblish() {
     this.published = true;
  }

}

const book1 = new Book("Aragon", "Cristopher")
const book2 = new Book("Eldest", "Cristopher")
book1.pulblish()

console.log(book1)
console.log(book2)

console.log(book1 instanceof Book)
console.log(book1 instanceof Array)

