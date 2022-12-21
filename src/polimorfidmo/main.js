const { Factory, Nescal, Water } = require('./Factory')


const product = new Factory()
const nescal = new Nescal()
const water = new Water()




function factory (product) {
  console.log("product")

  product.creating()

}

factory(product)
factory(nescal)
factory(water)

