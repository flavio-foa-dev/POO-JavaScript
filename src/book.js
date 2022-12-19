const book = {
  title:"Eragon",
  pages: 465,
  published: true,
  inStock: 10,
  tags: ["fantasia", "adventure", "medieval"],
  author: {
    name: "Cristopher paolini"
  },
  addStock(quantity) {
    this.inStock += quantity;
  }

}
console.log(book)
book.addStock(15)
console.log(book)

function Book(title, pages, tags, autho){
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.autho = autho;
  this.inStock = 0;

  this.addStock = function(quantity){ this.inStock = quantity}
}

const book1 = new Book("Aragon", 467, 'fantasy', "Cristopher")
book1.addStock(17)
const book2 = new Book("Eldest", 643, "fantasy", "Cristopher")
book2.addStock(33)

console.log(book1)
console.log(book2)
