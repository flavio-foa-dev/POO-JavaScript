class Product {

  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price.toFixed(2);
    this.inStock = 0

  }

  addStock(quantity){ this.inStock +=  quantity }

  caculateDiscount(discount){ return this.price * (100 - discount) / 100 }
}

const product1 = new Product ("limao", "fruta", 100, )
const product2 = new Product ("laranja", "fruta", 1000)

console.log(product1)
console.log(product2)

product1.addStock(17)
product2.addStock(23)

const priceWithDiscount1 = product1.caculateDiscount(20)
const priceWithDiscount2 = product2.caculateDiscount(10)

console.log(priceWithDiscount1, "limao")
console.log(priceWithDiscount2, "laranja")


console.log(JSON.stringify(product1, undefined,"  "))
console.log(product2)