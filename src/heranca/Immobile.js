class Immobile {
  constructor(area, price, address, owner) {
    this.area = area;
    this.price = price;
    this.address = address;
    this.owner = owner

  }

  getPricePerSquareMetered() {
    return this.price / this.area
  }

}

module.exports = Immobile